import React from "react";
import "./OrderDetailComponent.css"
import {Link} from "react-router-dom";
import "./CartComponent.css"

class CartComponent extends React.Component{
    render() {
        return (
            <div>
                <div className="pt-5 pb-5">
                    <div className="container">
                        <div className="row w-100">
                            <div className="col-lg-12 col-md-12 col-12">
                                <h3 className="display-5 mb-2 text-center">Shopping Cart</h3>
                                <p className="mb-5 text-center">
                                    <i className="text-info font-weight-bold">3</i> items in your cart</p>
                                <table id="shoppingCart" className="table table-condensed table-responsive">
                                    <thead>
                                    <tr>
                                        <th className="head-product">Product</th>
                                        <th className="head-price">Price</th>
                                        <th className="head-quantity">Quantity</th>
                                        <th className="head-nothing"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td data-th="Product">
                                            <div className="row">
                                                <div className="col-md-3 text-left">
                                                    <img src="https://www.louisianatravel.com/sites/default/files/legacy_images/crawfish%20town-friedseafood.jpeg"
                                                         alt=""
                                                         className="img-fluid d-none d-md-block rounded mb-2 shadow "/>
                                                </div>
                                                <div className="col-md-9 text-left mt-sm-2">
                                                    <h4>Shrimp Scampi</h4>
                                                    <p className="font-weight-light">Brand &amp; Name</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td data-th="Price">$20.00</td>
                                        <td data-th="Quantity">
                                            <input type="number" className="form-control form-control-lg text-center"
                                                   value="1"/>
                                        </td>
                                        <td className="actions" data-th="">
                                            <div className="text-right">
                                                <button className="btn btn-white border-secondary bg-white btn-md mb-2">
                                                    <i className="fa fa-edit"></i>
                                                </button>
                                                <button className="btn btn-white border-secondary bg-white btn-md mb-2">
                                                    <i className="fa fa-trash"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td data-th="Product">
                                            <div className="row">
                                                <div className="col-md-3 text-left">
                                                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-sugar-free-cheesecake-1581456006.jpg?crop=0.505xw:1.00xh;0.248xw,0&resize=640:*" alt=""
                                                         className="img-fluid d-none d-md-block rounded mb-2 shadow "/>
                                                </div>
                                                <div className="col-md-9 text-left mt-sm-2">
                                                    <h4>Cheese Cake</h4>
                                                    <p className="font-weight-light">Chef &amp; Name</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td data-th="Price">$15.00</td>
                                        <td data-th="Quantity">
                                            <input type="number" className="form-control form-control-lg text-center"
                                                   value="1"/>
                                        </td>
                                        <td className="actions" data-th="">
                                            <div className="text-right">
                                                <button className="btn btn-white border-secondary bg-white btn-md mb-2">
                                                    <i className="fa fa-edit"></i>
                                                </button>
                                                <button className="btn btn-white border-secondary bg-white btn-md mb-2">
                                                    <i className="fa fa-trash"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td data-th="Product">
                                            <div className="row">
                                                <div className="col-md-3 text-left">
                                                    <img src="https://images.immediate.co.uk/production/volatile/sites/2/2018/10/olive_Cheesecakes-f005ffb.jpg?quality=90&resize=768%2C574" alt=""
                                                         className="img-fluid d-none d-md-block rounded mb-2 shadow "/>
                                                </div>
                                                <div className="col-md-9 text-left mt-sm-2">
                                                    <h4>Tiramisu</h4>
                                                    <p className="font-weight-light">Chef &amp; Name</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td data-th="Price">$5.00</td>
                                        <td data-th="Quantity">
                                            <input type="number" className="form-control form-control-lg text-center"
                                                   value="1"/>
                                        </td>
                                        <td className="actions" data-th="">
                                            <div className="text-right">
                                                <button className="btn btn-white border-secondary bg-white btn-md mb-2">
                                                    <i className="fa fa-edit"></i>
                                                </button>
                                                <button className="btn btn-white border-secondary bg-white btn-md mb-2">
                                                    <i className="fa fa-trash"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>


                                <div className="float-right text-right">
                                    <h4>Subtotal:</h4>
                                    <h1>$40.00</h1>
                                </div>
                            </div>
                        </div>


                        <div className="row mt-4 d-flex align-items-center">
                            <div className="col-sm-6 order-md-2 text-right">
                                <a href="catalog.html" className="btn btn-primary mb-4 btn-lg pl-5 pr-5">Place Order</a>
                            </div>
                            <div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
                                <a href="/">
                                    <i className="fa fa-arrow-left mr-2"></i> Continue Shopping</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartComponent;
