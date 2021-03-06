import React from "react";
import "../css/Home.css";
import {NavBarComponent} from "./NavBarComponent";
import { Markup } from 'interweave';
import history from "./history";
import {deleteRecipe, findRecipeById} from "../services/recipeDatabaseService";
import {findUserById, findUserByIdSimple, profile, updateUser} from "../services/UserService";
import {Link} from "react-router-dom";

export class DetailComponent extends React.Component {

    state = {
        recipeId: '',
        summary: '',
        recipe: {review: []},
        chefId: '',
        chef: {},
        userId: "",
        userInfo: {}
    }

    componentDidMount() {
        const recipeId = this.props.match.params.recipeId
        this.setState({recipeId: recipeId})
        // findSummaryById(recipeId)
        //     .then(recipe => this.setState({summary:recipe.summary}))
        // findRecipeById(recipeId)
        //     .then(recipe => this.setState({recipe:recipe}))

        findRecipeById(recipeId)
            .then(recipe => {
                this.setState({recipe:recipe})
                findUserByIdSimple(recipe.chefId)
                    .then(chef => this.setState({chef: chef}))
            })

        profile()
            .then(profile => {
                // console.log(profile)
                // this.setState({
                //     userId: profile[0]._id
                // })
                // console.log(profile)
                // if (profile.length !== 0) {
                //     this.setState({userInfo:profile})
                //     this.setState({userId:profile.userId})
                // }
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

    componentDidUpdate(prevProps, prevState, snapshot) {
        // findUserByIdSimple(this.state.recipe.chefId)
        //     .then(chef => this.setState({chef: chef}))
        // console.log(this.state.userInfo)
        // findUserByIdSimple(this.state.userId)
        //     .then(user => {
        //         console.log(user)
        //         // this.setState({userInfo : user})}
        //     })
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
        updateUser(this.state.userInfo._id, newUser)
            .then(status => {
                this.setState({userInfo : newUser})
            })
    }

    unfavorite = (recipeId) => {
        const oldUser = this.state.userInfo;
        const newFav = this.state.userInfo.favorites.filter(recipe => recipe !== this.state.recipeId);
        const newUser = {
            ...oldUser,
            favorites: newFav
        }
        // console.log(newUser)
        updateUser(this.state.userInfo._id, newUser)
            .then(status => {
                this.setState({userInfo : newUser})
            })
    }

    tryFavorite = () => {
        alert("Please login!")
    }

    addToCart = (recipeId) => {
        const oldUser = this.state.userInfo;
        const newUser = {
            ...oldUser,
            cart:[
                ...oldUser.cart,
                recipeId
            ]
        }
        updateUser(this.state.userInfo._id, newUser)
            .then(status => {
                this.setState({userInfo : newUser})
            })
    }

    deleteRecipe = (recipeId) =>{
        deleteRecipe(recipeId)
            .then(status => console.log(status))
        history.push("/")
    }

    render() {
        return (
            <div className="row" style={{marginTop:"18px"}}>
                <div className="col-lg-2 col-sm-2 col-xs-12">
                    <NavBarComponent
                        userId={this.props.userId}
                        user={this.props.userInfo}/>
                </div>
                {/*{console.log(this.state.userInfo)}*/}
                <div className="hero-full-wrapper col-lg-10 col-md-10 col-sm-12" style={{paddingRight: "5vw", marginTop: "1vh", width: "100%", paddingLeft: "6vw"}}>
                    <h2>{this.state.recipe.title}</h2>
                    <img src={this.state.recipe.img} alt=""/>
                    {
                        this.state.userId !== "" && this.state.userInfo.role === "customer" &&
                        <div>
                            <Link to="/cart">
                                <button className="btn btn-success" onClick={() => this.addToCart(this.state.recipeId)} style={{marginTop: "1vh"}}>
                                    Add to cart
                                </button>
                            </Link>
                            <br/>
                            {
                                !this.state.userInfo.favorites.includes(this.state.recipeId) &&
                                <button style={{marginTop: "1vh"}} className="btn btn-info" onClick={() => this.favorite(this.state.recipeId)}>
                                    favorite
                                </button>
                            }
                            {
                                this.state.userInfo.favorites.includes(this.state.recipeId) &&
                                <button style={{marginTop: "1vh"}} className="btn btn-dark" onClick={() => this.unfavorite(this.state.recipeId)}>
                                    unfavorite
                                </button>
                            }
                        </div>
                    }
                    {
                        this.state.userId === "" &&
                            <div>
                                <button onClick={this.tryFavorite} className="btn btn-info" style={{marginTop: "1vh"}}>
                                    favorite
                                </button>
                            </div>
                    }
                    {
                        this.state.userId !== "" && this.state.userInfo.role === "chef" &&
                            <div>
                                <button onClick={()=>this.deleteRecipe(this.state.recipeId)} className="btn btn-info" style={{marginTop: "1vh"}}>
                                    Remove it from my recipes
                                </button>
                            </div>
                    }

                    {/*{*/}
                    {/*    this.state.userId !== "" && this.state.userInfo.role === "customer" &&*/}
                    {/*    <div>*/}
                    {/*        {*/}
                    {/*            !this.state.userInfo.orders.includes(this.state.recipeId) &&*/}
                    {/*            <button style={{marginTop: "1vh"}} className="btn btn-info" onClick={() => this.addOrder(this.state.recipeId)}>*/}
                    {/*                Add*/}
                    {/*            </button>*/}
                    {/*        }*/}
                    {/*        {*/}
                    {/*            this.state.userInfo.orders.includes(this.state.recipeId)&&*/}
                    {/*            <button style={{marginTop: "1vh"}} className="btn btn-dark" disabled>*/}
                    {/*                Added*/}
                    {/*            </button>*/}
                    {/*        }*/}
                    {/*    </div>*/}
                    {/*}*/}

                    <h2 style={{marginTop: "5vh", fontSize: "20px"}}>Summary</h2>
                    <div>
                        <Markup content={this.state.recipe.summary}/>
                    </div>

                    {/*{*/}
                    {/*    this.state.userId !== "" && this.state.userInfo.role === "customer" &&*/}
                    {/*    */}
                    {/*}*/}
                    <div>
                        <h2 style={{marginTop: "5vh", fontSize: "20px"}}>Chef Information</h2>
                        <div>
                            <a href={"/profile/" + this.state.chef._id}>{this.state.chef.username}</a>
                        </div>
                    </div>

                    {/*<h2 style={{marginTop: "5vh", fontSize: "20px"}}>Comments</h2>*/}
                    {/*{*/}
                    {/*    this.state.recipe.review.map(rev =>*/}
                    {/*        <p>{rev}</p>*/}
                    {/*    )*/}
                    {/*}*/}
                </div>
            </div>

        )
    }
}
