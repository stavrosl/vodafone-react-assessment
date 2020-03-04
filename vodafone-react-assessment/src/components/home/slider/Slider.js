import React, {Component} from "react";

// import Slider API
import {slider} from "../../../helpers/endpoints/api";

// import component for the Slider
import {Zoom} from "react-slideshow-image";

// import properties for the Slider
import properties from "../../../helpers/properties/properties";

// import Toaster for error messages
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// styling
import "./Slider.css";


class Slider extends Component {
    state = {
        error: false,
        slides: [
            {
                title: "",
                subtitle: "",
                image: ""
            },
            {
                title: "",
                subtitle: "",
                image: ""
            },
            {
                title: "",
                subtitle: "",
                image: ""
            }
        ]
    }

    componentDidMount() {
        slider().then(response => {
            let slides = [];
            response.data.map((element) => {
                let newObj = {
                    title: element.title,
                    subtitle: element.subtitle,
                    image: element.image
                }
                slides.push(newObj);
            });
            this.setState({slides});
        })
            .catch(error => {
                this.setState({error: true});
                toast.error("An error occurred!");
            });
    }

    render() {
        return (
            <div className="slide-container">
                <Zoom className="zoom" {...properties[0].slideProps}>
                    <div className="each-slide">
                        <h2>{this.state.slides[0].title}</h2> <br/>
                        <span>{this.state.slides[0].subtitle}</span> <br/> <br/>
                        <img src={this.state.slides[0].image} width="1500" height="370"/>
                    </div>
                    <div className="each-slide">
                        <h2>{this.state.slides[1].title}</h2> <br/>
                        <span>{this.state.slides[1].subtitle}</span> <br/> <br/>
                        <img src={this.state.slides[1].image} width="1500" height="370"/>
                    </div>
                    <div className="each-slide">
                        <h2>{this.state.slides[2].title}</h2> <br/>
                        <span>{this.state.slides[2].subtitle}</span> <br/> <br/>
                        <img src={this.state.slides[2].image} width="1500" height="370"/>
                    </div>
                </Zoom>
                {this.state.error ?
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnVisibilityChange
                        draggable
                        pauseOnHover
                    /> : null}
            </div>
        );
    }
}

export default Slider;