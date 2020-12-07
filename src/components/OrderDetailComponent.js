import React from "react";
import "./OrderDetailComponent.css"
import {Link} from "react-router-dom";


class OrderDetailComponent extends React.Component{
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row wrapper">
                        <div className="col-4 sidebar">
                            <div className="back-to-home">
                                <a href="">
                                    <Link to='/'>
                                        <i className="fa fa-chevron-left mr-2"></i>
                                        Home
                                    </Link>
                                </a>
                            </div>
                            <h1 className="title">My Account</h1>
                            <ul className="" >
                                <li className="">
                                    <Link to='/myprofile'>
                                        <i className="fa fa-smile-o follow-icon" aria-hidden="true"></i>
                                        My Profile
                                    </Link>

                                </li>
                                <li className="">
                                    <Link to='/myinformation'>
                                        <i className="fa fa-id-card profile-icon" aria-hidden="true"></i>
                                        My Information
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to='/myorders'><i className="fa fa-shopping-bag order-icon" aria-hidden="true"></i> My Order</Link>
                                </li>
                                <li className="">
                                    <Link to='/myfavorites'>
                                        <i className="fa fa-heart-o favorite-icon" aria-hidden="true"></i>
                                        My Favorites
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to='/myfavorites'>
                                        <i className="fa fa-user favorite-icon" aria-hidden="true"></i>
                                        My Following
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to='/'>
                                        <i className="fa fa-sign-out logout-icon" aria-hidden="true"></i>
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <form className="col-8 order-content">
                            <h3 className="order-title">My Order History</h3>
                            <div className="form-group row">
                                <label htmlFor="usernameFld" className="col-sm-2 col-form-label">
                                    Search
                                </label>
                                <div className="col-sm-10">
                                    <input className="form-control"
                                           type="text"
                                           id="usernameFld"
                                           placeholder="order number"/>
                                </div>
                            </div>

                            <div>
                                <h1></h1>
                                <ul className="list-group" >
                                    <li className="list-group-item order-list-item">
                                        <div className="row">
                                            <div className="col-6">
                                                <i className="fa fa-cube order-icon" aria-hidden="true"></i>
                                                Order1
                                            </div>
                                            <div className="col-6 order-number">
                                                Order Number:1120120012
                                            </div>
                                        </div>

                                        <div className="order-detail">

                                            <ul className="list-group">
                                                <li className="order-time">
                                                    11/27/2020 | 11:30am
                                                </li>
                                                <li className="row">
                                                    <div className="col-6 recipe-name">
                                                        Tomato Soup
                                                    </div>
                                                    <div className="col-3 recipe-count">
                                                        X 1
                                                    </div>

                                                    <div className="col-6 recipe-name">
                                                        Roast Duck
                                                    </div>
                                                    <div className="col-3 recipe-count">
                                                        X 1
                                                    </div>

                                                    <div className="col-6 recipe-name">
                                                        Bubble Tea
                                                    </div>
                                                    <div className="col-3 recipe-count">
                                                        X 1
                                                    </div>

                                                    <div className="col-6 recipe-name">
                                                        Mapo Tofu
                                                    </div>
                                                    <div className="col-3 recipe-count">
                                                        X 1
                                                    </div>


                                                    <div className="col-8 order-address">
                                                        <div>Pick up information</div>
                                                        <p>1005 Main St APT123 </p>
                                                    </div>




                                                </li>
                                            </ul>
                                        </div>


                                    </li>
                                    <li className="list-group-item">
                                        <i className="fa fa-cube order-icon" aria-hidden="true"></i>
                                        Order2
                                    </li>
                                    <li className="list-group-item">
                                        <i className="fa fa-cube order-icon" aria-hidden="true"></i>
                                        Order3
                                    </li>
                                    <li className="list-group-item">
                                        <i className="fa fa-cube order-icon" aria-hidden="true"></i>
                                        Order4
                                    </li>
                                    <li className="list-group-item">
                                        <i className="fa fa-cube order-icon" aria-hidden="true"></i>
                                        Order5
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </div>


                </div>
            </div>

        )
    }
}

export default OrderDetailComponent;
