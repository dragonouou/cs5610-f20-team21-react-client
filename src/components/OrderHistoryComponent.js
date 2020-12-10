import React from "react";
import "./OrderHistoryComponent.css"
import {Link} from "react-router-dom";


class OrderHistoryComponent extends React.Component{

    // userId: '5fc9cde5d839e57c51ef3b4c',
    // userInfo: {"following":["5fc9dcf17ecf2884edd15894"],"favorites":[{"review":["good","excellent"],"_id":"5fc9d695834555ac753d139e","title":"Italian pasta","chefId":"5fc9dcf17ecf2884edd15894","summary":"pasta is delicious"}],"orders":[{"recipes":[{"review":["not good","bad"],"_id":"5fc9d6fe834555ac753d139f","title":"beef","chefId":"5fc9dd5f7ecf2884edd15895","summary":"beef is terrible"}],"_id":"5fc9d781834555ac753d13a0"},{"recipes":[{"review":["good","excellent"],"_id":"5fc9d695834555ac753d139e","title":"Italian pasta","chefId":"5fc9dcf17ecf2884edd15894","summary":"pasta is delicious"}],"_id":"5fc9d79a834555ac753d13a1"}],"_id":"5fc9cde5d839e57c51ef3b4c","username":"user1","firstname":"Alice","lastname":"Cooper","address":"5500 Main St APT1,Boston,MA02148","phoneNumber":6173210062,"role":"Customer","email":"alicecooper@kitchen.com","aboutMe":"Hey, I'm Chef Cooper."}



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
                            {/*{this.props.userInfo.orders.map(order => {console.log(order)})}*/}
                            {this.props.userInfo.orders.map(key => console.log(key))}
                            <div>

                                <ul className="list-group" >
                                    {
                                        this.props.userInfo.orders.map(order =>
                                            <li className="list-group-item">
                                                <Link to={`/orders/${order._id}`}>
                                                    <i className="fa fa-cube order-icon" aria-hidden="true"></i>
                                                    Order Number: {order._id}
                                                </Link>
                                            </li>
                                        )
                                    }
                                    
                                    {/*<li className="list-group-item order-list-item">*/}
                                    {/*    <div className="row">*/}
                                    {/*        <div className="col-6">*/}
                                    {/*            <i className="fa fa-cube order-icon" aria-hidden="true"></i>*/}
                                    {/*            Order1*/}
                                    {/*        </div>*/}
                                    {/*        <div className="col-6 order-number">*/}
                                    {/*            Order Number:1120120012*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</li>*/}
                                    {/*<li className="list-group-item">*/}
                                    {/*    <i className="fa fa-cube order-icon" aria-hidden="true"></i>*/}
                                    {/*    Order2*/}
                                    {/*</li>*/}
                                    {/*<li className="list-group-item">*/}
                                    {/*    <i className="fa fa-cube order-icon" aria-hidden="true"></i>*/}
                                    {/*    Order3*/}
                                    {/*</li>*/}
                                    {/*<li className="list-group-item">*/}
                                    {/*    <i className="fa fa-cube order-icon" aria-hidden="true"></i>*/}
                                    {/*    Order4*/}
                                    {/*</li>*/}
                                    {/*<li className="list-group-item">*/}
                                    {/*    <i className="fa fa-cube order-icon" aria-hidden="true"></i>*/}
                                    {/*    Order5*/}
                                    {/*</li>*/}
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
