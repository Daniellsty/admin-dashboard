import React from 'react'
import  { useEffect } from "react";
// react icons
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdExpandLess, MdKeyboardArrowDown } from "react-icons/md";
// tooltip components
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useActiveMenu } from '../contexts/ContextProvider';
import avatar from "./../data/avatar3.png";
import Chat from './Chat';
import UserProfile from './UserProfile';
import Cart from './Cart';
import Notification from './Notification';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);


const Navbar = () => {
  const {activeMenu,setActiveMenu,clicked,setClicked,handleClick,screenSize,setScreenSize,currentColor} = useActiveMenu()
  useEffect(() => {
  
    const handleResize = ()=> setScreenSize(window.innerWidth)

    window.addEventListener('resize',handleResize)

    handleResize()

    return ()=> window.removeEventListener('resize',handleResize)
   
   
  }, []);

  useEffect(() => {
    if(screenSize <= 900){
      setActiveMenu(false)
    }else{
      setActiveMenu(true)
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative ">

    <NavButton color={currentColor} title="Menu" customFunc={()=> setActiveMenu(prev=>  !prev)} icon={<AiOutlineMenu />} />
    <div className="flex">
    <NavButton color={currentColor}  title="cart"  customFunc={()=> handleClick('cart')} icon={<FiShoppingCart />} />
    <NavButton color={currentColor} title="Notification" customFunc={()=> handleClick('notification')} icon={<RiNotification3Line />} />
    <NavButton  color={currentColor} title="chat" dotColor='#03c9df'  customFunc={()=> handleClick('chat') } icon={<BsChatLeft />} />
     
      <TooltipComponent onClick={()=> handleClick('userProfile')} content="Profile" position="BottomCenter">
        <div
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
         
        >
          <img
            className="rounded-full w-8 h-8"
            src={avatar}
            alt="user-profile"
          />
          <p>
            <span className="text-gray-400 text-14">Hi,</span>{' '}
            <span className="text-gray-400 font-bold ml-1 text-14">
              Michael
            </span>
          </p>
          <MdKeyboardArrowDown style={{color:currentColor}} className={` text-14 `} />
        </div>
      </TooltipComponent>

     <div>{ clicked.userProfile &&  <UserProfile/>}</div>
     <div>{ clicked.notification &&  <Notification/>}</div>
     <div>{ clicked.chat &&  <Chat/>}</div>
     <div>{ clicked.cart &&  <Cart/>}</div>
      
    </div>
  </div>
  )
}

export default Navbar