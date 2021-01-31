import React from 'react';
import './CSS/Check-out.css';
import {Link} from "react-router-dom";
export default function Check_out(){
    return(
        <section className="main-section">
            <div className="title-shopping-cart">
                <div className="container">
                    <h3>Check out</h3>
                    <Link to="/" style={{textDecoration:'none'}}>  <span>Home</span></Link>
                    <i className="fas fa-chevron-right" />
                    <Link to="/Shop" style={{textDecoration:'none'}}> <span>Shop</span></Link>
                    <i className="fas fa-chevron-right" />
                    <Link to="/Check-out" style={{textDecoration:'none'}}><span>Check out</span></Link>

                </div>
            </div>
            <div className="check-out-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="coupon-box">
                                <i className="fas fa-tag" />
                                <a href="#">Have a coupon?  Click here to enter your code</a>
                            </div>
                            <div className="billing-details">
                                <h3>Billing Details</h3>
                                <div className="input-billing-box">
                                    <div className="first-name-box">
                                        <label>First Name<span style={{color: 'red'}}>*</span></label><br />
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="last-name-box">
                                        <label>Last Name<span style={{color: 'red'}}>*</span></label><br />
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="country-box">
                                        <label>Country<span style={{color: 'red'}}>*</span></label><br />
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="address-box">
                                        <label>Shipping Address<span style={{color: 'red'}}>*</span></label><br />
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="town-box">
                                        <label>Town/City<span style={{color: 'red'}}>*</span></label><br />
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="State-box">
                                        <label>State<span style={{color: 'red'}}>*</span></label><br />
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="postcode-box">
                                        <label>Postcode/ZIP<span style={{color: 'red'}}>*</span></label><br />
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="Phone-box">
                                        <label>Phone<span style={{color: 'red'}}>*</span></label><br />
                                        <input type="tel" className="form-control" />
                                    </div>
                                    <div className="email-box">
                                        <label>Email<span style={{color: 'red'}}>*</span></label><br />
                                        <input type="email" className="form-control" />
                                    </div>
                                    <div className="order-note-box">
                                        <label>Order Note<span style={{color: 'red'}}>*</span></label><br />
                                        <textarea name="note" className="form-control" defaultValue={""} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="your-order-box">
                                <h3>Your Order</h3>
                                <div className="list-order">
                                    <div className="title-list">
                                        <span className="product-title">Products</span>
                                        <span className="total-title">Total</span>
                                    </div>
                                    <div className="product-price">
                                        <p className="item-box">
                                            <span className="name-prod">01. Vanilla salted caramel</span>
                                            <span className="price-prod">$ 300.0</span>
                                        </p>
                                        <p className="item-box">
                                            <span className="name-prod">02. German chocolate</span>
                                            <span className="price-prod">$ 170.0</span>
                                        </p>
                                        <p className="item-box">
                                            <span className="name-prod">03. Sweet autumn</span>
                                            <span className="price-prod">$ 170.0</span>
                                        </p>
                                        <p className="item-box">
                                            <span className="name-prod">04. Cluten free mini dozen</span>
                                            <span className="price-prod">$ 110.0</span>
                                        </p>
                                    </div>
                                    <div className="subtotal-box">
                                        <div className="subtotal-price">
                                            <span className="subtotal-title">Subtotal</span>
                                            <span className="total-price">$750.99</span>
                                        </div>
                                        <div className="subtotal-price">
                                            <span className="subtotal-title">Total</span>
                                            <span className="total-price">$750.99</span>
                                        </div>
                                    </div>
                                    <div className="note-checkout-box">
                                        <input type="checkbox" />
                                        <span>Create an account?</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <input type="checkbox" />
                                        <span>Check Payment</span><br />
                                        <input type="checkbox" />
                                        <span>Paypal</span>
                                    </div>
                                    <div className="place-order">
                                        <a href="#">Place Order</a>
                                    </div>
                                    <div className="payment-checkout">
                                        <img src="Image/Payment.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
