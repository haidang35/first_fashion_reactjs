import React from 'react';
import './CSS/Shop-detail.css';
import {Link} from "react-router-dom";
 export default function Shop_details(){
     function click_img_1(){
         document.getElementById("product-big-1").style.display ='block';
         document.getElementById("product-big-3").style.display='none';
         document.getElementById("product-big-2").style.display='none';
         document.getElementById("product-big-4").style.display='none';
         document.getElementById(" thumb-1").style.border='1px solid black';
         document.getElementById(" thumb-3").style.border='none';
         document.getElementById(" thumb-4").style.border='none';
         document.getElementById(" thumb-2").style.border='none';
     }
     function click_img_2(){
         document.getElementById("product-big-2").style.display='block';
         document.getElementById("product-big-1").style.display='none';
         document.getElementById("product-big-3").style.display='none';
         document.getElementById("product-big-4").style.display='none';
         document.getElementById(" thumb-2").style.border='1px solid black';
         document.getElementById(" thumb-3").style.border='none';
         document.getElementById(" thumb-4").style.border='none';
         document.getElementById(" thumb-1").style.border='none';

     }
     function click_img_3(){
         document.getElementById("product-big-3").style.display='block';
         document.getElementById("product-big-1").style.display='none';
         document.getElementById("product-big-2").style.display='none';
         document.getElementById("product-big-4").style.display='none';
         document.getElementById(" thumb-3").style.border='1px solid black';
         document.getElementById(" thumb-2").style.border='none';
         document.getElementById(" thumb-4").style.border='none';
         document.getElementById(" thumb-1").style.border='none';
     }
     function click_img_4(){
         document.getElementById("product-big-4").style.display='block';
         document.getElementById("product-big-1").style.display='none';
         document.getElementById("product-big-3").style.display='none';
         document.getElementById("product-big-2").style.display='none';
         document.getElementById(" thumb-4").style.border='1px solid black';
         document.getElementById(" thumb-3").style.border='none';
         document.getElementById(" thumb-2").style.border='none';
         document.getElementById(" thumb-1").style.border='none';
     }
     function open_tab_prod_des(){
         document.getElementById("product-des").style.display= 'block';
         document.getElementById("prod-des-title").style.color='#f53403';
         document.getElementById("customer-reviewer").style.display='none';
         document.getElementById("customer-reviewer-title").style.color='#0f0f0f';
     }
     function  open_tab_customer_reviewer(){
         document.getElementById("customer-reviewer").style.display='block';
         document.getElementById("product-des").style.display= 'none';
         document.getElementById("customer-reviewer-title").style.color='#f53403';
         document.getElementById("prod-des-title").style.color='#0f0f0f';
     }
     return(
         <section className="main-section">
             <div className="product-detail-box">
                 <div className="container">
                     <div className="title-link">
                         <Link to="/" style={{textDecoration:'none'}}> <span>Home</span></Link>
                         <i className="fas fa-chevron-right"/>
                         <Link to="/Shop" style={{textDecoration:'none'}}>  <span>Shop</span></Link>
                         <i className="fas fa-chevron-right"/>
                         <Link to="/Shop-details" style={{textDecoration:'none'}}><span>Product Details</span></Link>
                     </div>
                     <div className="img-product-box">
                         <div className="img-product" id=" thumb-1"
                              style={{backgroundImage: 'url(Image/Shop-detail/thumb-1.png)'}}
                              onClick={click_img_1}>
                         </div>
                         <div className="img-product" id=" thumb-2"
                              style={{backgroundImage: 'url(Image/Shop-detail/thumb-2.png)'}}
                              onClick={click_img_2}>
                         </div>
                         <div className="img-product" id=" thumb-3"
                              style={{backgroundImage: 'url(Image/Shop-detail/thumb-3.png)'}}
                              onClick={click_img_3}>
                         </div>
                         <div className="img-product" id=" thumb-4"
                              style={{backgroundImage: 'url(Image/Shop-detail/thumb-4.png)'}}
                              onClick={click_img_4}>
                         </div>
                     </div>
                     <div className="img-product-zoom">
                         <img src="Image/Shop-detail/product-big-1.png" id="product-big-1" style={{display: 'block'}}/>
                         <img src="Image/Shop-detail/product-big-2.png" id="product-big-2"/>
                         <img src="Image/Shop-detail/product-big-3.png" id="product-big-3"
                              style={{width: 300, marginTop: 100}}/>
                         <img src="Image/Shop-detail/product-big-4.png" id="product-big-4"/>
                     </div>
                     <div className="detail-prod">
                         <h3>Hooded thermal anorak</h3>
                         <div className="star-rate">
                             <div className="star-rate-off"/>
                             <div className="star-rate-on" style={{width: '80%'}}/>
                         </div>
                         <div className="review-number">
                             <span>5 reviews</span>
                             <span>|</span>
                             <a href="#"><span>Add your review</span></a>
                         </div>
                         <p>Available in <span style={{color: 'forestgreen'}}>Stock</span></p>
                         <p className="cost-prod">$270.00</p>
                         <p className="describe-prod">Coat with quilted lining and an adjustable hood. Featuring long
                             sleeves with adjustable cuff tabs, adjustable asymmetric hem with elastic side tabs and a
                             front zip fastening with placket.</p>
                         <div className="choose-color-prod">
                             <label>Color <span style={{color: 'red'}}>*</span></label><br/>
                             <input type="button" className="form-control" style={{backgroundColor: '#0f0f0f'}}/>
                             <input type="button" className="form-control" style={{backgroundColor: '#ffffff'}}/>
                             <input type="button" className="form-control" style={{backgroundColor: '#deb733'}}/>
                             <input type="button" className="form-control" style={{backgroundColor: '#1b7e8f'}}/>
                             <input type="button" className="form-control" style={{backgroundColor: '#c0a990'}}/>
                         </div>
                         <div className="choose-size-prod">
                             <label className="title-size">Size <span style={{color: 'red'}}>*</span></label><br/>
                             <input type="button" className="form-control" defaultValue="XL"/>
                             <input type="button" className="form-control" defaultValue="L"/>
                             <input type="button" className="form-control" defaultValue="S"/>
                             <input type="button" className="form-control" defaultValue="M"/>
                             <input type="button" className="form-control" defaultValue="2XL"/>
                             <input type="button" className="form-control" defaultValue="3XL"/>
                         </div>
                         <div className="choose-number-prod">
                             <div className="form-group">
                                 <input type="number" defaultValue={1} min={1} className="form-control"/>
                             </div>
                             <Link to="/Shopping-cart" style={{textDecoration:'none'}}> <a className="add-to-cart">Add to cart</a></Link>
                         </div>
                         <div className="add-wishlist-compare">
                             <a href="#"><i className="fas fa-heart"/>Add to withlist </a>
                             <Link to="/Compare-product" style={{textDecoration:'none'}}>   <a><i className="fas fa-exchange-alt"/>Add to compare</a></Link>
                         </div>
                         <div className="img-payment">
                             <p>Guaranteed Safe Checkout</p>
                             <img src="Image/Shop-detail/details-payment.png"/>
                         </div>
                     </div>
                     {/*<div className="share-to-social-network">*/}
                     {/*    <span>Share:</span>*/}
                     {/*    <a href="#"><i className="fab fa-facebook-f"/></a>*/}
                     {/*    <a href="#"><i className="fab fa-twitter"/></a>*/}
                     {/*    <a href="#"><i className="fab fa-instagram"/></a>*/}
                     {/*    <a href="#"><i className="fab fa-pinterest"/></a>*/}
                     {/*</div>*/}
                 </div>
             </div>
             <div className="des-detail-product">
                 <div className="container">
                     <div className="title-des-prod">
                         <span onClick={open_tab_prod_des} id="prod-des-title" style={{color: '#f53403'}}>Product Description</span>
                         <span onClick={open_tab_customer_reviewer} id="customer-reviewer-title">Customer Review(5)</span>
                         <span><a className="Download-details-prod" target="_blank" href="https://bom.to/xuJB1aVxw">Download Information Details</a></span>
                     </div>
                     <div className="product-des" id="product-des">
                         <p style={{fontWeight: 500}}>
                             Thin sweaters may be worn tucked into the waistband of trousers; but otherwise, men's sweaters are worn untucked. Nonetheless, some individuals, including some television and film actors, have been known for wearing tucked-in sweaters.
                         </p>
                         <h3>Products Infomation</h3>
                         <p>
                             Sweaters are a versatile item of clothing and can be worn on top of almost any outfit. Sports sweaters are often worn on tops of sports kit while traveling to or from a sports ground. Sweaters can be worn with a dress shirt underneath (and optionally a tie), which has the advantage of allowing the wearer to have the option of removing the sweater when it is uncomfortably warm and still looking presentable in many situations. Layering and the ease with which it allows for temperature regulation is a major benefit of the sweater as an article of clothing. Various methods have evolved for conveniently carrying a sweater, once removed. The three most common approaches are: around the waist (either loin cloth or knotted in front style) and over the shoulder.
                         </p>
                         <h3>Material used</h3>
                         <p>
                             Polyester is deemed lower quality due to its none natural quality’s. Made from synthetic
                             materials, not natural like wool. Polyester suits become creased easily and are known for
                             not being breathable. Polyester suits tend to have a shine to them compared to wool and
                             cotton suits, this can make the suit look cheap. The texture of velvet is luxurious and
                             breathable. Velvet is a great choice for dinner party jacket and can be worn all year
                             round.
                         </p>
                     </div>
                     <div className="add-inf" id="add-inf">
                         <p>
                             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                             anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                             accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                             veritatis et quasi architecto beatae vitae dicta sunt explicabo. Emo enim ipsam voluptatem
                             quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
                         </p>
                     </div>
                     <div className="customer-review" id="customer-reviewer">
                         <div className="reviewer">
                             <img src="Image/Shop-detail/user.png"/>
                             <div className="content-review">
                                 <h4>Dang Jinner</h4>
                                 <div className="star-rate">
                                     <div className="star-rate-off"/>
                                     <div className="star-rate-on" style={{width: '100%'}}/>
                                 </div>
                                 <p>" Good Product! "</p>
                                 <div className="time-comment">
                                     <i className="fas fa-calendar-alt"/>
                                     <span>27-01-2021</span>
                                 </div>
                             </div>
                         </div>
                         <div className="reviewer">
                             <img src="Image/Shop-detail/822727_user_512x512.png"/>
                             <div className="content-review">
                                 <h4>Jenifer</h4>
                                 <div className="star-rate">
                                     <div className="star-rate-off"/>
                                     <div className="star-rate-on" style={{width: '100%'}}/>
                                 </div>
                                 <p>" This is the best product I have seen ! "</p>
                                 <div className="time-comment">
                                     <i className="fas fa-calendar-alt"/>
                                     <span>25-01-2021</span>
                                 </div>
                             </div>
                         </div>
                         <div className="reviewer">
                             <img src="Image/Shop-detail/avat-01-512.webp"/>
                             <div className="content-review">
                                 <h4>Wiliam Charline</h4>
                                 <div className="star-rate">
                                     <div className="star-rate-off"/>
                                     <div className="star-rate-on" style={{width: '100%'}}/>
                                 </div>
                                 <p>" The product is very beautiful, the price is reasonable "</p>
                                 <div className="time-comment">
                                     <i className="fas fa-calendar-alt"/>
                                     <span>16-01-2021</span>
                                 </div>
                             </div>
                         </div>
                         <div className="reviewer">
                             <img src="Image/Shop-detail/194938.png"/>
                             <div className="content-review">
                                 <h4>Elisa Watt</h4>
                                 <div className="star-rate">
                                     <div className="star-rate-off"/>
                                     <div className="star-rate-on" style={{width: '100%'}}/>
                                 </div>
                                 <p>" Great ! "</p>
                                 <div className="time-comment">
                                     <i className="fas fa-calendar-alt"/>
                                     <span>05-01-2021</span>
                                 </div>
                             </div>
                         </div>
                         <div className="reviewer">
                             <img src="Image/Shop-detail/user-6.png"/>
                             <div className="content-review">
                                 <h4>Elon Musk</h4>
                                 <div className="star-rate">
                                     <div className="star-rate-off"/>
                                     <div className="star-rate-on" style={{width: '100%'}}/>
                                 </div>
                                 <p>" The sale service here is very good "</p>
                                 <div className="time-comment">
                                     <i className="fas fa-calendar-alt"/>
                                     <span>20-12-2020</span>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             <div className="relate-product">
                 <div className="container">
                     <h3>Related Product</h3>
                     <div className="row">
                         <div className="col-md-3">
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
                                     <div className="star-rate-on" style={{width: '75%'}} />
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
                                 <Link to="/Shop-details">  <img src="Image/Shop-detail/product-relate-1.jpg" /></Link>
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
                                 <h2 className="name-product">New Generation Jacket</h2>
                                 <div className="star-rate">
                                     <div className="star-rate-off" />
                                     <div className="star-rate-on" style={{width: '75%'}} />
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
                         <div className="col-md-3">
                             <div className="product-item-shop">
                                 <Link to="/Shop-details">  <img src="Image/Shop-detail/product-relate-3.png" /></Link>
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
                                 <h2 className="name-product">Black Summer T-Shirt</h2>
                                 <div className="star-rate">
                                     <div className="star-rate-off" />
                                     <div className="star-rate-on" style={{width: '75%'}} />
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
                                 <Link to="/Shop-details">  <img src="Image/Shop-detail/product-relate-4.jpg" /></Link>
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
                                 <h2 className="name-product">Floral Motif Black T-Shirt</h2>
                                 <div className="star-rate">
                                     <div className="star-rate-off" />
                                     <div className="star-rate-on" style={{width: '75%'}} />
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
                     </div>
                 </div>
             </div>
         </section>

     )
 }