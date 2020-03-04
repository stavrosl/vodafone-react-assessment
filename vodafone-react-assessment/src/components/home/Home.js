import React, {Component} from "react";

// import menu API
import {menu} from "../../helpers/endpoints/api";

// import Components
import Slider from "../home/slider/Slider";
import Section from "../home/sections/Section";

// import Toaster for error messages
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// import icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleRight, faSearch} from "@fortawesome/free-solid-svg-icons";

// import styling
import './Home.css';

class Home extends Component {

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
        search: ""

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
    }

    render() {
        let filteredComponents = this.state.components.filter((element) => {
            return element.value.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        });
        return (
         <div>
             <nav>
                 <ul className="nav-links">
                     <li>
                         <label>
                             {this.state.home}
                         </label>
                         <li className="activeComponent1"></li>
                     </li>
                     <li>
                         <label
                             onClick={() => this.props.history.push('/page2')}>
                             {this.state.page2}
                         </label>
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
             <Slider />
             <Section />
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

export default Home;