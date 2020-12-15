import React from "react";
import "../css/Home.css";
import {NavBarComponent} from "./NavBarComponent";
// import {findRecipeById, findSummaryById} from "../services/recipeService";
import { Markup } from 'interweave';
import {findRecipeById} from "../services/recipeDatabaseService";
import {findUserById, findUserByIdSimple, profile, updateUser} from "../services/UserService";

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

    //add to order
    // addOrder = (recipeId) =>{
    //     const oldUser = this.state.userInfo;
    //     const newUser = {
    //         ...oldUser,
    //         orders:[
    //             ...oldUser.orders,
    //             recipeId
    //         ]
    //     }
    //     updateUser(this.state.userInfo._id, newUser)
    //         .then(status => {
    //             this.setState({userInfo : newUser})
    //         })
    // }

    render() {
        return (
            <div className="row">
                <div className="col-2">
                    <NavBarComponent
                        userId={this.props.userId}
                        user={this.props.userInfo}/>
                </div>
                {console.log(this.state.userInfo)}
                <div className="hero-full-wrapper col-10" style={{paddingRight: "5vw", marginTop: "1vh"}}>
                    <h2>{this.state.recipe.title}</h2>
                    <img src={this.state.recipe.img} alt=""/>
                    {
                        this.state.userId !== "" && this.state.userInfo.role === "customer" &&
                        <div>
                            {/*<button className="btn btn-success">*/}
                            {/*    Add to cart*/}
                            {/*</button>*/}
                            {/*<br/>*/}
                            {
                                !this.state.userInfo.favorites.includes(this.state.recipeId) &&
                                <button style={{marginTop: "1vh"}} className="btn btn-info" onClick={() => this.favorite(this.state.recipeId)}>
                                    favorite
                                </button>
                            }
                            {
                                this.state.userInfo.favorites.includes(this.state.recipeId) &&
                                <button style={{marginTop: "1vh"}} className="btn btn-dark" disabled>
                                    saved
                                </button>
                            }
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

                    <h2 style={{marginTop: "5vh", fontSize: "20px"}}>Comments</h2>
                    {
                        this.state.recipe.review.map(rev =>
                            <p>{rev}</p>
                        )
                    }
                </div>
            </div>

        )
    }
}
