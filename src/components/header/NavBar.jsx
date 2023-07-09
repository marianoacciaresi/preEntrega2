import React from "react";
import '../assets/styles.css';
import CartWidget from "./CartWidget";


const NavBar = ({ logo, menuItem }) => {
    return (

        <header className="header">
                                    
            <nav class="navbar navbar-dark bg-dark">

                <div class="container-fluid navBar50">
                    
                    <div > 
                    <a class="navbar-brand noFlex" href="#">                        
                        <img src="logo_nav_bty.webp" alt={logo} width="110" height="40" id="navLogo" class="d-inline-block"/>  
                    </a>
                    <a class="navbar-brand noFlex" href=""> TT23 - Tu paleta a medida</a>
                    </div>

                </div>

                <div class="align-top paddingRight">

                    <input type="checkbox" className="side-menu" id="side-menu" />
                    
                    <label className="hamb" htmlFor ="side-menu">
                        <span className="hamb-line"></span>
                    </label>

                    <nav className="nav">
                        <ul className="menu">
                            <li><a href="#">Quiénes Somos</a></li>
                            <li><a href="#">Productos</a></li>
                            <li><a href="#">Categorías</a></li>
                            <li><a href="#">Contactos</a></li>
                        </ul>
                    </nav> 

                    <CartWidget />

                </div>

            </nav>

        </header>

)
}

export default NavBar;