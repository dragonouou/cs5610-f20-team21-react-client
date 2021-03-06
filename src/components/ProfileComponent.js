import React from "react";
import "../css/ProfileComponent.css"
import {Link} from "react-router-dom";
import history from "./history";
import {findUserByIdSimple, logout, profile, updateUser} from "../services/UserService";


class ProfileComponent extends React.Component{

    state = {
        // USER 1
        userId: '',
        // CHEF 1
        // userId: '5fc9dcf17ecf2884edd15894',
        userInfo: {
            username: ''
        }
    }

    componentDidMount() {

        // TO TEST THE GIVEN USER
        // if (this.state.userId) {
        //     findUserById(this.state.userId)
        //         .then(user => {
        //             this.setState({
        //                 userInfo: user
        //             })
        //         })
        // }

        // TO FETCH THE USER FROM THE SESSION
        profile()
            .then(profile => {
                if (Array.isArray(profile)) {
                    if (profile.length !== 0) {
                        this.setState({
                            // userInfo: profile[0],
                            userId: profile[0]._id
                        })

                        findUserByIdSimple(profile[0]._id)
                            .then(user => {this.setState({userInfo:user})})
                    }
                } else {
                    this.setState({
                        // userInfo: profile,
                        userId: profile._id
                    })

                    findUserByIdSimple(profile._id)
                        .then(user => {this.setState({userInfo:user})})
                }
            })

    }

    logout = () => {
        logout()
            .then(status => {
                this.setState({userInfo:{},userId:''})
                history.push("/")
            })
    }


    render() {
        return (
            <div>

                <div className="container" >

                    {/*<div className="navbar navbar-default visible-xs hidden-lg top-bar">*/}
                    {/*    <a href="/" className="navbar-brand">Home</a>*/}
                    {/*    <a href="/profile" className="navbar-brand">My Information</a>*/}
                    {/*    <a href="/favorites" className="navbar-brand">My Favorites</a>*/}
                    {/*    <a href="/following" className="navbar-brand">My Following</a>*/}
                    {/*</div>*/}

                    <div className="row wrapper">
                        <div className="col-lg-2 col-sm-2 col-xs-12  sidebar inner  d-none d-sm-block" >
                            <div className="back-to-home ">
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
                                    <Link to='/profile' style={{ color: '#808080' }}>
                                        <i className="fa fa-id-card profile-icon" aria-hidden="true"></i>
                                        My Information
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to='/orders' style={{ color: '#808080' }}>
                                        <i className="fa fa-shopping-bag order-icon" aria-hidden="true">

                                        </i> My Order
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to='/favorites' style={{ color: '#808080' }}>
                                        <i className="fa fa-heart-o favorite-icon" aria-hidden="true"></i>
                                        My Favorites
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to='/following' style={{ color: '#808080' }}>
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

                        <nav className="navbar d-block d-sm-none">
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

                        <form className="col-lg-10 col-md-9 col-sm-8 profile-content">
                            <h1 className="profile-title">My Profile</h1>
                            <div className="form-group">
                                <div className="col-sm-10">
                                    {
                                        this.state.userInfo.role === "customer" &&
                                        <button
                                            className="btn col-12 btn-info">
                                            <i className="fa fa-user info-icon" aria-hidden="true"></i>
                                            Information
                                        </button>
                                    }
                                    {
                                        this.state.userInfo.role === "chef" &&
                                        <Link to={`/profile/${this.state.userId}`}>
                                            <button
                                                className="btn col-12 btn-info">
                                                <i className="fa fa-user info-icon" aria-hidden="true"></i>
                                                Enter Your Profile
                                            </button>

                                        </Link>
                                    }


                                </div>
                                <label htmlFor="usernameFld" className="col-sm-2 col-form-label">
                                    Username
                                </label>
                                <div className="col-sm-10">
                                    <input className="form-control"
                                           type="text"
                                           id="usernameFld"
                                           placeholder="username"
                                           value={this.state.userInfo.username}
                                           onChange={(event) => {
                                               const newUser = {
                                                   ...this.state.userInfo,
                                                   username: event.target.value
                                               }
                                               this.setState({...this.state,userInfo:newUser})
                                           }}/>
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
                                           value={this.state.userInfo.firstname}
                                            onChange={(event) =>{
                                                const newUser ={
                                                    ...this.state.userInfo,
                                                    firstname:event.target.value
                                                }
                                                this.setState({...this.state,userInfo:newUser})
                                            }}
                                    />
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
                                           value={this.state.userInfo.lastname}
                                           onChange={(event) =>{
                                               const newUser ={
                                                   ...this.state.userInfo,
                                                   lastname:event.target.value
                                               }
                                               this.setState({...this.state,userInfo:newUser})
                                           }}
                                    />
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
                                           value={this.state.userInfo.email} readOnly/>
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
                                           value={this.state.userInfo.phoneNumber}
                                           onChange={(event) =>{
                                               const newUser ={
                                                   ...this.state.userInfo,
                                                   phoneNumber:event.target.value
                                               }
                                               this.setState({...this.state,userInfo:newUser})
                                           }}/>
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
                                           placeholder="Your Address"
                                           value={this.state.userInfo.address}
                                           onChange={(event) =>{
                                               const newUser ={
                                                   ...this.state.userInfo,
                                                   address:event.target.value
                                               }
                                               this.setState({...this.state,userInfo:newUser})
                                           }}/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="aboutFld"className="col-sm-2 col-form-label">
                                    About Me
                                </label>
                                <div className="col-sm-10">
                                    <input type="text"
                                           className="form-control"
                                           id="aboutFld"
                                           placeholder="Write something about you"
                                           value={this.state.userInfo.aboutMe}
                                           onChange={(event) =>{
                                               const newUser ={
                                                   ...this.state.userInfo,
                                                   aboutMe:event.target.value
                                               }
                                               this.setState({...this.state,userInfo:newUser})
                                           }}/>
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
                                           value={this.state.userInfo.role} readOnly/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-2 col-form-label"></label>
                                <div className="col-sm-10">
                                    {/*<button className="btn col-6 btn-light">*/}
                                    {/*    Cancel*/}
                                    {/*</button>*/}
                                    <button className="btn col-12 btn-info"
                                            id="logoutBtn"
                                            onClick={()=>{
                                               updateUser(this.state.userId,this.state.userInfo)
                                            }}>
                                        Save
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>

                </div>
            </div>

        )
    }
}

export default ProfileComponent;
