import React, { Component } from "react";
import Plot from "react-plotly.js"

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

    transformData(data){
        let plot_data = []
        let x = []
        let y = []
        data.map(each => {
            x.push(each.City)
            y.push(each.Cases)
        })
        plot_data['x'] = x
        plot_data['y'] = y
        return plot_data
    }
    
    render() { 
        return (
            <div>
            <a href="/Covid-Case-Tracker/#/Covid-Case-Tracker">
                <button> Go Back </button>
            </a>
            <br/>
            <Plot
                data = {[
                    {
                        type: 'bar',
                        x: this.transformData(this.state.data)['x'],
                        y: this.transformData(this.state.data)['y']
                    }
                ]}
                layout = {{width: 2500, height: 1000, title: "Covid Case Count per City"}}
            />
            </div>
        );
    }
}
 
export default Info;