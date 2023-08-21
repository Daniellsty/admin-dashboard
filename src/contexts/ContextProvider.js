import { createContext, useContext, useState } from "react";

const StateContext = createContext()
const ContextProvider = ({children}) => {
    const [activeMenu,setActiveMenu] = useState(true)
    return ( 
        <StateContext.Provider value={{activeMenu,setActiveMenu}}>
            {children}
        </StateContext.Provider>
     );
}

export default ContextProvider
 
export  const useActiveMenu =()=> useContext(StateContext)