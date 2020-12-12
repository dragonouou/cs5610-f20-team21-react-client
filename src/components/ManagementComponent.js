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

class ManagementComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        // USER 1
        userId: '',
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

    register = () => {
        const newUser = {
            username: document.getElementById("username").value,
            firstname: document.getElementById("firstname").value,
            lastname: document.getElementById("lastname").value,
            email: document.getElementById("email").value,
            password: document.getElementById("pw").value,
            phoneNumber: document.getElementById("phonenumber").value,
            address: document.getElementById("address").value,
            role: document.getElementById("role").value,
        }
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
            .then(currentUser => {
                if (currentUser.length !== 0) {
                    this.setState({userInfo:currentUser[0],userId:currentUser[0]._id})
                    history.push("/profile")
                }
            })
    }


    render() {
        return (
            <BrowserRouter>
                <Router history={history}>
                <Route path="/search/api" exact>
                    <WikiComponent/>
                </Route>
                <Route path="/search/api/:recipeId" component={SearchDetailComponent} exact/>
                <Route path="/" exact>
                    <HomeComponent
                        userId={this.state.userId}
                        userInfo={this.state.userInfo}/>
                </Route>
                <Route path="/search" exact>
                    <SearchComponent
                        userId={this.state.userId}
                        userInfo={this.state.userInfo}/>
                </Route>
                <Route path="/detail/:recipeId"
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
                <Route path="/profile/:userId" exact>
                    <UserProfileCardComponent
                        userId={this.state.userId}
                        userInfo={this.state.userInfo}/>
                </Route>
                <Route path="/profile" exact>
                    <ProfileComponent
                        userId={this.state.userId}
                        userInfo={this.state.userInfo}/>
                </Route>
                    <Route path="/profile-created">
                        <Redirect to="/profile"/>
                    </Route>
                <Route path="/orders" exact>
                    <OrderHistoryComponent
                        userId={this.state.userId}
                        userInfo={this.state.userInfo}/>
                </Route>
                <Route path="/orders/:orderId" exact>
                    <OrderDetailComponent
                        userId={this.state.userId}
                        userInfo={this.state.userInfo}/>
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
