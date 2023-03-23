import React from "react";
import {createRoot} from 'react-dom/client'
import { Counter } from "./components/counter";



const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <div>Hello React</div>
    <Counter/>
  </React.StrictMode>
)