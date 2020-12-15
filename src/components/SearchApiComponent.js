import React from "react";
import {NavBarComponent} from "./NavBarComponent";
import {findRecipesByTitle} from "../services/recipeService";
import history from "./history";
import "../css/Home.css"

export default class SearchApiComponent extends React.Component {

    state = {
        results: [],
        totalResults: 0,
        searchedTitle: '',
    }

    componentDidMount() {
        // const params = new URLSearchParams(this.props.location.search)
        // const query = params.get('query')

        const queryString = require('query-string')
        const parsed = queryString.parse(this.props.location.search)
        const keyword = parsed.criteria
        if(keyword){
            findRecipesByTitle(keyword)
                .then(response => {
                    this.setState({
                        results: response.results,
                        totalResults: response.totalResults,
                        searchedTitle:keyword
                    })
                })
        }
    }

    searchRecipesByTitle = (title) => {
        findRecipesByTitle(title)
            .then(response => {
                this.setState({
                    results: response.results,
                    totalResults: response.totalResults,
                })
            })
        const criteria = this.state.searchedTitle
        history.push({
            pathname: '/search/api?criteria=' + criteria,
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-2 col-sm-2 col-xs-12">
                        <NavBarComponent
                            page="home"
                            userId={this.props.userId}
                            user={this.props.userInfo}/>
                    </div>

                    <div className="hero-full-wrapper col-lg-10 col-sm-10 col-xs-12" style={{marginTop: "25px"}}>
                        <nav className="navbar navbar-light bg-light">
                            <div className="container-fluid">
                                <a className="navbar-brand">Spoonacular Food API</a>
                                <input className="form-control me-2" type="search" placeholder="Search"
                                       aria-label="Search" onChange={(event) => {
                                    this.setState({searchedTitle: event.target.value})
                                }}/>
                                <button className="btn btn-outline-success" type="submit"
                                        onClick={() => this.searchRecipesByTitle(this.state.searchedTitle)}>
                                    Search
                                </button>
                            </div>
                        </nav>

                        <div className="grid row">
                            {
                                this.state.results.map(recipe =>
                                    <div className="grid-item col-lg-4 col-md-6 col-sm-12" key={recipe._id}>
                                        <img style={{height: "35vh", objectFit: "cover", width: "100%"}}
                                             className="img-responsive" alt="" src={recipe.image}/>
                                        <a href={"/details/api/" + recipe.id} className="project-description">
                                            <div className="project-text-holder">
                                                <div className="project-text-inner">
                                                    <h3>{recipe.title}</h3>
                                                    <p>Discover more</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}




