import React from "react";
import classes from './Counter.module.scss'

export const Counter = () => {

  const [count, setCount] = React.useState(0)

  const increment =() => {
    setCount(p=>p+1)
  }

  return ( 
    <button className={classes.btn} onClick={()=>{increment()}}>Count {count}</button>
   );
}
 
