import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


export default function header() {
  
  return (
      <>
          <header id="home">
            <div class="container">
              <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container "> 
                <NavLink class="navbar-brand " data-scroll to="/">
                  <img src="/images/LogiqueCode.png" alt="" class="img-responsive" width="17%"/>
                </NavLink>  
                </div>
                <div class="text-right">
                  <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <div class="interactive-menu-button navbar-collapse">
                    {/* <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} /> */}
                      <a href="#">
                        <span>Menu</span>
                      </a>
                    </div>
                  </button>
                </div>
               
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
               
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                       {/* <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} /> */}
                      <NavLink className="nav-link" to="/">Home.<span class="sr-only">(current)</span></NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink className="nav-link" to="/about">About.</NavLink>
                    </li>
  
                    <li class="nav-item">
                      <NavLink className="nav-link" to="/Service">Services.</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact.</NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </header>      
    </>
  )
}




