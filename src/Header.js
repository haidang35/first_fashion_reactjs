import React from "react";
import './CSS/Header.css';
import {Link} from "react-router-dom";

export  default function Header(){
    return  (
        <header className="header-box">
            <div className="top-header-bar">
                <div className="container">
                    <span className="ship-describe">Free shipping, 30-day return or refund guarantee.</span>
                    <div className="sign-in-box">
                        <span>Sign in</span>
                        <span>Faqs</span>
                        <span>Usd </span>
                        <i className="fas fa-chevron-down"/>
                    </div>
                </div>
            </div>
            <div className="under-header-bar">
                <div className="container">
                    <div className="main-logo">
                        <Link to="/">
                            <img src="Image/Home/logo.png"/>
                        </Link>
                    </div>
                    <nav className="nav-bar">
                        <ul className="list-menu">
                            <li><Link to="/" className="home-menu">Home</Link>
                                <div className="border-bottom-nav-home"/>
                            </li>
                            <li><Link to="/Shop" className="shop-menu">Shop</Link>
                                <div className="border-bottom-nav-shop"/>
                            </li>
                            <li><Link to="/About-us" className="about-us-menu">About us</Link>
                                <div className="border-bottom-nav-about"/>
                            </li>
                            <li ><Link to="/Blog" className="Blog-menu">Blog</Link>
                                <div className="border-bottom-nav-blog"/>
                            </li>
                            <li ><Link to="/Contact" className="Contact-menu">Contact</Link>
                                <div className="border-bottom-nav-contact"/>
                            </li>
                        </ul>
                    </nav>
                    <div className="icon-option">
                        <Link to="/"> <a><i className="fas fa-search"/></a></Link>
                        <a href="#"><i className="far fa-heart"/></a>
                        <Link to="/Shopping-cart"><i className="fas fa-cart-plus" style={{marginRight: 5}}/></Link>
                        <Link to="/Check-out"><a> <span>$0.00</span></a></Link>
                    </div>
                </div>
            </div>
        </header>

    )
}

