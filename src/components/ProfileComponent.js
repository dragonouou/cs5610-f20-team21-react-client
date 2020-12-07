import React from "react";
import "./ProfileComponent.css"
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import OrderDetailComponent from "./OrderDetailComponent";
import {NavBarComponent} from "./NavBarComponent";


class ProfileComponent extends React.Component{
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
                                           value="teddyBear33" readOnly/>
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
                                           value="Teddy"/>
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
                                           value="Bear"/>
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
                                           value="teddybear@kitcken.com"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="phoneFld" className="col-sm-2 col-form-label">
                                    Phone
                                </label>
                                <div className="col-sm-10">
                                    <input type="text"
                                           className="form-control"
                                           id="phoneFld"
                                           placeholder="000-000-0000"
                                           value="321-456-7777"/>
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
                                           value="Client" readOnly/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-2 col-form-label"></label>
                                <div className="col-sm-10">
                                    <button className="btn col-6 btn-light">
                                        Cancel
                                    </button>

                                    <button href="" className="btn col-6 btn-info"
                                       id="logoutBtn">
                                        Save
                                    </button>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-10">
                                    <button
                                        className="btn col-12 btn-info"
                                        onClick={() => this.setState({ open: !open })}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open}>
                                        <i className="fa fa-home home-icon" aria-hidden="true"></i>
                                        Address
                                    </button>
                                </div>
                                <collapse in={this.state.open}>
                                    <div id="example-collapse-text">
                                        <div>
                                            <label htmlFor="addressFld"className="col-sm-2 col-form-label">
                                                Address1
                                            </label>
                                            <div className="col-sm-10">
                                                <input type="text"
                                                       className="form-control"
                                                       id="addressFld"
                                                       value="6650 North Stree..."/>
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="addressFld"className="col-sm-2 col-form-label">
                                                Address2
                                            </label>
                                            <div className="col-sm-10">
                                                <input type="text"
                                                       className="form-control"
                                                       id="addressFld"
                                                       value="#APT"/>
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="addressFld"className="col-sm-2 col-form-label">
                                                Zip Code
                                            </label>
                                            <div className="col-sm-10">
                                                <input type="text"
                                                       className="form-control"
                                                       id="addressFld"
                                                       value="808080"/>
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="addressFld"className="col-sm-2 col-form-label">
                                                City
                                            </label>
                                            <div className="col-sm-10">
                                                <input type="text"
                                                       className="form-control"
                                                       id="addressFld"
                                                       value="New York City"/>
                                            </div>
                                        </div>
                                    </div>
                                </collapse>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        )
    }
}

export default ProfileComponent;
