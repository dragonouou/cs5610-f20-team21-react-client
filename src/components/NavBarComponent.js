import React from "react";
import {profile, logout, findUserByIdSimple} from "../services/UserService";
import "../css/NavBarComponent.css"

export class NavBarComponent extends React.Component {

    state = {
        // USER 1
        userId: '',
        // CHEF 1
        // userId: '5fc9dcf17ecf2884edd15894',
        userInfo: {
            username: ""
        }
    }

    logout = () => {
        logout()
            .then(status => {
                this.setState({userInfo:{},userId:''})
            })
    }

    componentDidMount() {
        // TO TEST THE GIVEN USER
        // if (this.state.userId) {
        //     findUserById(this.state.userId)
        //         .then(user => {
        //             this.setState({
        //                 userInfo: user
        //             })
        //         })
        // }

        // TO FETCH THE USER FROM THE SESSION
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

    render() {
        return (
            <header>
                {/*top nav ar?*/}
                {/*<div className="navbar navbar-default visible-xs hidden-lg">*/}
                {/*    /!*<button type="button" className="navbar-toggle collapsed">*!/*/}
                {/*    /!*    <span className="sr-only">Toggle navigation</span>*!/*/}
                {/*    /!*    <span className="icon-bar"></span>*!/*/}
                {/*    /!*    <span className="icon-bar"></span>*!/*/}
                {/*    /!*    <span className="icon-bar"></span>*!/*/}
                {/*    /!*</button>*!/*/}
                {/*    <a href="/" className="navbar-brand">Kitchen</a>*/}

                {/*    {*/}
                {/*        this.state.userInfo.role === "customer" &&*/}
                {/*        <a href="/search" title="" className="navbar-brand" >Search</a>*/}
                {/*    }*/}
                {/*    {*/}
                {/*        this.state.userInfo.role === "chef" &&*/}
                {/*        <a href="/search/api" title="" className="navbar-brand">Search in API</a>*/}
                {/*    }*/}
                {/*    <a href="/profile" className="navbar-brand">Profile</a>*/}
                {/*</div>*/}

                <nav className="sidebar ">
                    {/*<div className="navbar-collapse" id="navbar-collapse">*/}
                    <div  className="">
                        {/*<div className="site-header hidden-xs">*/}
                        <div className="">
                            <a className="site-brand" href="/" title="">
                                Happy Kitchen
                            </a>
                            <br/>
                            <p className="text-left">Cooking is for the Soul!</p>
                            <img className="img-thumbnail navimg" src="https://cdn.pixabay.com/photo/2012/04/13/11/59/cooking-ingredients-32089_960_720.png"/>


                            <br/>
                            <br/>
                        </div>

                        <ul className="" style={{listStyleType: "none", paddingLeft: "0px"}}>
                            <li><a href="/" title="" className="" style={{fontWeight: this.props.page === "home" ? "bold":"none"}}>Home</a></li>
                            {
                                this.state.userInfo.role === "customer" &&
                                <li><a href="/search" title="" className="" style={{fontWeight: this.props.page === "search" ? "bold":"none"}}>Search</a></li>
                            }
                            {
                                this.state.userInfo.role === "chef" &&
                                <li><a href="/search/api" title="" className="" style={{fontWeight: this.props.page === "searchApi" ? "bold":"none"}}>Search in API</a></li>
                            }
                            <li><a href="/about" title="" className="" style={{fontWeight: this.props.page === "about" ? "bold":"none"}}>About</a></li>
                            {/*<li><a href="/policy" title="" className="" style={{fontWeight: this.props.page === "policy" ? "bold":"none"}}>Policy</a></li>*/}
                        </ul>

                        {/*logged in version*/}
                        <div style={{}}>

                            <div>

                            </div>
                        </div>

                        <nav className="nav-footer">
                            {
                                this.state.userId !== "" &&
                                    <div>
                                        <p className="nav-footer-social-buttons">
                                            <a className="fa-icon" href="/profile" title="" style={{marginLeft: "8px"}}>
                                                <i className="fa fa-2x fa-user-circle-o" aria-hidden="true"></i>
                                            </a>
                                            {
                                                this.state.userInfo.role === "chef" &&
                                                <i className="fa fa-shopping-basket"></i>
                                            }
                                        </p>
                                        <div style={{marginTop: "6px"}}>
                                            {/*{console.log(this.state.userInfo)}*/}
                                            {
                                                this.state.userInfo.role === "chef" &&
                                                <span>Hello Chef {this.state.userInfo.firstname}!</span>
                                            }
                                            {
                                                this.state.userInfo.role === "customer" &&
                                                <span>Hello {this.state.userInfo.firstname}!</span>
                                            }
                                            {/*Hi there!*/}
                                            <a className="fa-icon" href="/cart" title="">
                                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                        <div><a href="" onClick={this.logout}>Logout</a></div>
                                    </div>

                            }
                            {
                                this.state.userId === "" &&
                                <div>
                                    <a href="/login">Login</a>
                                    /
                                    <a href="/register">Register</a>
                                </div>
                            }

                            <p style={{marginTop: "8vh"}}>© Untitled
                                {/*<a href="http://www.mashup-template.com/"*/}
                                {/*   title="Create website with free html template">Mashup*/}
                                {/*Template*/}
                                {/*</a>*/}
                                {/*/*/}
                                {/*<a href="https://www.unsplash.com/"*/}
                                {/*   title="Beautiful Free Images">*/}
                                {/*    Unsplash*/}
                                {/*</a>*/}
                            </p>
                        </nav>
                    </div>
                </nav>



            </header>
        )
    }
}
