import React from 'react';
import './CSS/About-us.css';
import {Link} from "react-router-dom";

export default function About_us(){
    return(
        <section className="section-main-about-box">
            <div className="title-about-us">
                <div className="container">
                    <h3>About us</h3>
                    <Link to="/" style={{textDecoration:'none'}}> <span>Home</span></Link>
                    <i className="fas fa-chevron-right" />
                    <Link to="/About-us" style={{textDecoration:'none'}}> <span>About us</span></Link>

                </div>
            </div>
            <div className="content-box-1">
                <div className="container">
                    <div className="img-1">
                        <img src="Image/About/about1.jpg" />
                        <div className="who">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="content-1">
                                        <h3><b>Who We Are ?</b></h3>
                                        <p>We are a famous fashion company in Vietnam. Our team consists of talented fashion designers with outstanding products</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="content-1">
                                        <h3><b>Who We Do ?</b></h3>
                                        <p>We always create and manufacture modern, environmentally friendly fashion products at prices suitable to consumers. </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="content-1">
                                        <h3><b>Why Choose We ?</b></h3>
                                        <p>We always try to create the best fashion products at the best prices. Convenient payment method, customers can order online 24/24 </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="part2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 content-part2-box">
                            <div className="part2-left">
                                <i id="color-p2" className="fas fa-quote-right" />
                                <p><i>" Our greatest happiness is to bring the best products to consumers. The current fashion trend of the world is eco-friendly products. Understanding that we have created differentiated and quality products.  "</i></p>
                                <div className="going">
                                    <img src="Image/About/avatar-ceo-quote.png" className="img-left" />
                                    <div className="text-left">
                                        <h4 className="augusta"><b>Dang Jinner</b></h4>
                                        <h3 className="fashion"><i>CEO First Fashion</i></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 content-part2-box">
                            <div className="part2-right">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="part3">
                    <div className="number">
                        <div className="row">
                            <div className="col-md-3">
                                <h1 className="zoom"><b>102</b></h1>
                                <h4 id="our1"><b>Our Clients</b></h4>
                            </div>
                            <div className="col-md-3">
                                <h1 className="zoom"><b>30</b></h1>
                                <h4 id="our2"><b>Total Categories</b></h4>
                            </div>
                            <div className="col-md-3">
                                <h1 className="zoom"><b>102</b></h1>
                                <h4 id="our3"><b>In Country</b></h4>
                            </div>
                            <div className="col-md-3">
                                <h1 className="zoom"><b>98%</b></h1>
                                <h4 id="our4"><b>Happy Customer</b></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="part4">
                    <div className="designer">
                        <h5 id="cl1" className="adjust1">OUR TEAM</h5>
                        <h2 className="adjust3"><b>Meet Our Team</b></h2>
                        <div className="row">
                            <div className="col-md-3">
                                <img src="Image/About/linhnguyen.png" height={360} width={270} />
                                <h3><b>Linh Nguyen</b></h3>
                                <p className="grey">Fashion Design</p>
                            </div>
                            <div className="col-md-3">
                                <img src="Image/About/CEO-Jinner.png" height={360} width={270} />
                                <h3><b>Dang Jinner</b></h3>
                                <p className="grey">C.E.O</p>
                            </div>
                            <div className="col-md-3">
                                <img src="Image/About/truongnguyen.png" height={360} width={270} />
                                <h3><b>Truong Nguyen</b></h3>
                                <p className="grey">Manager</p>
                            </div>
                            <div className="col-md-3">
                                <img src="Image/About/ducquan.png" height={360} width={270} />
                                <h3><b>Duc Quan</b></h3>
                                <p className="grey">Delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="part5">
                    <div className="happy">
                        <h4 id="cl2">PARTNER</h4>
                        <h2 className="adjust2"><b>Happy Clients</b></h2>
                        <div className="row">
                            <div className="line1">
                                <div className="col-md-3">
                                    <img src="Image/About/client-1.png" height={76} width={69} />
                                </div>
                                <div className="col-md-3">
                                    <img src="Image/About/client-2.png" height={75} width={65} />
                                </div>
                                <div className="col-md-3">
                                    <img src="Image/About/client-3.png" height={77} width={69} />
                                </div>
                                <div className="col-md-3">
                                    <img src="Image/About/client-4.png" height={60} width={74} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="line2">
                                <div className="col-md-3">
                                    <img src="Image/About/client-5.png" height={84} width={57} />
                                </div>
                                <div className="col-md-3">
                                    <img src="Image/About/client-1.png" height={76} width={69} />
                                </div>
                                <div className="col-md-3">
                                    <img src="Image/About/client-7.png" height={84} width={64} />
                                </div>
                                <div className="col-md-3">
                                    <img src="Image/About/client-8.png" height={75} width={65} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    )
}