import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stateName: "",
            date: "",
            statesArray: [{"name":"Alabama","abbreviation":"AL"},{"name":"Alaska","abbreviation":"AK"},{"name":"Arizona","abbreviation":"AZ"},{"name":"Arkansas","abbreviation":"AR"},{"name":"California","abbreviation":"CA"},{"name":"Colorado","abbreviation":"CO"},{"name":"Connecticut","abbreviation":"CT"},{"name":"Delaware","abbreviation":"DE"},{"name":"Florida","abbreviation":"FL"},{"name":"Georgia","abbreviation":"GA"},{"name":"Hawaii","abbreviation":"HI"},{"name":"Idaho","abbreviation":"ID"},{"name":"Illinois","abbreviation":"IL"},{"name":"Indiana","abbreviation":"IN"},{"name":"Iowa","abbreviation":"IA"},{"name":"Kansas","abbreviation":"KS"},{"name":"Kentucky","abbreviation":"KY"},{"name":"Louisiana","abbreviation":"LA"},{"name":"Maine","abbreviation":"ME"},{"name":"Maryland","abbreviation":"MD"},{"name":"Massachusetts","abbreviation":"MA"},{"name":"Michigan","abbreviation":"MI"},{"name":"Minnesota","abbreviation":"MN"},{"name":"Mississippi","abbreviation":"MS"},{"name":"Missouri","abbreviation":"MO"},{"name":"Montana","abbreviation":"MT"},{"name":"Nebraska","abbreviation":"NE"},{"name":"Nevada","abbreviation":"NV"},{"name":"New Hampshire","abbreviation":"NH"},{"name":"New Jersey","abbreviation":"NJ"},{"name":"New Mexico","abbreviation":"NM"},{"name":"New York","abbreviation":"NY"},{"name":"North Carolina","abbreviation":"NC"},{"name":"North Dakota","abbreviation":"ND"},{"name":"Ohio","abbreviation":"OH"},{"name":"Oklahoma","abbreviation":"OK"},{"name":"Oregon","abbreviation":"OR"},{"name":"Pennsylvania","abbreviation":"PA"},{"name":"Rhode Island","abbreviation":"RI"},{"name":"South Carolina","abbreviation":"SC"},{"name":"South Dakota","abbreviation":"SD"},{"name":"Tennessee","abbreviation":"TN"},{"name":"Texas","abbreviation":"TX"},{"name":"Utah","abbreviation":"UT"},{"name":"Vermont","abbreviation":"VT"},{"name":"Virginia","abbreviation":"VA"},{"name":"Washington","abbreviation":"WA"},{"name":"West Virginia","abbreviation":"WV"},{"name":"Wisconsin","abbreviation":"WI"},{"name":"Wyoming","abbreviation":"WY"}]
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]:value
        })
    }
    handleSubmit(event){
        event.preventDefault()
        const temp = []
        temp.push(this.state.stateName)
        temp.push(this.state.date)
        window.localStorage.setItem('form', JSON.stringify(temp))
        window.location.href = '#/info'
    }
    render() { 
        return (
            <form onSubmit={this.handleSubmit} className = "Form-form">
                <div className = "Form-div">
                    <label className = "Form-label">State: 
                        <select name="stateName" value={this.state.value} onChange = {this.handleChange}>
                            <option>-- Select a State --</option>
                            {this.state.statesArray.map((option) => (
                            <option key={option.abbreviation} value={option.name}>
                            {option.name}
                        </option>))}
                        </select>
                    </label>
                    <br/>
                    <label> Date: 
                        <input type = "date" name="date" value={this.state.value} onChange = {this.handleChange}/>
                    </label>
                    <br/>
                    <input type = "submit" value = "Submit" />
                </div>
            </form>
        );
    }
}
 
export default Form;