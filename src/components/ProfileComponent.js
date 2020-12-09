import React from "react";
import "./ProfileComponent.css"
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import OrderHistoryComponent from "./OrderHistoryComponent";
import {NavBarComponent} from "./NavBarComponent";


class ProfileComponent extends React.Component{

    componentDidMount() {

    }

    render() {
        return (
            <div>

                <div className="container" >
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

                        <form className="col-8 profile-content">
                            <h3 className="profile-title">My Profile</h3>
                            <div className="form-group">
                                <div className="col-sm-10">
                                <button
                                    className="btn col-12 btn-info">
                                    <i className="fa fa-user info-icon" aria-hidden="true"></i>
                                    Information
                                </button>
                                </div>
                                <label htmlFor="usernameFld" className="col-sm-2 col-form-label">
                                    Username
                                </label>
                                <div className="col-sm-10">
                                    <input className="form-control"
                                           type="text"
                                           id="usernameFld"
                                           placeholder="username"
                                           value={this.props.userInfo.username} readOnly/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="firstnameFld" className="col-sm-2 col-form-label">
                                    First Name
                                </label>
                                <div className="col-sm-10">
                                    <input className="form-control"
                                           type="text"
                                           id="firstFld"
                                           placeholder="firstname"
                                           value={this.props.userInfo.firstname}/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="firstnameFld" className="col-sm-2 col-form-label">
                                    Last Name
                                </label>
                                <div className="col-sm-10">
                                    <input className="form-control"
                                           type="text"
                                           id="firstFld"
                                           placeholder="lastname"
                                           value={this.props.userInfo.lastname}/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="emailFld" className="col-sm-2 col-form-label">
                                    Email
                                </label>
                                <div className="col-sm-10">
                                    <input type="text"
                                           className="form-control"
                                           id="emailFld"
                                           placeholder="teddybear@kitcken.com"
                                           value={this.props.userInfo.email}/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="phoneFld" className="col-sm-2 col-form-label">
                                    Phone
                                </label>
                                <div className="col-sm-10">
                                    <input type="number"
                                           className="form-control"
                                           id="phoneFld"
                                           placeholder="000-000-0000"
                                           value={this.props.userInfo.phoneNumber}/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="addressFld"className="col-sm-2 col-form-label">
                                    Address
                                </label>
                                <div className="col-sm-10">
                                    <input type="text"
                                           className="form-control"
                                           id="addressFld"
                                           value={this.props.userInfo.address}/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="roleFld" className="col-sm-2 col-form-label">
                                    Role
                                </label>
                                <div className="col-sm-10">
                                    <input className="form-control"
                                           type="text"
                                           id="roleFld"
                                           placeholder="Role"
                                           value={this.props.userInfo.role} readOnly/>
                                </div>
                            </div>

                            {/*<div className="form-group">*/}
                            {/*    <label className="col-sm-2 col-form-label"></label>*/}
                            {/*    <div className="col-sm-10">*/}
                            {/*        <button className="btn col-6 btn-light">*/}
                            {/*            Cancel*/}
                            {/*        </button>*/}

                            {/*        <button href="" className="btn col-6 btn-info"*/}
                            {/*           id="logoutBtn">*/}
                            {/*            Save*/}
                            {/*        </button>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                        </form>
                    </div>

                </div>
            </div>

        )
    }
}

export default ProfileComponent;
