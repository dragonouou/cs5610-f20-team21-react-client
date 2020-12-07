import {BrowserRouter, Route} from "react-router-dom";
import WikiComponent from "./WikiComponent";
import {DetailComponent} from "./DetailComponent";
import {HomeComponent} from "./HomeComponent";
import {SearchComponent} from "./SearchComponent";
import {AboutComponent} from "./AboutComponent";
import {PolicyComponent} from "./PolicyComponent";
import {LoginComponent} from "./LoginComponent";
import {RegisterComponent} from "./RegisterComponent";
import ProfileBuyerComponent from "./ProfileBuyerComponent";
import MyProfileComponent from "./MyProfileComponent";
import OrderDetailComponent from "./OrderDetailComponent";
import AccountFavoriteComponent from "./AccountFavoriteComponent";
import CartComponent from "./CartComponent";
import React from "react";
import {findUserById, updateUser, createUser} from "../services/UserService"

class ManagementComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        // USER 1
        userId: '5fc9cde5d839e57c51ef3b4c',
        // CHEF 1
        // userId: '5fc9dcf17ecf2884edd15894',
        userInfo: []
    }

    componentDidMount() {
        if (this.state.userId) {
            findUserById(this.state.userId)
                .then(user => {
                    this.setState({
                        userInfo: user
                    })
                })
        }
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
                        userId={this.state.userId}/>
                </Route>
                <Route path="/search" exact>
                    <SearchComponent
                        userId={this.state.userId}/>
                </Route>
                <Route path="/detail" exact>
                    <DetailComponent
                        userId={this.state.userId}/>
                </Route>
                <Route path="/about" exact>
                    <AboutComponent
                        userId={this.state.userId}/>
                </Route>
                <Route path="/policy" exact>
                    <PolicyComponent
                        userId={this.state.userId}/>
                </Route>
                <Route path="/login" exact>
                    <LoginComponent
                        userId={this.state.userId}/>
                </Route>
                <Route path="/register" exact>
                    <RegisterComponent
                        userId={this.state.userId}/>
                </Route>
                <Route path="/profile" exact>
                    <ProfileBuyerComponent
                        userId={this.state.userId}/>
                </Route>
                <Route path="/myprofile" exact>
                    <MyProfileComponent
                        userId={this.state.userId}/>
                </Route>
                <Route path="/myinformation" exact>
                    <ProfileBuyerComponent
                        userId={this.state.userId}/>
                </Route>
                <Route path="/myorders" exact>
                    <OrderDetailComponent
                        userId={this.state.userId}/>
                </Route>
                <Route path="/myfavorites" exact>
                    <AccountFavoriteComponent
                        userId={this.state.userId}/>
                </Route>
                <Route path="/cart" exact>
                    <CartComponent
                        userId={this.state.userId}/>
                </Route>
            </BrowserRouter>
        )
    }
}

export default ManagementComponent;
