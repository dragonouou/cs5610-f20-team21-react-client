import React from "react";
import "../css/Home.css";
import {NavBarComponent} from "./NavBarComponent";
import {findRecipeById} from "../services/recipeService";
import { Markup } from 'interweave';

export class SearchDetailComponent extends React.Component {


    state = {
        recipe:'',
        summary:''
    }

    componentDidMount() {
        const recipeId = this.props.match.params.recipeId

        findRecipeById(recipeId)
            .then(recipe => this.setState({recipe:recipe}))
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
                </div>
            </div>

        )
    }
}
