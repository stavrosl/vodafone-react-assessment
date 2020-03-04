import React, {Component} from "react";

import {menu, page} from "../../helpers/endpoints/api";

import {toast, ToastContainer} from "react-toastify";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleRight, faSearch} from "@fortawesome/free-solid-svg-icons";

import Slider from "../home/slider/Slider";

import "./Page2.css";

class Page2 extends Component {

    state = {
        home: "",
        page2: "",
        error: false,
        components: [
            {value: "Homepage"},
            {value: "All"},
            {value: "Section 1"},
            {value: "Section 2"},
            {value: "Page 2"}
        ],
        isSearchFocus: false,
        search: "",
        page2Description: "",
        page2Tiles: []
    }

    componentDidMount() {

        menu().then(response => {
            this.setState({
                home: response.data[0].title,
                page2: response.data[1].title
            });

        })
            .catch(error => {
                this.setState({error: true});
                toast.error("An error occurred!");
            });

        page().then(response => {
            this.setState({
                page2Description: response.data[0].description,
                page2Tiles: response.data[0].tiles
            }, () => console.log(this.state));
        })
            .catch(error => {
                this.setState({error: true});
                toast.error("An error occurred!");
            });
    }

    render() {
        let filteredComponents = this.state.components.filter((element) => {
            return element.value.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        });

        let page2Icons = [];
        let page2Titles = [];
        let page2Descriptions = [];
        let page2Links = [];

        this.state.page2Tiles.map((element) => {
            page2Icons.push(element.icon);
            page2Titles.push(element.title);
            page2Descriptions.push(element.description);
            page2Links.push(element.link);
        })

        return (
            <div>
                <nav>
                    <ul className="nav-links">
                        <li>
                            <label
                                onClick={() => this.props.history.goBack()}>
                                {this.state.home}
                            </label>
                        </li>
                        <li>
                            <label>
                                {this.state.page2}
                            </label>
                            <li className="activeComponent2"></li>
                        </li>
                    </ul>
                </nav>
                <div className="search-box">
                    <label className="search-btn">
                        {this.state.isSearchFocus ?
                            <FontAwesomeIcon icon={faArrowCircleRight}/> :
                            <FontAwesomeIcon icon={faSearch}/> }
                    </label>
                    <input
                        type="text"
                        className="search"
                        placeholder="type to search..."
                        value={this.state.search}
                        onBlur={() => this.setState({isSearchFocus: false})}
                        onClick={() => this.setState({isSearchFocus: true})}
                        onChange={(event) =>
                            this.setState({search: event.target.value.substr(0, 20)})}/>
                    <div className="components">
                        <ul>
                            {filteredComponents.map((element, index) => {
                                return <li
                                    className={element.value === "All" ||
                                    element.value === "Section 1" ||
                                    element.value === "Section 2" ? "setTab" : null}
                                    key={index}>
                                    {element.value}
                                </li>;
                            })}
                        </ul>
                    </div>
                </div>
                <div>
                <Slider />
                </div>
                <div>
                    <h3 style={{textAlign: "center", marginTop: "30px"}}>{this.state.page2Description}</h3>
                    <div className="page2-container">
                        <div className="page2-box1">
                            <p style={{textAlign: "center", marginTop: "50px"}}>{page2Icons[0]}</p>
                            <h4 style={{textAlign: "center", marginTop: "10px"}}>{page2Titles[0]}</h4>
                            <h5 style={{textAlign: "center", marginTop: "40px"}}>{page2Descriptions[0]}</h5>
                            <p style={{textAlign: "center", marginTop:"60px", color: "blue"}}>{page2Links[0]} ></p>
                        </div>
                        <div className="page2-box2">
                            <p style={{textAlign: "center", marginTop: "50px"}}>{page2Icons[1]}</p>
                            <h4 style={{textAlign: "center", marginTop: "10px"}}>{page2Titles[1]}</h4>
                            <h5 style={{textAlign: "center", marginTop: "40px"}}>{page2Descriptions[1]}</h5>
                            <p style={{textAlign: "center", marginTop:"60px", color: "blue"}}>{page2Links[1]} ></p>
                        </div>
                        <div className="page2-box3">
                            <p style={{textAlign: "center", marginTop: "50px"}}>{page2Icons[2]}</p>
                            <h4 style={{textAlign: "center", marginTop: "10px"}}>{page2Titles[2]}</h4>
                            <h5 style={{textAlign: "center", marginTop: "40px"}}>{page2Descriptions[2]}</h5>
                            <p style={{textAlign: "center", marginTop:"75px", color: "blue"}}>{page2Links[2]} ></p>
                        </div>
                    </div>
                </div>
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
        )
    }
}

export default Page2;