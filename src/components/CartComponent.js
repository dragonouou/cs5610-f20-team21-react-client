import React from "react";
import "../css/OrderHistoryComponent.css"
import "../css/CartComponent.css"
import {findUserById, findUserByIdSimple, profile, updateUser} from "../services/UserService";
import {createOrder} from "../services/orderService";
import {Link} from "react-router-dom";

class CartComponent extends React.Component{

    state = {
        userInfo: {orders: []},
        recipes: [],
        recipeIds: []
    }

    componentDidMount() {
        profile()
            .then(profile => {
                // if (profile.length !== 0) {
                //     // console.log(profile)
                //     this.setState({
                //         userInfo: profile,
                //         userId: profile._id
                //     })
                // }
                if (Array.isArray(profile)) {
                    if (profile.length !== 0) {
                        // this.setState({
                        //     // userInfo: profile[0],
                        //     userId: profile[0]._id
                        // })
                        findUserById(profile[0]._id)
                            .then(user => this.setState({recipes : user.cart}))
                        findUserByIdSimple(profile[0]._id)
                            .then(user => {
                                this.setState({userInfo : user})
                                this.setState({recipeIds : user.cart})
                            })
                    }
                } else {
                    // this.setState({
                    //     // userInfo: profile,
                    //     userId: profile._id
                    // })
                    findUserById(profile._id)
                        .then(user => this.setState({recipes : user.cart}))
                    findUserByIdSimple(profile._id)
                        .then(user => {
                            this.setState({userInfo : user})
                            this.setState({recipeIds : user.cart})
                        })
                }
            })
    }

    // add to order
    placeOrder = () =>{
        const oldUser = this.state.userInfo;
        let newOrder = {
            recipes: this.state.recipeIds,
            date: Date()
        }
        let newOrderId = "";

        createOrder(newOrder).then(actualOrder => {
            newOrderId = actualOrder._id
            const newUser = {
                ...oldUser,
                orders:[
                    ...oldUser.orders,
                    newOrderId
                ],
                cart: []
            }
            updateUser(this.state.userInfo._id, newUser)
                .then(status => {
                    this.setState({userInfo : newUser})
                })
        })

        // console.log(oldUser)
        // console.log(newUser)

        // console.log(this.state.cart)
        // console.log(this.state.userInfo)
    }

    render() {
        return (
            <div>
                <div className="pt-5 pb-5">
                    <div className="container">
                        <div className="row w-100">
                            <div className="col-lg-12 col-md-12 col-12">
                                <h3 className="display-5 mb-2 text-center">Shopping Cart</h3>
                                <p className="mb-5 text-center">
                                    <i className="text-info font-weight-bold">{this.state.recipes.length}</i> items in your cart</p>
                                <table id="shoppingCart" className="table table-condensed table-responsive">
                                    <thead>
                                    <tr>
                                        <th className="head-product">Product</th>
                                        <th className="head-price">Price</th>
                                        <th className="head-quantity">Quantity</th>
                                        {/*<th className="head-nothing"></th>*/}
                                    </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            this.state.recipes.map(recipe =>
                                                <tr>
                                                    <td data-th="Product">
                                                        <div className="row">
                                                            <div className="col-md-3 text-left">
                                                                <img src={recipe.img}
                                                                     alt=""
                                                                     className="img-fluid d-none d-md-block rounded mb-2 shadow "/>
                                                            </div>
                                                            <div className="col-md-9 text-left mt-sm-2">
                                                                <h4>{recipe.title}</h4>
                                                                {/*<p className="font-weight-light">{recipe.chefId}</p>*/}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td data-th="Price">$15.00</td>
                                                    <td data-th="Quantity">
                                                        <input type="number" className="form-control form-control-lg text-center"
                                                               value="1"/>
                                                    </td>
                                                    {/*<td className="actions" data-th="">*/}
                                                    {/*    <div className="text-right">*/}
                                                    {/*        <button className="btn btn-white border-secondary bg-white btn-md mb-2">*/}
                                                    {/*            <i className="fa fa-edit"></i>*/}
                                                    {/*        </button>*/}
                                                    {/*        <button className="btn btn-white border-secondary bg-white btn-md mb-2">*/}
                                                    {/*            <i className="fa fa-trash"></i>*/}
                                                    {/*        </button>*/}
                                                    {/*    </div>*/}
                                                    {/*</td>*/}
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>


                                <div className="float-right text-right">
                                    <h4>Subtotal:</h4>
                                    <h1>${this.state.recipes.length * 15.00}</h1>
                                </div>
                            </div>
                        </div>


                        <div className="row mt-4 d-flex align-items-center">
                            <div className="col-sm-6 order-md-2 text-right">
                                <Link to="/">
                                    <button className="btn btn-primary mb-4 btn-lg pl-5 pr-5" onClick={this.placeOrder}>Place Order</button>
                                </Link>
                            </div>
                            <div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
                                <a href="/">
                                    <i className="fa fa-arrow-left mr-2"></i> Continue Shopping</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartComponent;
