import React from "react";
import {findRecipesByTitle} from "../services/recipeService";
import {Link} from "react-router-dom";

export class SearchResultComponent extends React.Component {
    state = {
        searchResults:[],
        totalResults:0,
        searchedTitle:''
    }

    searchRecipesByTitle = (title) =>
        findRecipesByTitle(title)
            .then(response => {
                this.setState({
                    searchResults:response.results,
                    totalResults:response.totalResults
                })
            })

    render() {
        return (
            <div>
                <div>
                    <input placeholder="search" onChange={(event)=>
                    {this.setState({searchedTitle:event.target.value})}}/>
                    <button onClick={() => this.searchRecipesByTitle(this.state.searchedTitle)}>Search</button>
                </div>
                <ul className="list-group">
                    {
                        this.state.searchResults.map(result =>
                            <li className="list-group-item">
                                <Link to={`/search/${result.id}`}>{result.title}</Link>
                            </li> )
                    }
                </ul>
            </div>
        )
    }
}

