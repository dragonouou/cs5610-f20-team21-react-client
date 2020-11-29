import React from "react";
import "../css/Home.css";
import {NavBarComponent} from "./NavBarComponent";
import {findRecipeById, findSummaryById} from "../services/recipeService";
import { Markup } from 'interweave';

export class DetailComponent extends React.Component {

    // summary = 'Need a <b>pescatarian main course</b>? Pasta With Tuna could be a spectacular recipe to try.\n' +
    //     '                        One serving contains <b>421 calories</b>, <b>24g of protein</b>, and <b>10g of fat</b>.\n' +
    //     '                        This recipe serves 4. For <b>$1.68 per serving</b>, this recipe <b>covers 28%</b> of your daily\n' +
    //     '                        requirements of vitamins and minerals. If you have pasta, green onions, parmesan cheese, and a\n' +
    //     '                        few other ingredients on hand, you can make it. Not a lot of people made this recipe, and 2 would\n' +
    //     '                        say it hit the spot. It is brought to you by Foodista. From preparation to the plate, this recipe\n' +
    //     '                        takes about <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular\n' +
    //     '                        score of 91%</b>. This score is great. Similar recipes are <a href="https://spoonacular.com/recipes/pasta-and-tuna-salad-ensalada-de-pasta-y-atn-226303\\">\n' +
    //     '                        Pastan and Tuna Salad (Ensalada de Pasta y Atún)</a>, <a href="https://spoonacular.com/recipes/tuna-pasta-89135\\">\n' +
    //     '                        Tuna Pasta</a>, and <a href="https://spoonacular.com/recipes/pasta-with-tuna-1402621\\">Pasta With Tuna</a>.'
    //
    // trimSummary = (summary) => {
    //     sum = summary.split(" ")
    //
    // }

    state = {
        recipe:'',
        summary:''
    }

    componentDidMount() {
        const recipeId = this.props.match.params.recipeId
        // findSummaryById(recipeId)
        //     .then(recipe => this.setState({summary:recipe.summary}))
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
