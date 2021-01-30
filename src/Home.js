import React from 'react';
import './CSS/Home.css';
import {Link} from 'react-router-dom';
export default function Home(){
    function change_content(){
        document.getElementById("change-content-box-1").style.display='block';
        document.getElementById("change-content-box-2").style.display='none';
    }
    function change_content_repeat(){
        document.getElementById("change-content-box-1").style.display='none';
        document.getElementById("change-content-box-2").style.display='block';
    }
    function Open_Best_Sellers(){
        document.getElementById("Best-sellers").style.display='block';
        document.getElementById("New-arrivals").style.display='none';
        document.getElementById("Hot-sales").style.display='none';
        document.getElementById("title-best-sellers").style.color='#0e0e0e';
        document.getElementById("title-new-arrivals").style.color='#818080';
        document.getElementById("title-hot-sales").style.color='#818080';
    }
    function Open_New_arrivals(){
        document.getElementById("New-arrivals").style.display='block';
        document.getElementById("Best-sellers").style.display='none';
        document.getElementById("Hot-sales").style.display='none';
        document.getElementById("title-new-arrivals").style.color='#0e0e0e';
        document.getElementById("title-hot-sales").style.color='#818080';
        document.getElementById("title-best-sellers").style.color='#818080';
    }
    function Open_Hot_sales(){
        document.getElementById("Hot-sales").style.display='block';
        document.getElementById("New-arrivals").style.display='none';
        document.getElementById("Best-sellers").style.display='none';
        document.getElementById("title-hot-sales").style.color='#0e0e0e';
        document.getElementById("title-new-arrivals").style.color='#818080';
        document.getElementById("title-new-arrivals").style.color='#818080';
    }

    return(
        <section className="main-home-box">
            <div className="content-box-1">
                <div className="change-content-box" id="change-content-box-1">
                    <div className="container">
                        <div className="collection-box">
                            <h4>Winter Collection</h4>
                            <h1>Fall - Winter<br/>Collections 2030</h1>
                            <p> A specialist label creating luxury essentials. Ethically crafted with an unwavering
                                commitment to exceptional quality </p>
                            <Link to="/Shop" className="shop-now-button" >
                                <span>Shop now</span>
                                <i className="fas fa-long-arrow-alt-right arrow-button"/>
                            </Link>
                        </div>
                        <div className="icon-social-box">
                            <a href="#"><i className="fab fa-facebook-f"/></a>
                            <a href="#"><i className="fab fa-twitter"/></a>
                            <a href="#"><i className="fab fa-pinterest"/></a>
                            <a href="#"><i className="fab fa-instagram"/></a>
                        </div>
                    </div>
                    <a className="change-button-left" onClick={change_content_repeat}>
                        <i className="fas fa-long-arrow-alt-left"/>
                    </a>
                    <a className="change-button-right" onClick={change_content_repeat}>
                        <i className="fas fa-long-arrow-alt-right"/>
                    </a>
                </div>
                <div className="change-content-box-1" id="change-content-box-2">
                    <div className="container">
                        <div className="change-collection-box">
                            <h4>Winter Collection</h4>
                            <h1>Fall - Winter<br/>Collections 2030</h1>
                            <p> A specialist label creating luxury essentials. Ethically crafted with an unwavering
                                commitment to exceptional quality </p>
                            <Link to="/Shop" className="shop-now-button">
                                <span>Shop now</span>
                                <i className="fas fa-long-arrow-alt-right arrow-button"/>
                            </Link>
                            <div className="icon-social-box-1">
                                <a href="#"><i className="fab fa-facebook-f"/></a>
                                <a href="#"><i className="fab fa-twitter"/></a>
                                <a href="#"><i className="fab fa-pinterest"/></a>
                                <a href="#"><i className="fab fa-instagram"/></a>
                            </div>
                        </div>
                    </div>
                    <a className="change-button-left" onClick={change_content}>
                        <i className="fas fa-long-arrow-alt-left"/>
                    </a>
                    <a className="change-button-right" onClick={change_content}>
                        <i className="fas fa-long-arrow-alt-right"/>
                    </a>
                </div>
            </div>
            <div className="content-box-2" >
                <div className="container">
                    <img className="img-banner-1" src="Image/Home/banner-1.jpg" height={440} width={440}/>
                    <div className="describe-banner-1">
                        <h1>Clothing <br/> Collections 2030</h1>
                        <div className="shop-now-box">
                            <Link to="/Shop" style={{textDecoration:'none'}} ><a>Shop now</a>
                                <div className="border-banner"/>
                            </Link>
                        </div>
                    </div>
                    <img className="img-banner-2" src="Image/Home/banner-2.jpg" height={470} width={470}/>
                    <div className="describe-banner-2">
                        <h1>Accessories</h1>
                        <div className="shop-now-box">
                            <Link to="/Shop" style={{textDecoration:'none'}} ><a>Shop now</a>
                                <div className="border-banner"/>
                            </Link>
                        </div>
                    </div>
                    <img className="img-banner-3" src="Image/Home/banner-3.jpg" height={440} width={480}/>
                    <div className="describe-banner-3">
                        <h1>Shoes Spring <br/>2030</h1>
                        <div className="shop-now-box">
                            <Link to="/Shop" style={{textDecoration:'none'}} ><a>Shop now</a>
                                <div className="border-banner"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-box">
                <div className="container">
                    <ul className="list-name-box">
                        <li><a onClick={Open_Best_Sellers} id="title-best-sellers">Best Sellers</a></li>
                        <li><a onClick={Open_New_arrivals} id="title-new-arrivals" style={{color: '#00000073'}}>New Arrivals</a></li>
                        <li><a onClick={Open_Hot_sales} id="title-hot-sales" style={{color: '#00000073'}}> Hot Sales</a></li>
                    </ul>
                    <div className="products-list">
                        <div className="row">
                            <div id="Best-sellers">
                                <div className="col-md-3">
                                    <div className="product-item-shop">
                                        <Link to="/Shop-details" ><img src="Image/Shop/product-7.jpg" /></Link>
                                        <div className="icon-add">
                                            <a href="#"><i className="far fa-heart" /></a>
                                            <Link to="Compare-product">
                                                <div className="compare-icon">
                                                    <i className="fas fa-exchange-alt" />
                                                    <div className="add-inf-box">
                                                        <span className="add-inf">Compare Product</span>
                                                        <i className="fas fa-caret-right arrow-add-inf" />
                                                    </div>
                                                </div>

                                            </Link>

                                            <a href="#"><i className="fas fa-search" /></a>
                                        </div>
                                        <h2 className="name-product">Floral Motif Black T-Shirt</h2>
                                        <div className="star-rate">
                                            <div className="star-rate-off" />
                                            <div className="star-rate-on" style={{width: '90%'}} />
                                        </div>
                                        <p className="cost-product">$23.00</p>
                                        <Link to="/Shopping-cart"><a className="add-to-cart-button">+ Add to cart</a></Link>
                                        <div className="choose-color-product">
                                            <label>Choose Color</label><br />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#8f723b'}} />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#000000'}} />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#4c6e8d'}} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-item-shop">
                                        <Link to="/Shop-details" ><img src="Image/Shop/product-1.jpg" /></Link>
                                        <div className="icon-add">
                                            <a href="#"><i className="far fa-heart" /></a>
                                            <Link to="Compare-product">
                                                <div className="compare-icon">
                                                    <i className="fas fa-exchange-alt" />
                                                    <div className="add-inf-box">
                                                        <span className="add-inf">Compare Product</span>
                                                        <i className="fas fa-caret-right arrow-add-inf" />
                                                    </div>
                                                </div>

                                            </Link>

                                            <a href="#"><i className="fas fa-search" /></a>
                                        </div>
                                        <h2 className="name-product">Pique Biker Jacket</h2>
                                        <div className="star-rate">
                                            <div className="star-rate-off" />
                                            <div className="star-rate-on" style={{width: '90%'}} />
                                        </div>
                                        <p className="cost-product">$67.24</p>
                                        <Link to="/Shopping-cart"><a className="add-to-cart-button">+ Add to cart</a></Link>
                                        <div className="choose-color-product">
                                            <label>Choose Color</label><br />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#8f723b'}} />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#000000'}} />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#4c6e8d'}} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-item-shop">
                                        <Link to="/Shop-details" ><img src="Image/Shop/product-2.jpg" /></Link>
                                        <div className="icon-add">
                                            <a href="#"><i className="far fa-heart" /></a>
                                            <Link to="Compare-product">
                                                <div className="compare-icon">
                                                    <i className="fas fa-exchange-alt" />
                                                    <div className="add-inf-box">
                                                        <span className="add-inf">Compare Product</span>
                                                        <i className="fas fa-caret-right arrow-add-inf" />
                                                    </div>
                                                </div>

                                            </Link>

                                            <a href="#"><i className="fas fa-search" /></a>
                                        </div>
                                        <h2 className="name-product">Classic Sneaker</h2>
                                        <div className="star-rate">
                                            <div className="star-rate-off" />
                                            <div className="star-rate-on" style={{width: '90%'}} />
                                        </div>
                                        <p className="cost-product">$45.85</p>
                                        <Link to="/Shopping-cart"><a className="add-to-cart-button">+ Add to cart</a></Link>
                                        <div className="choose-color-product">
                                            <label>Choose Color</label><br />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#8f723b'}} />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#000000'}} />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#4c6e8d'}} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-item-shop">
                                        <Link to="/Shop-details" ><img src="Image/Shop/product-3.jpg" /></Link>
                                        <div className="icon-add">
                                            <a href="#"><i className="far fa-heart" /></a>
                                            <Link to="Compare-product">
                                                <div className="compare-icon">
                                                    <i className="fas fa-exchange-alt" />
                                                    <div className="add-inf-box">
                                                        <span className="add-inf">Compare Product</span>
                                                        <i className="fas fa-caret-right arrow-add-inf" />
                                                    </div>
                                                </div>

                                            </Link>

                                            <a href="#"><i className="fas fa-search" /></a>
                                        </div>
                                        <h2 className="name-product">Long-sleeved Jacket</h2>
                                        <div className="star-rate">
                                            <div className="star-rate-off" />
                                            <div className="star-rate-on" style={{width: '90%'}} />
                                        </div>
                                        <p className="cost-product">$65.00</p>
                                        <Link to="/Shopping-cart"><a className="add-to-cart-button">+ Add to cart</a></Link>
                                        <div className="choose-color-product">
                                            <label>Choose Color</label><br />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#8f723b'}} />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#000000'}} />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#4c6e8d'}} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-item-shop">
                                        <Link to="/Shop-details" ><img src="Image/Shop/product-5.jpg" /></Link>
                                        <div className="icon-add">
                                            <a href="#"><i className="far fa-heart" /></a>
                                            <Link to="Compare-product">
                                                <div className="compare-icon">
                                                    <i className="fas fa-exchange-alt" />
                                                    <div className="add-inf-box">
                                                        <span className="add-inf">Compare Product</span>
                                                        <i className="fas fa-caret-right arrow-add-inf" />
                                                    </div>
                                                </div>

                                            </Link>

                                            <a href="#"><i className="fas fa-search" /></a>
                                        </div>
                                        <h2 className="name-product">Cow Leather Backpack</h2>
                                        <div className="star-rate">
                                            <div className="star-rate-off" />
                                            <div className="star-rate-on" style={{width: '90%'}} />
                                        </div>
                                        <p className="cost-product">$75.55</p>
                                        <Link to="/Shopping-cart"><a className="add-to-cart-button">+ Add to cart</a></Link>
                                        <div className="choose-color-product">
                                            <label>Choose Color</label><br />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#8f723b'}} />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#000000'}} />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#4c6e8d'}} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-item-shop">
                                        <Link to="/Shop-details" ><img src="Image/Shop/product-6.png" /></Link>
                                        <div className="icon-add">
                                            <a href="#"><i className="far fa-heart" /></a>
                                            <Link to="Compare-product">
                                                <div className="compare-icon">
                                                    <i className="fas fa-exchange-alt" />
                                                    <div className="add-inf-box">
                                                        <span className="add-inf">Compare Product</span>
                                                        <i className="fas fa-caret-right arrow-add-inf" />
                                                    </div>
                                                </div>

                                            </Link>

                                            <a href="#"><i className="fas fa-search" /></a>
                                        </div>
                                        <h2 className="name-product">Black Summer T-shirt</h2>
                                        <div className="star-rate">
                                            <div className="star-rate-off" />
                                            <div className="star-rate-on" style={{width: '90%'}} />
                                        </div>
                                        <p className="cost-product">$30.35</p>
                                        <Link to="/Shopping-cart"><a className="add-to-cart-button">+ Add to cart</a></Link>
                                        <div className="choose-color-product">
                                            <label>Choose Color</label><br />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#8f723b'}} />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#000000'}} />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#4c6e8d'}} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-item-shop">
                                        <Link to="/Shop-details" ><img src="Image/Shop/product-8.jpg" /></Link>
                                        <div className="icon-add">
                                            <a href="#"><i className="far fa-heart" /></a>
                                            <Link to="Compare-product">
                                                <div className="compare-icon">
                                                    <i className="fas fa-exchange-alt" />
                                                    <div className="add-inf-box">
                                                        <span className="add-inf">Compare Product</span>
                                                        <i className="fas fa-caret-right arrow-add-inf" />
                                                    </div>
                                                </div>

                                            </Link>

                                            <a href="#"><i className="fas fa-search" /></a>
                                        </div>
                                        <h2 className="name-product">Tri Of Vietnamese Perfumes</h2>
                                        <div className="star-rate">
                                            <div className="star-rate-off" />
                                            <div className="star-rate-on" style={{width: '90%'}} />
                                        </div>
                                        <p className="cost-product">$120.50</p>
                                        <Link to="/Shopping-cart"><a className="add-to-cart-button">+ Add to cart</a></Link>
                                        <div className="choose-color-product">
                                            <label>Choose Color</label><br />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#8f723b'}} />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#000000'}} />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#4c6e8d'}} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-item-shop">
                                        <Link to="/Shop-details" ><img src="Image/Shop/product-10.jpg" /></Link>
                                        <div className="icon-add">
                                            <a href="#"><i className="far fa-heart" /></a>
                                            <Link to="Compare-product">
                                                <div className="compare-icon">
                                                    <i className="fas fa-exchange-alt" />
                                                    <div className="add-inf-box">
                                                        <span className="add-inf">Compare Product</span>
                                                        <i className="fas fa-caret-right arrow-add-inf" />
                                                    </div>
                                                </div>

                                            </Link>

                                            <a href="#"><i className="fas fa-search" /></a>
                                        </div>
                                        <h2 className="name-product">New Generation Jacket</h2>
                                        <div className="star-rate">
                                            <div className="star-rate-off" />
                                            <div className="star-rate-on" style={{width: '90%'}} />
                                        </div>
                                        <p className="cost-product">$99.99</p>
                                        <Link to="/Shopping-cart"><a className="add-to-cart-button">+ Add to cart</a></Link>
                                        <div className="choose-color-product">
                                            <label>Choose Color</label><br />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#8f723b'}} />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#000000'}} />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#4c6e8d'}} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div id="New-arrivals">
                                <div className="col-md-3">
                                    <div className="product-item-shop">
                                        <Link to="/Shop-details" ><img src="Image/Shop/product-4.jpg" /></Link>
                                        <span className="status-prod-shop" >New</span>
                                        <div className="icon-add">
                                            <a href="#"><i className="far fa-heart" /></a>
                                            <Link to="Compare-product">
                                                <div className="compare-icon">
                                                    <i className="fas fa-exchange-alt" />
                                                    <div className="add-inf-box">
                                                        <span className="add-inf">Compare Product</span>
                                                        <i className="fas fa-caret-right arrow-add-inf" />
                                                    </div>
                                                </div>

                                            </Link>

                                            <a href="#"><i className="fas fa-search" /></a>
                                        </div>
                                        <h2 className="name-product">Grey Scarf SS</h2>
                                        <div className="star-rate">
                                            <div className="star-rate-off" />
                                            <div className="star-rate-on" style={{width: '90%'}} />
                                        </div>
                                        <p className="cost-product">$49.99</p>
                                        <Link to="/Shopping-cart"><a className="add-to-cart-button">+ Add to cart</a></Link>
                                        <div className="choose-color-product">
                                            <label>Choose Color</label><br />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#8f723b'}} />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#000000'}} />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#4c6e8d'}} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-item-shop">
                                        <Link to="/Shop-details" ><img src="Image/Shop/product-4.jpg" /></Link>
                                        <span className="status-prod-shop" >New</span>
                                        <div className="icon-add">
                                            <a href="#"><i className="far fa-heart" /></a>
                                            <Link to="Compare-product">
                                                <div className="compare-icon">
                                                    <i className="fas fa-exchange-alt" />
                                                    <div className="add-inf-box">
                                                        <span className="add-inf">Compare Product</span>
                                                        <i className="fas fa-caret-right arrow-add-inf" />
                                                    </div>
                                                </div>

                                            </Link>

                                            <a href="#"><i className="fas fa-search" /></a>
                                        </div>
                                        <h2 className="name-product">Grey Scarf SS</h2>
                                        <div className="star-rate">
                                            <div className="star-rate-off" />
                                            <div className="star-rate-on" style={{width: '90%'}} />
                                        </div>
                                        <p className="cost-product">$49.99</p>
                                        <Link to="/Shopping-cart"><a className="add-to-cart-button">+ Add to cart</a></Link>
                                        <div className="choose-color-product">
                                            <label>Choose Color</label><br />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#8f723b'}} />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#000000'}} />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#4c6e8d'}} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-item-shop">
                                        <Link to="/Shop-details" ><img src="Image/Shop/product-4.jpg" /></Link>
                                        <span className="status-prod-shop" >New</span>
                                        <div className="icon-add">
                                            <a href="#"><i className="far fa-heart" /></a>
                                            <Link to="Compare-product">
                                                <div className="compare-icon">
                                                    <i className="fas fa-exchange-alt" />
                                                    <div className="add-inf-box">
                                                        <span className="add-inf">Compare Product</span>
                                                        <i className="fas fa-caret-right arrow-add-inf" />
                                                    </div>
                                                </div>

                                            </Link>

                                            <a href="#"><i className="fas fa-search" /></a>
                                        </div>
                                        <h2 className="name-product">Grey Scarf SS</h2>
                                        <div className="star-rate">
                                            <div className="star-rate-off" />
                                            <div className="star-rate-on" style={{width: '90%'}} />
                                        </div>
                                        <p className="cost-product">$49.99</p>
                                        <Link to="/Shopping-cart"><a className="add-to-cart-button">+ Add to cart</a></Link>
                                        <div className="choose-color-product">
                                            <label>Choose Color</label><br />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#8f723b'}} />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#000000'}} />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#4c6e8d'}} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-item-shop">
                                        <Link to="/Shop-details" ><img src="Image/Shop/product-4.jpg" /></Link>
                                        <span className="status-prod-shop" >New</span>
                                        <div className="icon-add">
                                            <a href="#"><i className="far fa-heart" /></a>
                                            <Link to="Compare-product">
                                                <div className="compare-icon">
                                                    <i className="fas fa-exchange-alt" />
                                                    <div className="add-inf-box">
                                                        <span className="add-inf">Compare Product</span>
                                                        <i className="fas fa-caret-right arrow-add-inf" />
                                                    </div>
                                                </div>

                                            </Link>

                                            <a href="#"><i className="fas fa-search" /></a>
                                        </div>
                                        <h2 className="name-product">Grey Scarf SS</h2>
                                        <div className="star-rate">
                                            <div className="star-rate-off" />
                                            <div className="star-rate-on" style={{width: '90%'}} />
                                        </div>
                                        <p className="cost-product">$49.99</p>
                                        <Link to="/Shopping-cart"><a className="add-to-cart-button">+ Add to cart</a></Link>
                                        <div className="choose-color-product">
                                            <label>Choose Color</label><br />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#8f723b'}} />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#000000'}} />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#4c6e8d'}} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div id="Hot-sales">
                                <div className="col-md-3">
                                    <div className="product-item-shop">
                                        <Link to="/Shop-details" ><img src="Image/Shop/product-9.jpg" /></Link>
                                        <span className="status-prod-shop">Sale</span>
                                        <div className="icon-add">
                                            <a href="#"><i className="far fa-heart" /></a>
                                            <Link to="Compare-product">
                                                <div className="compare-icon">
                                                    <i className="fas fa-exchange-alt" />
                                                    <div className="add-inf-box">
                                                        <span className="add-inf">Compare Product</span>
                                                        <i className="fas fa-caret-right arrow-add-inf" />
                                                    </div>
                                                </div>

                                            </Link>

                                            <a href="#"><i className="fas fa-search" /></a>
                                        </div>
                                        <h2 className="name-product">White Leather Backpack</h2>
                                        <div className="star-rate">
                                            <div className="star-rate-off" />
                                            <div className="star-rate-on" style={{width: '90%'}} />
                                        </div>
                                        <p className="cost-product">$89.99</p>
                                        <Link to="/Shopping-cart"><a className="add-to-cart-button">+ Add to cart</a></Link>
                                        <div className="choose-color-product">
                                            <label>Choose Color</label><br />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#8f723b'}} />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#000000'}} />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#4c6e8d'}} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-item-shop">
                                        <Link to="/Shop-details" ><img src="Image/Shop/product-9.jpg" /></Link>
                                        <span className="status-prod-shop">Sale</span>
                                        <div className="icon-add">
                                            <a href="#"><i className="far fa-heart" /></a>
                                            <Link to="Compare-product">
                                                <div className="compare-icon">
                                                    <i className="fas fa-exchange-alt" />
                                                    <div className="add-inf-box">
                                                        <span className="add-inf">Compare Product</span>
                                                        <i className="fas fa-caret-right arrow-add-inf" />
                                                    </div>
                                                </div>

                                            </Link>

                                            <a href="#"><i className="fas fa-search" /></a>
                                        </div>
                                        <h2 className="name-product">White Leather Backpack</h2>
                                        <div className="star-rate">
                                            <div className="star-rate-off" />
                                            <div className="star-rate-on" style={{width: '90%'}} />
                                        </div>
                                        <p className="cost-product">$89.99</p>
                                        <Link to="/Shopping-cart"><a className="add-to-cart-button">+ Add to cart</a></Link>
                                        <div className="choose-color-product">
                                            <label>Choose Color</label><br />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#8f723b'}} />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#000000'}} />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#4c6e8d'}} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-item-shop">
                                        <Link to="/Shop-details" ><img src="Image/Shop/product-9.jpg" /></Link>
                                        <span className="status-prod-shop">Sale</span>
                                        <div className="icon-add">
                                            <a href="#"><i className="far fa-heart" /></a>
                                            <Link to="Compare-product">
                                                <div className="compare-icon">
                                                    <i className="fas fa-exchange-alt" />
                                                    <div className="add-inf-box">
                                                        <span className="add-inf">Compare Product</span>
                                                        <i className="fas fa-caret-right arrow-add-inf" />
                                                    </div>
                                                </div>

                                            </Link>

                                            <a href="#"><i className="fas fa-search" /></a>
                                        </div>
                                        <h2 className="name-product">White Leather Backpack</h2>
                                        <div className="star-rate">
                                            <div className="star-rate-off" />
                                            <div className="star-rate-on" style={{width: '90%'}} />
                                        </div>
                                        <p className="cost-product">$89.99</p>
                                        <Link to="/Shopping-cart"><a className="add-to-cart-button">+ Add to cart</a></Link>
                                        <div className="choose-color-product">
                                            <label>Choose Color</label><br />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#8f723b'}} />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#000000'}} />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#4c6e8d'}} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-item-shop">
                                        <Link to="/Shop-details" ><img src="Image/Shop/product-9.jpg" /></Link>
                                        <span className="status-prod-shop">Sale</span>
                                        <div className="icon-add">
                                            <a href="#"><i className="far fa-heart" /></a>
                                            <Link to="Compare-product">
                                                <div className="compare-icon">
                                                    <i className="fas fa-exchange-alt" />
                                                    <div className="add-inf-box">
                                                        <span className="add-inf">Compare Product</span>
                                                        <i className="fas fa-caret-right arrow-add-inf" />
                                                    </div>
                                                </div>

                                            </Link>

                                            <a href="#"><i className="fas fa-search" /></a>
                                        </div>
                                        <h2 className="name-product">White Leather Backpack</h2>
                                        <div className="star-rate">
                                            <div className="star-rate-off" />
                                            <div className="star-rate-on" style={{width: '90%'}} />
                                        </div>
                                        <p className="cost-product">$89.99</p>
                                        <Link to="/Shopping-cart"><a className="add-to-cart-button">+ Add to cart</a></Link>
                                        <div className="choose-color-product">
                                            <label>Choose Color</label><br />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#8f723b'}} />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#000000'}} />
                                            <input type="button" name="color" className="form-control" style={{backgroundColor: '#4c6e8d'}} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="sale-off-box">
                <div className="container">
                    <img className="img-product-sale" src="Image/Home/product-sale.png" height={305} width={350}/>
                    <ul className="list-sale-off">
                        <li><a href="#" style={{color: '#0f0f0f4f'}}>Clothings Hot</a></li>
                        <li><a href="#">Shoe Collection</a></li>
                        <li><a href="#" style={{color: '#0f0f0f4f'}}>Accessories</a></li>
                    </ul>
                    <div className="deal-of">
                        <h4>Deal of the week </h4>
                        <h2>Multi-pocket Chest Bag Black</h2>
                        <img className="Banner-hot-sale" src="Image/Home/hot-sale-banner.png"/>
                        <Link to="/Shop"><a>Shop now</a></Link>
                    </div>
                    <div className="sale-off-logo">
                        <h3>Sale off</h3>
                        <p>$29.99</p>
                    </div>
                </div>
            </div>
            <div className="male-fashion-box">
                <div className="container">
                    <div className="img-instagram">
                        <img src="Image/Home/male-fashion/instagram-1.jpg" height={261} width={257}/>
                        <img src="Image/Home/male-fashion/instagram-2.jpg" height={261} width={258}/>
                        <img src="Image/Home/male-fashion/instagram-3.jpg" height={261} width={257}/>
                        <img src="Image/Home/male-fashion/instagram-4.jpg" height={261} width={257}/>
                        <img src="Image/Home/male-fashion/instagram-5.jpg" height={261} width={258}/>
                        <img src="Image/Home/male-fashion/instagram-6.jpg" height={261} width={257}/>
                    </div>
                    <div className="describe-insta">
                        <h1>Instagram</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>
                        <h2>#Male_Fashion</h2>
                    </div>
                </div>
            </div>
            <div className="fashion-new-trend">
                <div className="container">
                    <h2>Lastest news</h2>
                    <h1>Fashion New Trends</h1>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="news-box">
                                <div className="last-blog">
                                    <div className="title-blog">
                                        <i className="far fa-calendar-alt"/>
                                        <span>16 February 2020</span>
                                        <h3>What Curling Irons Are The Best Ones</h3>
                                        <Link target="_blank" to="/Blog-detail">
                                            <a>Read more
                                                <div className="readmore-button-border"/>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="news-box ">
                                <div className="last-blog blog-2">
                                    <div className="title-blog">
                                        <i className="far fa-calendar-alt"/>
                                        <span>21 February 2020</span>
                                        <h3>Eternity Bands Do Last Forever</h3>
                                        <Link target="_blank" to="/Blog-detail">
                                            <a>Read more
                                                <div className="readmore-button-border"/>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="news-box ">
                                <div className="last-blog blog-3">
                                    <div className="title-blog">
                                        <i className="far fa-calendar-alt"/>
                                        <span>28 February 2020</span>
                                        <h3>The Health Benefits Of Sunglasses</h3>
                                        <Link target="_blank" to="/Blog-detail">
                                            <a>Read more
                                                <div className="readmore-button-border"/>
                                            </a>
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


