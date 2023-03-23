import React from "react";
import './Counter.scss'

export const Counter = () => {

  const [count, setCount] = React.useState(0)

  const increment =() => {
    setCount(p=>p+1)
  }

  return ( 
    <button onClick={()=>{increment()}}>Count {count}</button>
   );
}
 
