import { createContext, useContext, useState } from "react";

const StateContext = createContext()

const initialState={
    chat:false,
    cart:false,
    userProfile:false,
    notification:false
}


const ContextProvider = ({children}) => {
    
    const [activeMenu,setActiveMenu] = useState(true)
    const [clicked,setClicked] = useState(initialState)
    const [screenSize,setScreenSize] = useState(null)
    const handleClick=(clicked)=>{
        setClicked({...initialState , [clicked]:true })
    }

    return ( 
        <StateContext.Provider value={{activeMenu,setActiveMenu,clicked,setClicked,handleClick,screenSize,setScreenSize}}>
            {children}
        </StateContext.Provider>
     );
}

export default ContextProvider
 
export  const useActiveMenu =()=> useContext(StateContext)