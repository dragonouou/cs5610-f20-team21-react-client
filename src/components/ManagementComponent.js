import {BrowserRouter, Route} from "react-router-dom";
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
import {findUserById, updateUser, createUser, register, profile} from "../services/UserService"
import OrderDetailComponent from "./OrderDetailComponent";

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
        //             console.log(user)
        //             this.setState({
        //                 userId: '5fc9cde5d839e57c51ef3b4c',
        //                 userInfo: user
        //             })
        //         })
        // }

        // TO FETCH THE USER FROM THE SESSION
        // profile()
        //     .then(profile => this.setState({
        //         userInfo: profile
        //     }))
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
                console.log(this.state.userId)
                console.log(this.state.userInfo)
            })
    }

    render() {
        return (
            <BrowserRouter>
                <Route path="/wiki" exact>
                    <WikiComponent/>
                </Route>
                <Route path="/search/:recipeId" component={DetailComponent} exact/>
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
                <Route path="/detail" exact>
                    <DetailComponent
                        userId={this.state.userId}
                        userInfo={this.state.userInfo}/>
                </Route>
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
                        userInfo={this.state.userInfo}/>
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
                <Route path="/orders" exact>
                    <OrderDetailComponent
                        userId={this.state.userId}
                        userInfo={this.state.userInfo}/>
                </Route>
                {/*<Route path="/orders/:orderId" exact>*/}
                {/*    <OrderDetailComponent*/}
                {/*        userId={this.state.userId}*/}
                {/*        userInfo={this.state.userInfo}/>*/}
                {/*</Route>*/}
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
            </BrowserRouter>
        )
    }
}

export default ManagementComponent;
