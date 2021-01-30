import React from 'react';
import './CSS/Shop.css';
import {Link} from 'react-router-dom';
export default function Shop(){
    function Close_tab_category(){
        if(document.getElementById("list-cate-box").style.display === 'block'){
            document.getElementById("list-cate-box").style.display='none';
        }else{
            document.getElementById("list-cate-box").style.display='block';
        }
    }
    function Close_tab_brand(){
        if(document.getElementById("list-brand-box").style.display === 'block'){
            document.getElementById("list-brand-box").style.display='none';
        }else{
            document.getElementById("list-brand-box").style.display='block';
        }
    }
    function Close_tab_price(){
        if(document.getElementById("list-price-box").style.display === 'block'){
            document.getElementById("list-price-box").style.display='none';
        }else{
            document.getElementById("list-price-box").style.display='block';
        }
    }
    function Close_tab_size(){
        if(document.getElementById("choose-size-box").style.display === 'block'){
            document.getElementById("choose-size-box").style.display='none';
        }else{
            document.getElementById("choose-size-box").style.display='block';
        }
    }
    function Open_tab_colors(){
        if(document.getElementById("choose-color").style.display === 'block'){
            document.getElementById("choose-color").style.display='none';
        }else{
            document.getElementById("choose-color").style.display='block';
        }
    }
    function Open_tab_tags(){
        if(document.getElementById("choose-tag").style.display === 'block'){
            document.getElementById("choose-tag").style.display='none';
        }else{
            document.getElementById("choose-tag").style.display='block';
        }
    }
    function open_low_price(){
        var item=document.getElementById("low-to-high-box");
        if(item.style.display === 'none'){
            document.getElementById("low-to-high-box").style.display=  'block';
        }else{
            document.getElementById("low-to-high-box").style.display=  'none';
        }
    }
    return(
        <section className="main-box">
            <div className="title-page">
                <div className="container">
                    <h3>Shop</h3>
                    <Link to="/" style={{textDecoration:'none'}}><span>Home</span></Link>
                    <i className="fas fa-chevron-right"/>
                    <Link to="/Shop" style={{textDecoration:'none'}}><span>Shop</span></Link>
                </div>
            </div>
            <div className="product-box">
                <div className="container">
                    <div className="row">
                        <div className="side-bar col-md-3">
                            <div className="search-bar">
                                <input type="text" name="search" placeholder="Search ..." className="form-control"/>
                                <a href="#"><i className="fas fa-search"/></a>
                            </div>
                            <div className="category-box">
                                <div className="title-category" onClick={Close_tab_category}><h3>Categories<i
                                    className="fas fa-chevron-down"/></h3></div>
                                <div id="list-cate-box">
                                    <ul className="list-category-box">
                                        <li className="list-category"><a href="#">Men (20)</a></li>
                                        <li className="list-category"><a href="#">Women (20)</a></li>
                                        <li className="list-category"><a href="#">Bags (20)</a></li>
                                        <li className="list-category"><a href="#">Clothing (20)</a></li>
                                        <li className="list-category"><a href="#">Shoes (20)</a></li>
                                        <li className="list-category"><a href="#">Accessories (20)</a></li>
                                        <li className="list-category"><a href="#">Kids (20)</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="brand-box">
                                <div className="title-brand" onClick={Close_tab_brand}><h3>Brand<i
                                    className="fas fa-chevron-down"/></h3></div>
                                <div id="list-brand-box">
                                    <ul className="list-brand-box">
                                        <li className="list-brand"><a href="#">Louis Vuitton</a></li>
                                        <li className="list-brand"><a href="#">Chanel</a></li>
                                        <li className="list-brand"><a href="#">Hermes</a></li>
                                        <li className="list-brand"><a href="#">Gucci</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-price-box">
                                <div className="title-price" onClick={Close_tab_price}><h3>Filter Price<i
                                    className="fas fa-chevron-down"/></h3></div>
                                <div id="list-price-box">
                                    <ul className="list-price-box">
                                        <li className="list-price"><a href="#">$0.00 - $50.00</a></li>
                                        <li className="list-brand"><a href="#">$50.00 - $100.00</a></li>
                                        <li className="list-brand"><a href="#">$100.00 - $150.00</a></li>
                                        <li className="list-brand"><a href="#">$150.00 - $200.00</a></li>
                                        <li className="list-brand"><a href="#">$150.00 - $200.00</a></li>
                                        <li className="list-brand"><a href="#">$200.00 - $250.00</a></li>
                                        <li className="list-brand"><a href="#">250.00+</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="size-box">
                                <div className="title-size" onClick={Close_tab_size}>
                                    <h3>Size<i className="fas fa-chevron-down"/></h3>
                                </div>
                                <div className="choose-size-box" id="choose-size-box">
                                    <input name="button" type="button" className="choose-size form-control"
                                           defaultValue="XS"/>
                                    <input name="button" type="button" className="choose-size form-control"
                                           defaultValue="S"/>
                                    <input name="button" type="button" className="choose-size form-control"
                                           defaultValue="M"/>
                                    <input name="button" type="button" className="choose-size form-control"
                                           defaultValue="L"/>
                                    <input name="button" type="button" className="choose-size form-control"
                                           defaultValue="XL"/>
                                    <input name="button" type="button" className="choose-size form-control"
                                           defaultValue="2XL"/>
                                    <input name="button" type="button" className="choose-size form-control"
                                           defaultValue="3XL"/>
                                    <input name="button" type="button" className="choose-size form-control"
                                           defaultValue="4XL" style={{float: 'none'}}/>
                                </div>
                            </div>
                            <div className="color-box">
                                <div className="title-size" onClick={Open_tab_colors}>
                                    <h3>Colors<i className="fas fa-chevron-down"/></h3>
                                </div>
                                <div className="choose-color" id="choose-color">
                                    <input type="button" name="color" className="form-control"
                                           style={{backgroundColor: '#000000'}}/>
                                    <input type="button" name="color" className="form-control"
                                           style={{backgroundColor: '#0a85ef'}}/>
                                    <input type="button" name="color" className="form-control"
                                           style={{backgroundColor: '#f8c502'}}/>
                                    <input type="button" name="color" className="form-control"
                                           style={{backgroundColor: '#989491'}}/>
                                    <input type="button" name="color" className="form-control"
                                           style={{backgroundColor: '#6d4b1d'}}/>
                                    <input type="button" name="color" className="form-control"
                                           style={{backgroundColor: '#ebcef1'}}/>
                                    <input type="button" name="color" className="form-control"
                                           style={{backgroundColor: '#f3a0f2'}}/>
                                    <input type="button" name="color" className="form-control"
                                           style={{backgroundColor: '#f50f50'}}/>
                                    <input type="button" name="color" className="form-control"
                                           style={{backgroundColor: '#fcfcfc', float: 'none'}}/>
                                </div>
                            </div>
                            <div className="tags-box">
                                <div className="title-size" onClick={Open_tab_tags}>
                                    <h3>Tags<i className="fas fa-chevron-down"/></h3>
                                </div>
                                <div className="choose-tags" id="choose-tag">
                                    <a href="#" className="tag-title">Products</a>
                                    <a href="#" className="tag-title">Bags</a>
                                    <a href="#" className="tag-title">Shoes</a>
                                    <a href="#" className="tag-title">Fashion</a>
                                    <a href="#" className="tag-title">Clothing</a>
                                    <a href="#" className="tag-title">Hats</a>
                                    <a href="#" className="tag-title">Accessories</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="main-product-box ">
                                <div className="title-product-bar">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p>Showing 1–12 of 126 results</p>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="sort-price">
                                                <span>Sort by Price: </span>
                                                <span className="low-to-high"
                                                      onClick="open_low_price(this)">Low to High</span>
                                                <i className="fas fa-chevron-down arrow-down"
                                                   onClick={open_low_price}/><br/>
                                                <div className="low-to-high-price" id="low-to-high-box">
                                                    <ul>
                                                        <li>$0 - $50</li>
                                                        <li>$50 - $100</li>
                                                        <li>$100 - $200</li>
                                                        <li>$200 - $500</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="products-list">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="product-item-shop">
                                                <Link to="/Shop-details">  <img src="Image/Shop/product-1.jpg" /></Link>
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
                                                <h2 className="name-product">Pique Biker Jacket</h2>
                                                <div className="star-rate">
                                                    <div className="star-rate-off" />
                                                    <div className="star-rate-on" style={{width: '80%'}} />
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
                                        <div className="col-md-4">
                                            <div className="product-item-shop">
                                                <Link to="/Shop-details"><img src="Image/Shop/product-2.jpg" /></Link>
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
                                                <h2 className="name-product">Classic Sneaker A</h2>
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
                                        <div className="col-md-4">
                                            <div className="product-item-shop">
                                                <Link to="/Shop-details"><img src="Image/Shop/product-3.jpg" /></Link>
                                                <span className="status-prod-shop">Sale</span>
                                                <div className="icon-add">
                                                    <a href="#"><i className="far fa-heart" /></a>
                                                    <Link to="Compare-product" target="_top">
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
                                                    <div className="star-rate-on" style={{width: '95%'}} />
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
                                        <div className="col-md-4">
                                            <div className="product-item-shop">
                                                <Link to="/Shop-details" > <img src="Image/Shop/product-4.jpg" /></Link>
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
                                                    <div className="star-rate-on" style={{width: '85%'}} />
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
                                        <div className="col-md-4">
                                            <div className="product-item-shop">
                                                <Link to="Shop-details"> <img src="Image/Shop/product-5.jpg" /></Link>
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
                                                    <div className="star-rate-on" style={{width: '70%'}} />
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
                                        <div className="col-md-4">
                                            <div className="product-item-shop">
                                                <Link to="/Shop-details">    <img src="Image/Shop/product-6.png" /></Link>
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
                                                    <div className="star-rate-on" style={{width: '80%'}} />
                                                </div>
                                                <p className="cost-product">$30.35</p>
                                                <Link to="/Shopping-cart" target="_top"><a className="add-to-cart-button">+ Add to cart</a></Link>
                                                <div className="choose-color-product">
                                                    <label>Choose Color</label><br />
                                                    <input type="button" name="color" className="form-control" style={{backgroundColor: '#8f723b'}} />
                                                    <input type="button" name="color" className="form-control" style={{backgroundColor: '#000000'}} />
                                                    <input type="button" name="color" className="form-control" style={{backgroundColor: '#4c6e8d'}} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="product-item-shop">
                                                <Link to="/Shop-details"><img src="Image/Shop/product-7.jpg" /></Link>
                                                <span className="status-prod-shop">Sale</span>
                                                <div className="icon-add">
                                                    <a href="#"><i className="far fa-heart" /></a>
                                                    <Link to="Compare-product" >
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
                                                    <div className="star-rate-on" style={{width: '100%'}} />
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
                                        <div className="col-md-4">
                                            <div className="product-item-shop">
                                                <Link to="/Shop-details"> <img src="Image/Shop/product-8.jpg" /></Link>
                                                <span className="status-prod-shop">Sale</span>
                                                <div className="icon-add">
                                                    <a href="#"><i className="far fa-heart" /></a>
                                                    <Link to="Compare-product" >
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
                                                    <div className="star-rate-on" style={{width: '80%'}} />
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
                                        <div className="col-md-4">
                                            <div className="product-item-shop">
                                                <Link to="/Shop-details">  <img src="Image/Shop/product-9.jpg" /></Link>
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
                                                    <div className="star-rate-on" style={{width: '80%'}} />
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
                                        <div className="col-md-4">
                                            <div className="product-item-shop">
                                                <Link to="/Shop-details">   <img src="Image/Shop/product-10.jpg" /></Link>
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
                                        <div className="col-md-4">
                                            <div className="product-item-shop">
                                                <Link to="/Shop-details"> <img src="Image/Shop/product-11.png" /></Link>
                                                <span className="status-prod-shop">Sale</span>
                                                <div className="icon-add">
                                                    <a href="#"><i className="far fa-heart" /></a>
                                                    <Link to="Compare-product" >
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
                                                <h2 className="name-product">Business Leather Bag</h2>
                                                <div className="star-rate">
                                                    <div className="star-rate-off" />
                                                    <div className="star-rate-on" style={{width: '80%'}} />
                                                </div>
                                                <p className="cost-product">$199.00</p>
                                                <Link to="/Shopping-cart" ><a className="add-to-cart-button">+ Add to cart</a></Link>
                                                <div className="choose-color-product">
                                                    <label>Choose Color</label><br />
                                                    <input type="button" name="color" className="form-control" style={{backgroundColor: '#8f723b'}} />
                                                    <input type="button" name="color" className="form-control" style={{backgroundColor: '#000000'}} />
                                                    <input type="button" name="color" className="form-control" style={{backgroundColor: '#4c6e8d'}} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="product-item-shop">
                                                <Link to="/Shop-details">  <img src="Image/Shop/product-12.jpg" /></Link>
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
                                                <h2 className="name-product">Gilded Business Glasses</h2>
                                                <div className="star-rate">
                                                    <div className="star-rate-off" />
                                                    <div className="star-rate-on" style={{width: '75%'}} />
                                                </div>
                                                <p className="cost-product">$149.99</p>
                                                <Link to="/Shopping-cart" ><a className="add-to-cart-button">+ Add to cart</a></Link>
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
                                <div className="list-pages">
                                    <a href="#" className="page-one">1</a>
                                    <a href="#">2</a>
                                    <a href="#">3</a>
                                    <span>...</span>
                                    <a href="#">21</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}