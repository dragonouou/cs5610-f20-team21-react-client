import React from "react";
import {profile,logout} from "../services/UserService";

export class NavBarComponent extends React.Component {

    state = {
        // USER 1
        userId: '',
        // CHEF 1
        // userId: '5fc9dcf17ecf2884edd15894',
        userInfo: {}
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
                if (profile.length != 0){
                    this.setState({
                        userInfo: profile,
                        userId: profile._id
                    })
                }
            })
    }

    render() {
        return (
            <header>
                <div className="navbar navbar-default visible-xs">
                    <button type="button" className="navbar-toggle collapsed">
                        <span className="sr-only">Toggle navigation</span>
                    </button>
                    <a href="/" className="navbar-brand">Kitchen</a>
                </div>

                <nav className="sidebar">
                    <div className="navbar-collapse" id="navbar-collapse">
                        <div className="site-header hidden-xs">
                            <a className="site-brand" href="/" title="">
                                <img className="img-responsive site-logo" src="../assets/images/mashup-logo.svg" alt=""/>
                                Happy Kitchen
                            </a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.</p>
                        </div>

                        <ul className="" style={{listStyleType: "none", paddingLeft: "0px"}}>
                            <li><a href="/" title="" className="" style={{fontWeight: this.props.page === "home" ? "bold":"none"}}>Home</a></li>
                            <li><a href="/search" title="" className="" style={{fontWeight: this.props.page === "search" ? "bold":"none"}}>Search</a></li>
                            <li><a href="/about" title="" className="" style={{fontWeight: this.props.page === "about" ? "bold":"none"}}>About</a></li>
                            <li><a href="/policy" title="" className="" style={{fontWeight: this.props.page === "policy" ? "bold":"none"}}>Policy</a></li>
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
                                        </p>
                                        <div>
                                            {/*Hello {this.state.userInfo.firstname}!*/}
                                            Hi there!
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
