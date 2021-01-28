import React from 'react';
import './CSS/Blog.css'
import {Link} from 'react-router-dom';
export default function Blog(){
    return(
        <section className="section-main-blog-1">
            <div className="part1">
                <div className="container">
                    <h1 className="adjust">Our Blog</h1>
                </div>
            </div>
            <div className="part-2-box">
                <div className="container">
                    <div className="list-blog-box">
                        <div className="row">
                            <div className="line1">
                                <div className="col-md-4">
                                    <img src="Image/Blog/blog2.jpg" height={270} width={360} />
                                    <div className="text">
                                        <i className="far fa-calendar-alt" /><span> 16 February 2020</span>
                                        <h4>World famous fashion brands </h4>
                                        <Link to="/Blog-detail">
                                            <a>READ MORE</a>
                                            <div className="hover-read-more" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <img src="Image/Blog/blog3.jpg" height={270} width={360} />
                                    <div className="text">
                                        <i className="far fa-calendar-alt" /><span> 21 February 2020</span>
                                        <h4>Summer 2020 collections with new trends </h4>
                                        <Link to="/Blog-detail">
                                            <a>READ MORE</a>
                                            <div className="hover-read-more" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <img src="Image/Blog/blog4.jpg" height={270} width={360} />
                                    <div className="text">
                                        <i className="far fa-calendar-alt" /><span> 28 February 2020</span>
                                        <h4>Sustainability, comfort key for fashion brands</h4>
                                        <Link to="/Blog-detail">
                                            <a>READ MORE</a>
                                            <div className="hover-read-more" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="line2">
                                <div className="col-md-4">
                                    <img src="Image/Blog/blog5.jpg" height={270} width={360} />
                                    <div className="text">
                                        <i className="far fa-calendar-alt" /><span> 16 February 2020</span>
                                        <h4>Special autumn and winter sweatshirts models</h4>
                                        <Link to="/Blog-detail">
                                            <a>READ MORE</a>
                                            <div className="hover-read-more" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <img src="Image/Blog/blog6.jpg" height={270} width={360} />
                                    <div className="text">
                                        <i className="far fa-calendar-alt" /><span> 21 February 2020</span>
                                        <h4>Environmentally friendly fashion trend </h4>
                                        <Link to="/Blog-detail" target="_top">
                                            <a>READ MORE</a>
                                            <div className="hover-read-more" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <img src="Image/Blog/blog7.jpg" height={270} width={360} />
                                    <div className="text">
                                        <i className="far fa-calendar-alt" /><span> 28 February 2020</span>
                                        <h4>Street-style fashion collection </h4>
                                        <Link to="/Blog-detail" >
                                            <a>READ MORE</a>
                                            <div className="hover-read-more" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="line3">
                                <div className="col-md-4">
                                    <img src="Image/Blog/blog8.jpg" height={270} width={360} />
                                    <div className="text">
                                        <i className="far fa-calendar-alt" /><span> 16 February 2020</span>
                                        <h4>Combining modern hairstyles with special fashion trends </h4>
                                        <Link to="/Blog-detail" >
                                            <a>READ MORE</a>
                                            <div className="hover-read-more" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <img src="Image/Blog/blog9.jpg" height={270} width={360} />
                                    <div className="text">
                                        <i className="far fa-calendar-alt" /><span> 21 February 2020</span>
                                        <h4>Autumn-winter sweatshirts models are classic colors </h4>
                                        <Link to="/Blog-detail" >
                                            <a>READ MORE</a>
                                            <div className="hover-read-more" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <img src="Image/Blog/blog-10.jpg" height={270} width={360} />
                                    <div className="text">
                                        <i className="far fa-calendar-alt" /><span> 28 February 2020</span>
                                        <h4>Explore the fashion showroom spaces at First Fashion </h4>
                                        <Link to="/Blog-detail" >
                                            <a>READ MORE</a>
                                            <div className="hover-read-more" />
                                        </Link>
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