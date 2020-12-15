import React from "react";
import "../css/OrderDetailComponent.css"
import {Link} from "react-router-dom";
import {findUserById, logout, profile, updateUser} from "../services/UserService";
import {deleteOrder} from "../services/orderService";


class OrderDetailComponent extends React.Component{

    state = {
        // USER 1
        userId: '',
        // CHEF 1
        userInfo: {
            username: '',
            orders:[{_id:'',
                recipes:[]}
                ]
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

    deleteOrder = (orderId) =>{
        const oldUser = this.state.userInfo;
        const newOrders = this.state.userInfo.orders.filter(order => order._id !== orderId);
        const newUser = {
            ...oldUser,
            orders: newOrders
        }
        updateUser(this.state.userInfo._id, newUser)
            .then(status => {
                this.setState({userInfo : newUser})
            })
        deleteOrder(orderId)
            .then(status => console.log("order deleted"))
    }
    // deleteOrder = (orderId) =>{
    //     const oldUser = this.state.userInfo;
    //     const newOrders = this.state.userInfo.orders.filter(order => order._id !== orderId)
    //     const newUser = {
    //         ...oldUser,
    //         orders:newOrders
    //     }
    //     updateUser(this.state.userInfo._id,newUser)
    //         .then(status =>{
    //             this.setState({userInfo:newUser})})
    //
    //     deleteOrder(orderId)
    //         .then(status=>this.setState(prevState =>({
    //             orders:prevState.userInfo.orders.filter(order => order._id !== orderId)
    //             })
    //         ))
    // }



    // deleteOrder = (orderId) =>{
    //     const oldUser = this.state.userInfo;
    //
    //     deleteOrder(orderId)
    //         .then(status =>(
    //             findUserById(this.state.userId)
    //             .then(user => {this.setState({userInfo:user})}))
    //         )
    // }
    //
    // deleteOrder = (orderId) =>{
    //     const oldUser = this.state.userInfo;
    //     deleteOrder(orderId)
    //         .then(status=>this.setState())
    // }





    render() {
        return (
            <div>
                <div className="container">
                    <div className="row wrapper">
                        <div className="col-lg-2 col-sm-2 col-xs-12 sidebar d-none d-sm-block">
                            <div className="back-to-home">
                                <a href="">
                                    <Link to='/' style={{ color: '#808080' }}>
                                        <i className="fa fa-chevron-left mr-2"></i>
                                        Home
                                    </Link>
                                </a>
                            </div>
                            <h1 className="title">My Account</h1>
                            <ul className="" >
                                <li className="">
                                    <Link to='/profile' style={{ color: '#808080' }}>
                                        <i className="fa fa-id-card profile-icon" aria-hidden="true"></i>
                                        My Information
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to='/orders' style={{ color: '#808080' }}><i className="fa fa-shopping-bag order-icon" aria-hidden="true"></i> My Order</Link>
                                </li>
                                <li className="">
                                    <Link to='/favorites' style={{ color: '#808080' }}>
                                        <i className="fa fa-heart-o favorite-icon" aria-hidden="true"></i>
                                        My Favorites
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to='/favorites' style={{ color: '#808080' }}>
                                        <i className="fa fa-user favorite-icon" aria-hidden="true"></i>
                                        My Following
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to='/' onClick={this.logout} style={{ color: '#808080' }}>
                                        <i className="fa fa-sign-out logout-icon" aria-hidden="true"></i>
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <nav className="navbar d-flex justify-content-center col-sm-12 d-block d-sm-none">
                            <a className="navbar-brand" href="/" title="">
                                Home
                            </a>
                            <a className="navbar-brand" href="/profile">
                                <i className="fa fa-id-card profile-icon" aria-hidden="true"></i>
                                {/*My Information*/}
                            </a>
                            <a className="navbar-brand" href="/orders">
                                <i className="fa fa-shopping-bag order-icon" aria-hidden="true"></i>
                                {/*My Orders*/}
                            </a>
                            <a className="navbar-brand" href="/favorites">
                                <i className="fa fa-heart-o favorite-icon" aria-hidden="true"></i>
                                {/*My Favorites*/}
                            </a>
                            <a className="navbar-brand" href="/following">
                                <i className="fa fa-user favorite-icon" aria-hidden="true"></i>
                                {/*My Following*/}
                            </a>
                        </nav>

                        <form className="col-lg-10 col-md-9 col-sm-8 order-content">
                            <h3 className="order-title">My Order History</h3>
                            {/*{console.log(this.state.userInfo.orders)}*/}
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
                                                <div style={{marginBottom: "10px"}}>
                                                        <i className="fa fa-cube" aria-hidden="true" style={{paddingRight: "5px"}}></i>
                                                        Order Number: {order._id}

                                                </div>

                                                <div className="order-detail">
                                                    <ul className="list-group">
                                                        {/*<li className="order-time">*/}
                                                        {/*    Order Date: {order.date}*/}
                                                        {/*</li>*/}
                                                        {order.recipes.map(recipe =>
                                                            <div>
                                                                <li className="">
                                                                    <span className="recipe-name">
                                                                        Name : {recipe.title}

                                                                    </span>
                                                                    <span className="pull-right recipe-count">
                                                                        X 1
                                                                    </span>

                                                                </li>

                                                            </div>
                                                        )}
                                                        {/*<br/>*/}
                                                        {/*<br/>*/}
                                                        {/*<div className="col-8 order-address">*/}
                                                        {/*    <div>Pick up information</div>*/}
                                                        {/*    <p>1005 Main St APT123 </p>*/}
                                                        {/*</div>*/}

                                                    </ul>
                                                </div>
                                                <div>
                                                    <button className="btn btn-danger btn-block"
                                                            onClick={() => this.deleteOrder(order._id)}
                                                            style={{marginTop: "10px"}}>
                                                        Delete Order
                                                    </button>
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
