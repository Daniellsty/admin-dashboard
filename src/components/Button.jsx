import React from "react";
import { useActiveMenu } from "../contexts/ContextProvider";

const Button = ({bgColor, color, size, text, borderRadius}) => {
  const { cancelhandleClick } = useActiveMenu();

  return <div>
    <button onClick={()=> cancelhandleClick()} style={{backgroundColor:bgColor,color,borderRadius}} 
    className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  </div>;
};

export default Button;
