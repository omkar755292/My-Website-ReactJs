import React from 'react'
import {Link} from "react-router-dom";

export default function navbar() {
  return (
    <div>
      <nav class="navbar">
          <div class="logo"><img src="logo.svg" alt="logo"/></div>
          <ul class="navlist vclass hclass">
               <li><Link to="/home">Home</Link></li>
               <li><Link to="/about">About Me</Link></li>
               <li><Link to="/project">Project</Link></li>
               <li><Link to="/blog">Blog</Link></li>
               <li><Link to="/contact">Contact Me</Link></li>
          </ul>
          <div class="burger">
               <p></p>
               <p></p>
               <p></p>
          </div>
          <div><button class="button vclass">Say Hello</button></div>
     </nav>
    </div>
  )
}
