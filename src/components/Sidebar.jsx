import React from 'react'
import {links} from '../data/dummy'
import { SiShopware } from "react-icons/si";
import { NavLink } from 'react-router-dom';
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useActiveMenu } from '../contexts/ContextProvider';

const Sidebar = () => {

  const {activeMenu,setActiveMenu} = useActiveMenu()


  const activeLink = 'flex items-center  px-7'
  const normalLink = 'flex items-center  px-7 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray '
   return (
    <div className='h-screen overflow-scroll  md:overflow-hidden md:hover:overflow-auto '>
     
    {activeMenu && 
     <div  >
     <div className='flex items-center justify-between p-4 font-bold'  >
      <div className='flex items-center mt-5'>
       <SiShopware/>
       <span className='mx-2 text-2xl'>shopy</span>

      </div>
      <div className='flex mt-2 hover:cursor-pointer'>
        <TooltipComponent  content='close' position='TOp' >
        <MdOutlineCancel onClick={()=> setActiveMenu(false) } size={22} className=' mt-3 ' />

        </TooltipComponent>
      </div>
     </div>
     {links.map((item)=>(
        <div  key={item.title} >
          <p className='m-3 mx-5 mt-4 uppercase text-gray-400 '>{item.title}</p>

          {item.links.map((link)=>(

            <div>
              <NavLink 
              to={`/${link.name}`} 
              key={link.name} 
              className={activeMenu ? normalLink : activeLink }
              >
                {link.icon}
                <span className='capitalize my-3  mx-2'>{link.name}</span>
              </NavLink>
            </div>
          ))}
        </div>

     ))}
      </div>
    
    }
    </div>
  )
}

export default Sidebar