import React from 'react'
import {links} from '../data/dummy'
import { SiShopware } from "react-icons/si";
import { NavLink } from 'react-router-dom';
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useActiveMenu } from '../contexts/ContextProvider';

const Sidebar = () => {

  const {activeMenu,setActiveMenu,screenSize,currentColor} = useActiveMenu()

  const handleCloseSideBar =()=>{
    if(activeMenu === true && screenSize <= 900 ){
      setActiveMenu(false)
    }
  }

  const activeLink = `flex items-center my-1 p-4  rounded-[3px] text-white`
  const normalLink = 'flex items-center my-1  p-4 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray '
   return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <NavLink to="/"  className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
              <SiShopware /> <span>Shoppy</span>
            </NavLink>
            <TooltipComponent content="close" position="BottomCenter">
              <button
                type="button"
                onClick={handleCloseSideBar}
              
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel color={currentColor} />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10 ">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    {link.icon}
                    <span className="capitalize mx-2 ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Sidebar