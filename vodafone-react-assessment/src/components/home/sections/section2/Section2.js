import React, {Component} from "react";

// import Toaster for error messages
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// import styling
import "./Section2.css";

class Section2 extends Component {

    state = {
        phone: "",
        errorPhone: false,
        email: "",
        errorEmail: false,
        password: "",
        errorPassword: false
    }

    checkInputs = () => {

        let regEmail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
        let resEmail = regEmail.test(this.state.email);
        if (resEmail) {
            resEmail = false;
        } else {
            resEmail = true;
        }

        let regPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$");
        let resPassword = regPassword.test(this.state.password);
        if (resPassword) {
            resPassword = false;
        } else {
            resPassword = true;
        }

        let phone = this.state.phone;
        let resPhone;
        if (phone.length === 13) {
            if (phone.charAt(0) === '+') {
                if (phone.charAt(3) === '2' || phone.charAt(3) === '6') {
                    resPhone = false;
                } else {
                    resPhone = true;
                }
            } else {
                resPhone = true;
            }
        } else {
            resPhone = true;
        }

        this.setState({
            errorEmail: resEmail,
            errorPhone: resPhone,
            errorPassword: resPassword
        }, () => {
            if (this.state.errorPhone || this.state.errorEmail || this.state.errorPassword) {
                toast.error("Invalid Input. Please check and re-input again");
            }
        });
    }

    render() {
        let amounts = [];
        let descriptions = [];

        this.props.statistics.map((element) => {
            amounts.push(element.amount);
            descriptions.push(element.title);
        })

        return (
            <div>
                <div className="section2-container">
                    <div className="statistics">
                        <h4>{this.props.header2Description}</h4> <br/>
                        <h3>{this.props.graphText}</h3> <br/>
                        <div className="skills">
                            <p style={{marginBottom: "15px", marginLeft: "5px"}}>
                                {descriptions[0]}
                                <label
                                    style={{
                                        float: "right",
                                        marginRight: "5px"
                                    }}>
                                    {amounts[0] / 10}%
                                </label>
                            </p>
                            <span className="bar1">
                                <li className="bullet1"></li>
                            </span>
                            <br/>
                            <p style={{marginBottom: "15px", marginLeft: "5px"}}>
                                {descriptions[1]}
                                <label
                                    style={{
                                        float: "right",
                                        marginRight: "5px"
                                    }}>
                                    {amounts[1] / 10}%
                                </label>
                            </p>
                            <span className="bar2">
                                <li className="bullet2"></li>
                            </span> <br/>
                            <p style={{marginBottom: "15px", marginLeft: "5px"}}>
                                {descriptions[2]}
                                <label
                                    style={{
                                        float: "right",
                                        marginRight: "5px"
                                    }}>
                                    {amounts[2] / 10}%
                                </label>
                            </p>
                            <span className="bar3">
                                <li className="bullet3"></li>
                            </span> <br/>
                            <p style={{marginBottom: "15px", marginLeft: "5px"}}>
                                {descriptions[3]}
                                <label
                                    style={{
                                        float: "right",
                                        marginRight: "5px"
                                    }}>
                                    {amounts[3] / 10}%
                                </label>
                            </p>
                            <span className="bar4">
                                <li className="bullet4"></li>
                            </span> <br/>
                        </div>
                    </div>
                    <div className="validate">
                        <h3 style={{textAlign: "center", marginTop: "25px"}}>{this.props.formHeader}</h3> <br/>
                        <label style={{marginLeft: "30px"}}>We work with ecosystem leaders, corporations </label> <br/>
                        <label style={{marginLeft: "30px"}}> and startups worldwide. How can we help you?</label> < br/>
                        <div style={{marginTop: "15px"}}>
                            <input
                                type="text"
                                className="phone"
                                name="phone"
                                placeholder="Your Phone"
                                onChange={(event) => this.setState({phone: event.target.value})}/> <br/>
                            <input
                                type="email"
                                className="email"
                                name="email"
                                placeholder="Your Email"
                                onChange={(event) => this.setState({email: event.target.value})}/> <br/>
                            <input
                                type="password"
                                className="password"
                                name="password"
                                placeholder="Password"
                                onChange={(event) => this.setState({password: event.target.value})}/> <br/>
                            <input
                                className="submit"
                                type="submit"
                                value="Submit"
                                onClick={this.checkInputs}/> <br/>
                        </div>
                    </div>
                    {(this.state.errorPhone || this.state.errorEmail || this.state.errorPassword) ?
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
            </div>
        );
    }
}

export default Section2;