import React from "react";
import "../css/Home.css";
import {NavBarComponent} from "./NavBarComponent";
import {findRecipeById} from "../services/recipeService";
import { Markup } from 'interweave';
import {createRecipe} from "../services/recipeDatabaseService";
import {findUserByIdSimple, profile} from "../services/UserService";
import history from "./history";

export class SearchApiDetailComponent extends React.Component {

    state = {
        recipe:'',
        userId:'',
        userInfo:{}
    }

    componentDidMount() {
        const recipeId = this.props.match.params.recipeId
        findRecipeById(recipeId)
            .then(recipe => this.setState({recipe:recipe}))

        profile()
            .then(profile => {
                if (Array.isArray(profile)) {
                    if (profile.length !== 0) {
                        this.setState({
                            // userInfo: profile[0],
                            userId: profile[0]._id
                        })
                        findUserByIdSimple(profile[0]._id)
                            .then(user => this.setState({userInfo : user}))
                    }
                } else {
                    this.setState({
                        // userInfo: profile,
                        userId: profile._id
                    })
                    findUserByIdSimple(profile._id)
                        .then(user => this.setState({userInfo : user}))
                }
            })
    }

    createRecipeForChef = (chefId) => {
        const newRecipe = {
            chefId:chefId,
            summary:this.state.recipe.summary,
            img:this.state.recipe.image,
            title:this.state.recipe.title
        }
        createRecipe(newRecipe)
            .then(actualRecipe => this.setState({recipe:actualRecipe}))
        history.goBack()
    }


    render() {
        return (
            <div className="row">
                <div className="col-2">
                    <NavBarComponent />
                </div>

                <div className="hero-full-wrapper col-10" style={{paddingRight: "5vw", marginTop: "1vh"}}>
                    <h2>{this.state.recipe.title}</h2>
                    <img src={this.state.recipe.image} alt=""/>
                    <h2 style={{marginTop: "5vh", fontSize: "20px"}}>Summary</h2>
                    <div>
                        <Markup content={this.state.recipe.summary}/>
                    </div>
                    <button style={{marginTop: "1vh"}} className="btn btn-info" onClick={() =>
                        this.createRecipeForChef(this.state.userId)}>
                        I can make it!
                    </button>
                </div>
            </div>

        )
    }
}

