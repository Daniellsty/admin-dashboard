import { createContext, useContext, useState } from "react";

const StateContext = createContext()

const initialState={
    chat:false,
    cart:false,
    userProfile:false,
    notification:false
}


const ContextProvider = ({children}) => {
    
    const [themeSetting,setThemeSetting] = useState(false)
    const [activeMenu,setActiveMenu] = useState(true)
    const [clicked,setClicked] = useState(initialState)
    const [screenSize,setScreenSize] = useState(null)
    const [currentColor,setCurrentColor] = useState('#03C9D7')
    const [currentMode,setCurrentMode] = useState('Light')

    const setMode=(e)=>{
        setCurrentMode(e.target.value)
        localStorage.setItem('currentMode',e.target.value)
        setThemeSetting(false)
    }

    const setColor=(e)=>{
        setCurrentColor(e)
        localStorage.setItem('currentColor',e)

        setThemeSetting(false)

    }
    
    const handleClick=(clicked)=>{
        setClicked({...initialState , [clicked]:true })
    }

       
    const cancelhandleClick=(clicked)=>{
        setClicked({...initialState , [clicked]:false })
    }
    return ( 
        <StateContext.Provider value={{activeMenu,setActiveMenu,clicked,setClicked,handleClick,screenSize,setScreenSize,currentColor,currentMode,setCurrentColor,setCurrentMode,setColor,setMode,setThemeSetting,themeSetting,cancelhandleClick}}>
            {children}
        </StateContext.Provider>
     );
}

export default ContextProvider
 
export  const useActiveMenu =()=> useContext(StateContext)