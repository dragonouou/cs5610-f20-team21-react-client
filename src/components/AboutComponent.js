import React from "react";
import {NavBarComponent} from "./NavBarComponent";
import "../css/AboutComponent.css"

export class AboutComponent extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-2">
                    <NavBarComponent
                        page="about"
                        userId={this.props.userId}
                        user={this.props.userInfo}/>
                </div>
                <div className="container">
                    <div className="hero-full-wrapper col-10 about">
                        <h1>About</h1>

                        <img className="img-thumbnail" src="https://www.urban-wellness.ca/wp-content/uploads/2017/06/fresh-food.jpg" alt=""/>
                        <br/>
                        <p className="text-justify about-content">
                            Happy Kitchen is an online web application which provides a platform for home kitchens to display their best dishes and attract customers to follow and buy dishes from them. Customers can search/follow dishes and follow their favorite chefs. Chef can search different dishes from a Food API and add it to their list.
                            Customers can search dishes provided by different chefs and find more details about the dish. They also could go into the chef's profile page to find more chef’s information and chef’s dishes.

                        </p>
                    </div>

                </div>


            </div>

        )
    }
}
