import React from "react";
import "./OrderHistoryComponent.css"
import {Link} from "react-router-dom";


class OrderHistoryComponent extends React.Component{


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
                                    <Link to='/profile'>
                                        <i className="fa fa-id-card profile-icon" aria-hidden="true"></i>
                                        My Information
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to='/orders'><i className="fa fa-shopping-bag order-icon" aria-hidden="true"></i> My Order</Link>
                                </li>
                                <li className="">
                                    <Link to='/favorites'>
                                        <i className="fa fa-heart-o favorite-icon" aria-hidden="true"></i>
                                        My Favorites
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to='/favorites'>
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

                            <div>

                                <ul className="list-group" >
                                    {/*{*/}
                                    {/*    this.props.userInfo.orders.map(order =>*/}
                                    {/*        <li className="list-group-item">*/}
                                    {/*            <Link to={`/orders/${order._id}`}>*/}
                                    {/*                <i className="fa fa-cube order-icon" aria-hidden="true"></i>*/}
                                    {/*                Order Number: {order._id}*/}
                                    {/*            </Link>*/}
                                    {/*        </li>*/}
                                    {/*    )*/}
                                    {/*}*/}


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

export default OrderHistoryComponent;
