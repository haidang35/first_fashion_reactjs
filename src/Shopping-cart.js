import React from 'react';
import './CSS/Shopping-cart.css';
import {Link} from 'react-router-dom';
export default function Shopping_cart(){
    function delete_item_1(){
        document.getElementById("item-1").style.display='none';
    }
    function delete_item_2(){
        document.getElementById("item-2").style.display='none';
    }
    function delete_item_3(){
        document.getElementById("item-3").style.display='none';
    }
    function delete_item_4(){
        document.getElementById("item-4").style.display='none';
    }
    return(
        <section className="main-section">
            <div className="title-shopping-cart">
                <div className="container">
                    <h3>Shopping Cart</h3>
                    <Link to="/" style={{textDecoration:'none'}}>     <span>Home</span></Link>
                    <i className="fas fa-chevron-right"/>
                    <Link to="/Shop" style={{textDecoration:'none'}}>  <span>Shop</span></Link>
                    <i className="fas fa-chevron-right"/>
                    <Link to="/Shopping-cart" style={{textDecoration:'none'}}>  <span>Shopping Cart</span></Link>
                </div>
            </div>
            <div className="cart-table">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <table className="table">
                                <thead className="title-head-table">
                                <tr>
                                    <th className="product-title-table">Product</th>
                                    <th className="quantity-title-table">Quantity</th>
                                    <th className="total-title-table">Total</th>
                                    <th/>
                                </tr>
                                </thead>
                                <tbody className="main-table">
                                <tr id="item-1">
                                    <td className="product-items">
                                        <div className="img-cart">
                                            <img src="Image/Shopping-cart/cart-1.jpg"/>
                                        </div>
                                        <div className="title-cart">
                                            <h4>T-shirt Contrast Pocket</h4>
                                            <p>$98.49</p>
                                        </div>
                                    </td>
                                    <td className="quantity-item">
                                        <div className="quantity">
                                            <i className="fas fa-chevron-left"/>
                                            <span>1</span>
                                            <i className="fas fa-chevron-right"/>
                                        </div>
                                    </td>
                                    <td className="price-item">
                                        <div className="price">
                                            <p>$ 98.49</p>
                                        </div>
                                    </td>
                                    <td className="delete-item">
                                        <div className="delete" onClick={delete_item_1}>
                                            <a><i className="fas fa-times"/></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr id="item-2">
                                    <td className="product-items">
                                        <div className="img-cart">
                                            <img src="Image/Shopping-cart/cart-2.jpg"/>
                                        </div>
                                        <div className="title-cart">
                                            <h4>Diagonal Textured Cap</h4>
                                            <p>$32.50</p>
                                        </div>
                                    </td>
                                    <td className="quantity-item">
                                        <div className="quantity">
                                            <i className="fas fa-chevron-left"/>
                                            <span>1</span>
                                            <i className="fas fa-chevron-right"/>
                                        </div>
                                    </td>
                                    <td className="price-item">
                                        <div className="price">
                                            <p>$ 32.50</p>
                                        </div>
                                    </td>
                                    <td className="delete-item">
                                        <div className="delete" onClick={delete_item_2}>
                                            <a ><i className="fas fa-times"/></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr id="item-3">
                                    <td className="product-items">
                                        <div className="img-cart">
                                            <img src="Image/Shopping-cart/cart-3.jpg"/>
                                        </div>
                                        <div className="title-cart">
                                            <h4>Basic Flowing Scarf</h4>
                                            <p>$98.49</p>
                                        </div>
                                    </td>
                                    <td className="quantity-item">
                                        <div className="quantity">
                                            <i className="fas fa-chevron-left"/>
                                            <span>1</span>
                                            <i className="fas fa-chevron-right"/>
                                        </div>
                                    </td>
                                    <td className="price-item">
                                        <div className="price">
                                            <p>$ 98.49</p>
                                        </div>
                                    </td>
                                    <td className="delete-item">
                                        <div className="delete" onClick={delete_item_3}>
                                            <a><i className="fas fa-times"/></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr id="item-4">
                                    <td className="product-items">
                                        <div className="img-cart">
                                            <img src="Image/Shopping-cart/cart-4.jpg"/>
                                        </div>
                                        <div className="title-cart">
                                            <h4>Basic Flowing Scarf</h4>
                                            <p>$98.49</p>
                                        </div>
                                    </td>
                                    <td className="quantity-item">
                                        <div className="quantity">
                                            <i className="fas fa-chevron-left"/>
                                            <span>1</span>
                                            <i className="fas fa-chevron-right"/>
                                        </div>
                                    </td>
                                    <td className="price-item">
                                        <div className="price">
                                            <p>$ 98.49</p>
                                        </div>
                                    </td>
                                    <td className="delete-item">
                                        <div className="delete" onClick={delete_item_4}>
                                            <a><i className="fas fa-times"/></a>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <Link to="/Shop" style={{textDecoration:' none'}}>
                                <div className="continue-shopping">
                                    <a>Continue Shopping</a>
                                </div>
                            </Link>

                            <div className="Update-cart">
                                <a href="#"><i className="fas fa-spinner"/> Update Cart</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h3 className="discount-title">DISCOUNT CODES</h3>
                            <div className="input-discount-code">
                                <input type="text" name="discount-code" className="form-control"/>
                                <a href="#">Apply</a>
                            </div>
                            <div className="cart-total">
                                <h3>Cart Total</h3>
                                <ul>
                                    <li>Subtotal <span>$ 327.97</span></li>
                                    <li>Total <span>$ 327.97</span></li>
                                </ul>
                                <Link to="/Check-out"><a className="proceed-checkout-button">Proceed to checkout</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}