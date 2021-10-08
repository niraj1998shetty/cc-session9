
import { useState,useEffect } from "react";
import "./counter.css"
const Counter=()=>{
    const [num,setnum]=useState(parseInt(localStorage.getItem("number"))||0);

    useEffect(() => {
     localStorage.setItem("number",num
    )}, [num])
    
    const incNum=()=>{
      setnum(num+1);
    }
    const decNum=()=>{
      setnum(num-1);
    }
    return (
<div className="main">
<button className="button_" onClick={decNum}>-</button>
    <h1 className="counter">{num}</h1>
    <button className="button_" onClick={incNum}>+</button>
</div>

    );
}
export default Counter;