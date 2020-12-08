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
import {findUserById, updateUser, createUser} from "../services/UserService"
import OrderDetailComponent from "./OrderDetailComponent";

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
                        userInfo={this.state.userInfo}/>
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
            </BrowserRouter>
        )
    }
}

export default ManagementComponent;
