import React from "react";
import {BrowserRouter, Link, Route, Redirect} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import '../css/main.82cfd66e.css';
import {SearchComponent} from "./SearchComponent";
import {DetailComponent} from "./DetailComponent";
import {NavBarComponent} from "./NavBarComponent";

export class HomeComponent extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-2">
                    <NavBarComponent/>
                </div>

                <div className="hero-full-wrapper col-10" style={{marginTop: "25px"}}>
                    <div className="grid row">
                        {/*<div className="gutter-sizer"></div>*/}
                        {/*<div className="grid-sizer"></div>*/}

                        <div className="grid-item col-4">
                            <img className="img-responsive" alt="" src="https://img.theculturetrip.com/768x432/wp-content/uploads/2018/08/shutterstock_648976399.jpg"/>
                            <a href="/" className="project-description">
                                <div className="project-text-holder">
                                    <div className="project-text-inner">
                                        <h3>Tiramisu</h3>
                                        <p>Discover more</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="grid-item col-4">
                            <img className="img-responsive" alt="" src="https://www.louisianatravel.com/sites/default/files/legacy_images/crawfish%20town-friedseafood.jpeg"/>
                            <a href="/" className="project-description">
                                <div className="project-text-holder">
                                    <div className="project-text-inner">
                                        <h3>Cupcake</h3>
                                        <p>Discover more</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="grid-item col-4">
                            <img className="img-responsive" alt="" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-sugar-free-cheesecake-1581456006.jpg?crop=0.505xw:1.00xh;0.248xw,0&resize=640:*"/>
                            <a href="/" className="project-description">
                                <div className="project-text-holder">
                                    <div className="project-text-inner">
                                        <h3>Cupcake</h3>
                                        <p>Discover more</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="grid-item col-4">
                            <img className="img-responsive" alt="" src="https://images.immediate.co.uk/production/volatile/sites/2/2018/10/olive_Cheesecakes-f005ffb.jpg?quality=90&resize=768%2C574"/>
                            <a href="/" className="project-description">
                                <div className="project-text-holder">
                                    <div className="project-text-inner">
                                        <h3>Cupcake</h3>
                                        <p>Discover more</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="grid-item col-4">
                            <img className="img-responsive" alt="" src="https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/06/homemade-tiramisu-2.jpg"/>
                            <a href="/" className="project-description">
                                <div className="project-text-holder">
                                    <div className="project-text-inner">
                                        <h3>Tiramisu</h3>
                                        <p>Discover more</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="grid-item col-4">
                            <img className="img-responsive" alt="" src="https://glorias.imgix.net/menu/ceviche-trio-1.jpg"/>
                            <a href="/" className="project-description">
                                <div className="project-text-holder">
                                    <div className="project-text-inner">
                                        <h3>Cupcake</h3>
                                        <p>Discover more</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}