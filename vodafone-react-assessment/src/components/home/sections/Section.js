import React, {Component} from "react";

// import Home API
import {home} from "../../../helpers/endpoints/api";

// import Components
import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2"

// import Toaster for error messages
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// styling
import "./Section.css";

class Section extends Component {

    state = {
        activeSection: "Section 1",
        error: false,
        headerDescription: "",
        subheaderIdentifiers: [],
        images: [
            {
                title: "",
                imgSource: ""
            },
            {
                title: "",
                imgSource: ""
            },
            {
                title: "",
                imgSource: ""
            },
            {
                title: "",
                imgSource: ""
            },
            {
                title: "",
                imgSource: ""
            }
        ],
        header2Description: "",
        graphText: "",
        statistics: [],
        formHeader: "",
        formLabels: [],
        buttonText: ""
    }

    componentDidMount() {

        home().then( response => {

                let sectionIdentifiers = [];
                response.data[0].sections.map((element) => {
                    sectionIdentifiers.push(element.id);
                });

                let sectionImages = [];
                response.data[0].sections[0].images.map(element => {
                    let newObj = {
                        title: element.title,
                        imgSource: element.img
                    }
                    sectionImages.push(newObj);
                });

                this.setState({
                    headerDescription: response.data[0].description,
                    subheaderIdentifiers: sectionIdentifiers,
                    images: sectionImages,
                    header2Description: response.data[0].sections[1].title,
                    graphText: response.data[0].sections[1].graphText,
                    statistics: response.data[0].sections[1].stats,
                    formHeader: response.data[0].sections[1].formText,
                    formLabels: response.data[0].sections[1].formLabels,
                    buttonText: response.data[0].sections[1].buttonText
                });
            })
            .catch( error => {
                this.setState({error: true});
                toast.error("An error occurred!");
                });

    }

    render() {
        return (
            <div>
                <h2
                    style={{
                        textAlign: "center",
                        marginTop: "25px"}}>
                    {this.state.headerDescription}
                </h2>
                <div className="sections">
                    <label onClick={() => this.setState({activeSection: "Section 1"})}>
                        Section {parseInt(this.state.subheaderIdentifiers[0])}
                        <li className={this.state.activeSection === "Section 1" ? "activeSection1" : null}></li>
                    </label>
                    <label onClick={() => this.setState({activeSection: "Section 2"})}>
                        Section {parseInt(this.state.subheaderIdentifiers[1])}
                        <li className={this.state.activeSection === "Section 2" ? "activeSection2" : null}></li>
                    </label>
                </div>
                {this.state.activeSection === "Section 1" ?
                    <Section1
                        images={this.state.images} />
                        : null}
                {this.state.activeSection === "Section 2" ?
                    <Section2
                        header2Description={this.state.header2Description}
                        graphText={this.state.graphText}
                        statistics={this.state.statistics}
                        formHeader={this.state.formHeader}
                        formLabels={this.state.formLabels}
                        buttonText={this.state.buttonText} />
                    : null}
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

export default Section;