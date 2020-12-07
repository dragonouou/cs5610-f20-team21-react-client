import React from "react";
import "./AccountFavoriteComponent.css"
import {Link} from "react-router-dom";
import OrderDetailComponent from "./OrderDetailComponent";
import ProfileCardComponent from "./ProfileCardComponent";


class AccountFavoriteComponent extends React.Component{
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: true,
        };
    }

    render() {
        const { open } = this.state;
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

                        <div className="col-8 favorite-content">
                            <ProfileCardComponent/>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}

export default AccountFavoriteComponent;
