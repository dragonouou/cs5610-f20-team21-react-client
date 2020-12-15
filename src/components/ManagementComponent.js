import {BrowserRouter, Router, Route, Redirect} from "react-router-dom";
import WikiComponent from "./WikiComponent";
import {DetailComponent} from "./DetailComponent";
import {HomeComponent} from "./HomeComponent";
import {SearchComponent} from "./SearchComponent";
import {AboutComponent} from "./AboutComponent";
import {PolicyComponent} from "./PolicyComponent";
import {LoginComponent} from "./LoginComponent";
import {RegisterComponent} from "./RegisterComponent";
import ProfileComponent from "./ProfileComponent";
import UserProfileCardComponent from "./UserProfileCardComponent";
import OrderHistoryComponent from "./OrderHistoryComponent";
import AccountFavoriteComponent from "./AccountFavoriteComponent";
import CartComponent from "./CartComponent";
import React from "react";
import {findUserById, updateUser, createUser, register, profile, login, logout} from "../services/UserService"
import OrderDetailComponent from "./OrderDetailComponent";
import history from "./history";
import {SearchDetailComponent} from "./SearchDetailComponent";
import AccountFollowingComponent from "./AccountFollowingComponent";
import SearchApiComponent from "./SearchApiComponent";
import {SearchApiDetailComponent} from "./SearchApiDetailComponent";

class ManagementComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        // USER 1
        // userId: '5fc9cde5d839e57c51ef3b4c',
        // CHEF 1
        // userId: '5fc9dcf17ecf2884edd15894',
        userInfo: {}
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
                // if (profile.length !== 0) {
                //     this.setState({
                //         userInfo: profile,
                //         useId:profile._id
                //     })
                // }
                if (Array.isArray(profile)) {
                    if (profile.length !== 0) {
                        this.setState({
                            userInfo: profile[0],
                            userId: profile[0]._id
                        })
                    }
                }
                else {
                    this.setState({
                        userInfo: profile,
                        userId: profile._id
                    })
                }
            })
    }

    register = (newUser) => {
        // const newUser = {
        //     username: document.getElementById("username").value,
        //     firstname: document.getElementById("firstname").value,
        //     lastname: document.getElementById("lastname").value,
        //     email: document.getElementById("email").value,
        //     password: document.getElementById("pw").value,
        //     phoneNumber: document.getElementById("phonenumber").value,
        //     address: document.getElementById("address").value,
        //     role: document.getElementById("role").value,
        // }
        register(newUser)
            .then(newUser => {
                this.setState({userInfo:newUser,userId:newUser._id})
                history.push("/profile")
            })
    }

    login = () => {
        const user = {
            email: document.getElementById("login-email").value,
            password: document.getElementById("pw").value
        }
        login(user)
            .then(status => {
                if (status.success){
                    this.setState({userInfo:status.userInfo[0],userId:status.userInfo[0]._id})
                    history.push("/profile")
                }else{
                    alert(status.msg)
                }
                // if (currentUser.length !== 0) {
                //     this.setState({userInfo:currentUser[0],userId:currentUser[0]._id})
                //     history.push("/profile")
                // }
            })
    }


    render() {
        return (
            <BrowserRouter>
                <Router history={history}>
                <Route path={["/search/api","/search/api?criteria=:query"]} exact component={SearchApiComponent}/>
                <Route path="/details/api/:recipeId" component={SearchApiDetailComponent} exact/>
                <Route path="/" exact>
                    <HomeComponent
                        userId={this.state.userId}
                        userInfo={this.state.userInfo}/>
                </Route>
                <Route path={["/search","/search?criteria=:query"]} exact component={SearchComponent}/>
                <Route path="/details/:recipeId"
                       component={DetailComponent}
                       exact/>
                {/*<Route path="/detail/:recipeId" exact>*/}
                {/*    <DetailComponent*/}
                {/*        userId={this.state.userId}*/}
                {/*        userInfo={this.state.userInfo}*/}
                {/*        favorite={this.favorite}/>*/}
                {/*</Route>*/}
                <Route path="/about" exact>
                    <AboutComponent
                        userId={this.state.userId}
                        userInfo={this.state.userInfo}/>
                </Route>
                <Route path="/policy" exact>
                    <PolicyComponent
                        userId={this.state.userId}
                        userInfo={this.state.userInfo}/>
                </Route>
                <Route path="/login" exact>
                    <LoginComponent
                        userId={this.state.userId}
                        userInfo={this.state.userInfo}
                        login={this.login}/>
                </Route>
                <Route path="/register" exact>
                    <RegisterComponent
                        userId={this.state.userId}
                        userInfo={this.state.userInfo}
                        register={this.register}/>
                </Route>
                <Route path="/profile/:userId"
                       component={UserProfileCardComponent}
                       exact/>
                <Route path="/profile" exact>
                    <ProfileComponent
                        userId={this.state.userId}
                        userInfo={this.state.userInfo}/>
                </Route>
                    <Route path="/profile-created">
                        <Redirect to="/profile"/>
                    </Route>

                <Route path="/orders" exact>
                    <OrderDetailComponent
                        userId={this.state.userId}
                        userInfo={this.state.userInfo}/>
                </Route>

                <Route path="/following" exact>
                    <AccountFollowingComponent
                        userId={this.state.userId}
                        userInfo={this.state.userInfo}
                    />
                </Route>
                <Route path="/favorites" exact>
                    <AccountFavoriteComponent
                        userId={this.state.userId}
                        userInfo={this.state.userInfo}/>
                </Route>
                <Route path="/cart" exact>
                    <CartComponent
                        userId={this.state.userId}
                        userInfo={this.state.userInfo}/>
                </Route>
                </Router>
            </BrowserRouter>
        )
    }
}

export default ManagementComponent;
