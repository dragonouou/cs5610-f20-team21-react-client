import React from "react";
import {BrowserRouter, Link, Route, Redirect} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Home.css';
import '../css/main.82cfd66e.css';
import {SearchComponent} from "./SearchComponent";
import {DetailComponent} from "./DetailComponent";
import {NavBarComponent} from "./NavBarComponent";
import {findAllRecipes} from "../services/recipeDatabaseService";
import {findUserById, profile} from "../services/UserService";


export class HomeComponent extends React.Component {

    state = {
        recipes: [],
        userInfo: {
            firstname: ""
        },
        userId: "",
        favorites: []
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

    componentDidMount() {
        profile()
            .then(profile => {
                // this.setState({userInfo:profile[0]})

                // if (profile.length !== 0) {
                //     this.setState({userId:profile._id})
                // }
                // console.log(profile)
                if (Array.isArray(profile)) {
                    if (profile.length !== 0) {
                        this.setState({
                            userInfo: profile[0],
                            userId: profile[0]._id
                        })
                    }
                } else {
                    this.setState({
                        userInfo: profile,
                        userId: profile._id
                    })
                }
                // this.setState({favorites:profile[0].favorites})

                // findUserByIdSimple(profile[0].userId)
                //     .then(user => {
                //         console.log(user)
                //         // this.setState({userInfo : user})}
                //     })
            })
        findAllRecipes()
            .then(recipes => this.setState({recipes : recipes}))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // if (this.state.recipes) {
        //     console.log(this.state.recipes)
        // }
        if (this.state.userId) {
            // console.log(this.state.userId)
            findUserById(this.state.userId)
                .then(userInfo => {
                    this.setState({userInfo:userInfo})
                    this.setState({favorites:userInfo.favorites})
                })
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-2">
                    <NavBarComponent
                        page="home"
                        userId={this.props.userId}
                        user={this.props.userInfo}/>
                </div>
                <div className="hero-full-wrapper col-10" style={{marginTop: "25px"}}>
                    <div className="grid row">
                        {/*<div className="gutter-sizer"></div>*/}
                        {/*<div className="grid-sizer"></div>*/}
                        {
                            this.state.userId !== "" &&
                            this.state.favorites.map(favorite =>
                                <div className="grid-item col-4">
                                    <img style={{height: "35vh", objectFit: "cover", width: "100%"}}
                                         className="img-responsive" alt="" src={favorite.img}/>
                                    <a href="/" className="project-description">
                                        <div className="project-text-holder">
                                            <div className="project-text-inner">
                                                <a href={"/detail/" + favorite._id}>
                                                    <h3>{favorite.title}</h3>
                                                    <p>Discover more</p>
                                                </a>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        }
                        {
                            this.state.userId === "" &&
                            this.state.recipes.map(recipe =>
                                <div className="grid-item col-4">
                                    <img style={{height: "35vh", objectFit: "cover", width: "100%"}}
                                         className="img-responsive" alt="" src={recipe.img}/>
                                    <a href="/" className="project-description">
                                        <div className="project-text-holder">
                                            <div className="project-text-inner">
                                                <a href={"/detail/" + recipe._id}>
                                                    <h3>{recipe.title}</h3>
                                                    <p>Discover more</p>
                                                </a>
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
