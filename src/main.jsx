// import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router'
// import { createRoot } from 'react-dom/client' 

import './index.css'
import App from './App.jsx'

// createRoot(document.getElementById('dygtdtudty')).render(
//   <StrictMode>
//     <App/>
//   </StrictMode>,
// )


// import { createElement } from "react";
// import { createRoot } from "react-dom/client";

// const root = createRoot(document.getElementById("dygtdtudty"))

// root.render(
//   createElement("h1",null,"Hello, React!")
// )


// 练习一 

// const p = document.getElementById("dygtdtudy")
// const h1 = document.createElement('span')
// h1.textContent="Hellow, this is imperative coding!"
// h1.className="hdear"

// p.appendChild(h1)

import {createRoot} from "react-dom/client"
 

const root = createRoot(document.getElementById('sgthbsrhetdhje')) 
 
 
 

root.render(
    <BrowserRouter>
            <App/>
    </BrowserRouter>
)

console.log(root) 
