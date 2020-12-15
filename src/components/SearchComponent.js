import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../css/main.82cfd66e.css';
import {NavBarComponent} from "./NavBarComponent";
import {searchRecipe} from "../services/recipeDatabaseService";

export class SearchComponent extends React.Component {

    state = {
        recipes : [],
        criteria: ''
    }

    // recipes = [
        // {
        //     title: "Malaysian Rice",
        //     img: "https://img.theculturetrip.com/768x432/wp-content/uploads/2018/08/shutterstock_648976399.jpg"
        // },
        // {
        //     title: "Cajun Fried Combination",
        //     img:"https://www.louisianatravel.com/sites/default/files/legacy_images/crawfish%20town-friedseafood.jpeg"
        // },
        // {
        //     title: "Ice Cream Cup",
        //     img:"https://images.immediate.co.uk/production/volatile/sites/2/2018/10/olive_Cheesecakes-f005ffb.jpg?quality=90&resize=768%2C574"
        // },
        // {
        //     title: "Side Dishes",
        //     img:"https://glorias.imgix.net/menu/ceviche-trio-1.jpg"
        // },
        // {
        //     title: "Steak with Vegetable",
        //     img:"https://tastesbetterfromscratch.com/wp-content/uploads/2020/07/How-to-Grill-Steak-6.jpg"
        // },
        // {
        //     title: "Cheese Cake",
        //     img:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-sugar-free-cheesecake-1581456006.jpg?crop=0.505xw:1.00xh;0.248xw,0&resize=640:*"
        // },
        // {
        //     title: "Shrimp Cocktail",
        //     img:"https://paleoleap.com/pictures/2/re-re/large/shrimp-cocktail-main-large.jpg"
        // },
        // {
        //     title: "Salad",
        //     img:"https://thecozycook.com/wp-content/uploads/2014/03/Chef-Salad-Recipe-500x500.jpg"
        // },
        // {
        //     title: "Grilled Squid",
        //     img: "https://i3.ypcdn.com/blob/bf984ca7f1bfefdd9a03a656e21f2cf413dde5e5"
        // },
        // {
        //     title: "Sushi",
        //     img: "https://www.justonecookbook.com/wp-content/uploads/2020/06/Dragon-Roll-0286-I-500x375.jpg"
        // }
    // ]

    search = (criteria) => {
        searchRecipe(criteria)
            .then(recipes => this.setState({recipes : recipes}))
    }

    render() {
        return (
            <div className="row">
                <div className="col-2">
                    <NavBarComponent
                        page="search"
                        userId={this.props.userId}
                        user={this.props.userInfo}/>
                </div>

                <div className="hero-full-wrapper col-10" style={{paddingLeft: "0px"}}>
                    <div className="grid row">
                        {/*<div className="gutter-sizer"></div>*/}
                        {/*<div className="grid-sizer"></div>*/}

                        <input type="text"
                               className="input-group"
                               style={{height: "50px", marginTop: "50px", marginBottom: "15px", display: "inline"}}
                               placeholder="  Search"
                               value={this.state.criteria}
                               onChange={(e) => {
                                   this.setState(prevState => ({
                                       criteria: e.target.value
                                   }))
                               }}
                        />
                        <button className="btn btn-info btn-block"
                                style={{display: "inline", height: "50px", marginBottom: "25x"}}
                                onClick={() => this.search(this.state.criteria)}>
                            Submit
                        </button>
                        {
                            this.state.recipes.map(recipe =>
                                <div className="grid-item col-lg-4 col-md-6 col-sm-12" key={recipe._id}>
                                    <img style={{height: "35vh", objectFit: "cover", width: "100%"}}
                                         className="img-responsive" alt="" src={recipe.img}/>
                                    <a href={"/detail/" + recipe._id} className="project-description">
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
        )
    }
}
