import React from "react";
import {NavBarComponent} from "./NavBarComponent";
import {SearchResultComponent} from "./SearchResultComponent";

export default class WikiComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-2 col-sm-2 col-xs-12">
                        <NavBarComponent
                            page="searchApi"
                            userId={this.props.userId}
                            user={this.props.userInfo}/>
                    </div>

                    <div className="container">
                        <div className="col-lg-10 col-sm-10 col-xs-12">
                            <h1>PROTOTYPE</h1>
                            <h1>spoonacular Recipe API</h1>
                            <h3>Search Criteria</h3>
                            <p>The (natural language) recipe search query,
                                return the recipes whose titles contains the keyword.</p>
                            <h3>Process</h3>
                            <p>1.find recipes by title throught api GET https://api.spoonacular.com/recipes/complexSearch;
                                <br/>2.clicking on one of the items will query the API for more detailed information about one recipe
                                through api GET https://api.spoonacular.com/recipes/{'{id}'}/information.</p>
                            <h3>Summary result</h3>
                            <p>the result of step1 includes a list of recipe results, totalResults(how many recipes meet the search
                                criteria), number(only 2 results showed due to limited query times of free version).
                                <br/>
                                the result of step2 includes title,image and a brief summary.
                            </p>
                            <h3>Detailed result</h3>
                            <p>each recipe contains title, image, summary.</p>
                            <h3>Example</h3>
                            <p>For example: search for pasta, it will return a list of 2 results: "pasta with tuna" and
                                "pasta Margherita". clicking each of them directs to the detailed page which contains the
                                title, image and summay.</p>
                            <SearchResultComponent/>
                        </div>
                    </div>


                </div>
            </div>
            )

    }
}
