import React from 'react';
import './CSS/Compare-product.css'
import {Link} from "react-router-dom";
export default function Compare_product(){
    return(
        <section className="main-section">
            <div className="title-comparison-product">
                <div className="container">
                    <h3>Product Comparison</h3>
                    <Link to="/" style={{textDecoration:'none'}}>     <span>Home</span></Link>
                    <i className="fas fa-chevron-right" />
                    <Link to="/Shop" style={{textDecoration:'none'}}>     <span>Shop</span></Link>
                    <i className="fas fa-chevron-right" />
                    <Link to="/Compare-product" style={{textDecoration:'none'}}>   <span>Product Comparison</span></Link>
                </div>
            </div>
            <div className="compare-box">
                <div className="container">
                    <div className="compare-table">
                        <div className="title-table">
                            <strong>Product Details</strong>
                        </div><table className="table-bordered">
                        <thead>
                        <tr>
                        </tr>
                        </thead>
                        <tbody className="main-table">
                        <tr>
                            <td className="col-md-4">
                                <span>Product</span>
                            </td>
                            <td className="col-md-4">
                                <span>Bike Jacket #1</span>
                            </td>
                            <td className="col-md-4">
                                <span>Bike Jacket #2</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="col-md-4">
                                <span>Image</span>
                            </td>
                            <td className="col-md-4">
                                <img className="img-compare" src="Image/Shop/product-1.jpg" />
                            </td>
                            <td className="col-md-4">
                                <img className="img-compare" src="Image/Shop/product-7.jpg" />
                            </td>
                        </tr>
                        <tr>
                            <td className="col-md-4">
                                <span>Star Rate</span>
                            </td>
                            <td className="col-md-4">
                                <div className="star-rate-compare">
                                    <div className="star-rate-off" />
                                    <div className="star-rate-on" style={{width: '90%'}} />
                                </div>
                            </td>
                            <td className="col-md-4">
                                <div className="star-rate-compare">
                                    <div className="star-rate-off" />
                                    <div className="star-rate-on" style={{width: '80%'}} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="col-md-4">
                                <span>Price</span>
                            </td>
                            <td className="col-md-4">
                                <span className="price-product">$ 98.49</span>
                            </td>
                            <td className="col-md-4">
                                <span className="price-product">$ 67.24</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="col-md-4">
                                <span>Color</span>
                            </td>
                            <td className="col-md-4">
                                <span>Brown Yellow</span>
                            </td>
                            <td className="col-md-4">
                                <span>Dark Black</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="col-md-4">
                                <span>Brand</span>
                            </td>
                            <td className="col-md-4">
                                <span>Louis Vuitton</span>
                            </td>
                            <td className="col-md-4">
                                <span>Chanel</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="col-md-4">
                                <span>Availability</span>
                            </td>
                            <td className="col-md-4">
                                <span>In Stock</span>
                            </td>
                            <td className="col-md-4">
                                <span>In Stock</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="col-md-4">
                                <span>Size</span>
                            </td>
                            <td className="col-md-4">
                                <span>M, L, XL, 2Xl, 3XL</span>
                            </td>
                            <td className="col-md-4">
                                <span>S, M, L, XL</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="col-md-4">
                            </td>
                            <td className="col-md-4">
                                <div className="add-remove-box">
                                    <Link to="/" style={{textDecoration:'none'}}></Link>
                                    <a className="add-to-cart-table" href="#">Add to cart</a>
                                    <a className="remove-item" href="#">Remove</a>
                                </div>
                            </td>
                            <td className="col-md-4">
                                <div className="add-remove-box">
                                    <a className="add-to-cart-table" href="#">Add to cart</a>
                                    <a className="remove-item" href="#">Remove</a>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </section>

    )
}