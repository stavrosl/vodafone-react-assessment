import React, {Component} from "react";

// import icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";

// import styling
import "./Section1.css"

class Section1 extends Component {

    render() {
        return(
            <div className="container">
                <div className="box1">
                    <div className="icon">
                        <i>
                            <FontAwesomeIcon className="fa" icon={faEye}/>
                            <h5 className="title">{this.props.images[0].title}</h5>
                        </i>
                    </div>
                    <div className="content1">
                        <img src={this.props.images[0].imgSource} />
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <i>
                            <FontAwesomeIcon className="fa"  icon={faEye}/>
                            <h5 className="title">{this.props.images[1].title}</h5>
                        </i>
                    </div>
                    <div className="content">
                        <img src={this.props.images[1].imgSource} />
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <i>
                            <FontAwesomeIcon className="fa"  icon={faEye}/>
                            <h5 className="title">{this.props.images[2].title}</h5>
                        </i>
                    </div>
                    <div className="content">
                        <img src={this.props.images[2].imgSource} />
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <i>
                            <FontAwesomeIcon className="fa"  icon={faEye}/>
                            <h5 className="title">{this.props.images[3].title}</h5>
                        </i>
                    </div>
                    <div className="content">
                        <img src={this.props.images[3].imgSource} />
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <i>
                            <FontAwesomeIcon className="fa"  icon={faEye}/>
                            <h5 className="title">{this.props.images[4].title}</h5>
                        </i>
                    </div>
                    <div className="content">
                        <img src={this.props.images[4].imgSource} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Section1;