import React, { Component } from "react";

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        const lInfo = localStorage.getItem("form")
        const lSInfo = JSON.parse(lInfo)
        const url = `https://api.covid19api.com/country/united-states/status/confirmed?from=${lSInfo[1]}T00:00:00Z&to=${lSInfo[1]}T10:00:00Z&province=${lSInfo[0]}`
        fetch(url)
        .then((response) => response.json())
        .then(data => {this.setState({data:data})})
    }


    render() { 
        console.log(this.state.data)
        return (
            <div>
            <h1>Test Info</h1>
            </div>
        );
    }
}
 
export default Info;