import React from "react";
import "./OrderDetailComponent.css"
import {Link} from "react-router-dom";
import {findUserById, logout, profile} from "../services/UserService";


class OrderDetailComponent extends React.Component{

    state = {
        // USER 1
        userId: '',
        // CHEF 1
        userInfo: {
            username: '',
            orders:[]
        },
    }
    componentDidMount() {
        // TO FETCH THE USER FROM THE SESSION
        profile()
            .then(profile => {
                if (Array.isArray(profile)) {
                    if (profile.length !== 0) {
                        this.setState({
                            // userInfo: profile[0],
                            userId: profile[0]._id
                        })
                        findUserById(profile[0]._id)
                            .then(user => {this.setState({userInfo:user})})
                    }
                } else {
                    this.setState({
                        // userInfo: profile,
                        userId: profile._id
                    })
                    findUserById(profile._id)
                        .then(user => {this.setState({userInfo:user})})
                }
            })
    }

    logout = () => {
        logout()
            .then(status => {
                this.setState({userInfo:{},userId:''})
            })
    }

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

                                    {/*code for order detail*/}
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

                                    {
                                        this.state.userInfo.orders.map(order =>
                                            <li className="list-group-item order-list-item">
                                                <div className="row">
                                                    <Link to={`/orders/${order._id}`}>
                                                        <i className="fa fa-cube order-icon" aria-hidden="true"></i>
                                                        Order Number: {order._id}
                                                    </Link>
                                                </div>

                                                <div className="order-detail">
                                                    <ul className="list-group">
                                                        {/*<li className="order-time">*/}
                                                        {/*    Order Date: {order.date}*/}
                                                        {/*</li>*/}
                                                        <li className="row">
                                                            {order.recipes.map(recipe =>
                                                                <div>
                                                                    <div className="col-6 recipe-name">
                                                                        {recipe.title}
                                                                    </div>
                                                                </div>
                                                            )}
                                                            <div className="col-3 recipe-count">
                                                                X 1
                                                            </div>
                                                            <br/>
                                                            <br/>
                                                            <div className="col-8 order-address">
                                                                <div>Pick up information</div>
                                                                <p>1005 Main St APT123 </p>
                                                            </div>

                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        )
                                    }

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
