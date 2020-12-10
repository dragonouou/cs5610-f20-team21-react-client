import React from "react";
import "../css/Home.css";
import {NavBarComponent} from "./NavBarComponent";
// import {findRecipeById, findSummaryById} from "../services/recipeService";
import { Markup } from 'interweave';
import {findRecipeById} from "../services/recipeDatabaseService";
import {findUserById, findUserByIdSimple, updateUser} from "../services/UserService";

export class DetailComponent extends React.Component {

    state = {
        recipeId: '',
        summary: '',
        recipe: {},
        chef: {},
        userId: "5fc9cde5d839e57c51ef3b4c",
        userInfo: {favorites: []}
    }

    componentDidMount() {
        const recipeId = this.props.match.params.recipeId
        this.setState({recipeId: recipeId})
        // findSummaryById(recipeId)
        //     .then(recipe => this.setState({summary:recipe.summary}))
        // findRecipeById(recipeId)
        //     .then(recipe => this.setState({recipe:recipe}))

        findRecipeById(recipeId)
            .then(recipe => {this.setState({recipe:recipe})})

        findUserByIdSimple(this.state.userId)
            .then(user => {this.setState({userInfo : user})})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // if (this.state.recipe) {
        //     findUserById(this.state.recipe.chefId)
        //         .then(chef => this.setState({chef: chef}))
        // }
    }

    favorite = (recipeId) => {
        const oldUser = this.state.userInfo;
        const newUser = {
            ...oldUser,
            favorites: [
                ...oldUser.favorites,
                recipeId
            ]
        }
        updateUser(this.state.userId, newUser)
            .then(newUser => {
                this.setState({userInfo : newUser})
            })
    }

    render() {
        return (
            <div className="row">
                <div className="col-2">
                    <NavBarComponent />
                </div>

                <div className="hero-full-wrapper col-10" style={{paddingRight: "5vw", marginTop: "1vh"}}>
                    <h2>{this.state.recipe.title}</h2>
                    <img src={this.state.recipe.img} alt=""/>
                    <h2 style={{marginTop: "5vh", fontSize: "20px"}}>Summary</h2>
                    <div>
                        <Markup content={this.state.recipe.summary}/>
                    </div>
                    <h2 style={{marginTop: "5vh", fontSize: "20px"}}>Chef Information</h2>
                    <div>
                        <a href={"/profile/" + this.state.chef.username}>{this.state.chef.username}</a>
                    </div>

                    <br style={{marginTop: "5vh"}}/>
                    <button className="btn btn-success">
                        Add to cart
                    </button>
                    <br/>
                    <button style={{marginTop: "1vh"}} className="btn btn-info" onClick={() => this.favorite(this.state.recipeId)}>
                        favorite
                    </button>
                </div>
            </div>

        )
    }
}
