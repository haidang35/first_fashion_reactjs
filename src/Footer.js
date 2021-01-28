import React from 'react';
import './CSS/Footer.css';
import {Link} from "react-router-dom";

export default function Footer(){
    return(
        <footer className="footer-box">
            <div className="container">
                <div className="footer-box-top">
                    <div className="footer-box-top-1">
                        <Link to="/">
                            <img className="logo-footer" src="Image/Home/logo-footer.png" />
                        </Link>
                        <p>The customer is at the heart of our unique business model, which includes design.</p>
                        <img className="payment-logo" src="Image/Home/footer/payment.png" />
                    </div>
                    <div className="footer-box-top-2">
                        <h2>shopping</h2>
                        <ul>
                            <li><a href="#">Clothing Store</a></li>
                            <li><a href="#">Trending Shoes</a></li>
                            <li><a href="#">Accessories</a></li>
                            <li><a href="#">Sale</a></li>
                        </ul>
                    </div>
                    <div className="footer-box-top-3">
                        <h2>shopping</h2>
                        <ul>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Payment Methods</a></li>
                            <li><a href="#">Delivery</a></li>
                            <li><a href="#">Return &amp; Exchanges</a></li>
                        </ul>
                    </div>
                    <div className="new-letter">
                        <h2>NEW LETTER</h2>
                        <p>Be the first to know about new arrivals, look books, sales &amp; promos!</p>
                        <input className="register-get-email form-control" type="email" id="email" placeholder="Your Email" />
                        <i className="far fa-envelope email-icon" />
                        <a className="send-button" href="#">Send</a>
                    </div>
                </div>
                <div className="footer-box-under">
                    <span>Copyright © 2021-2020 All rights reserved | This template is made with <i className="fas fa-heart" style={{color: 'red'}} /> by <span style={{color: 'red'}}>Dang Jinner</span> | FPT Aptech</span>
                </div>
            </div>
        </footer>

    )
}