import React from "react";
import {findUserById, logout, profile} from "../services/UserService";
import {Link} from "react-router-dom";
import "./AccountFollowingComponent.css"

class AccountFollowingComponent extends React.Component{


    state = {
        // USER 1
        userId: '',
        // CHEF 1
        userInfo: {
            username: '',
            following:[]
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
                                {/*<li className="">*/}
                                {/*    <Link to='/orders'><i className="fa fa-shopping-bag order-icon" aria-hidden="true"></i> My Order</Link>*/}
                                {/*</li>*/}
                                <li className="">
                                    <Link to='/favorites'>
                                        <i className="fa fa-heart-o favorite-icon" aria-hidden="true"></i>
                                        My Favorites
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to='/following'>
                                        <i className="fa fa-user favorite-icon" aria-hidden="true"></i>
                                        My Following
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to='/' onClick={this.logout}>
                                        <i className="fa fa-sign-out logout-icon" aria-hidden="true"></i>
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-8 favorite-content">
                            <h1>Your Following List</h1>
                            <ul className="list-group" >
                                {
                                    this.state.userInfo.following.map(user =>
                                        <li className="list-group-item">
                                            <Link to={`/profile/${user._id}`}>
                                                <i className="fa fa-user-circle order-icon" aria-hidden="true"></i>
                                                {user.username}
                                            </Link>
                                        </li>
                                    )
                                }
                            </ul>

                        </div>
                    </div>

                </div>
            </div>

        )
    }
}

export default AccountFollowingComponent;