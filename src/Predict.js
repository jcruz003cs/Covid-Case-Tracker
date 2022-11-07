import moment from "moment/moment";
import React, {Component} from "react";
class Predict extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            data: []
        }
    }
    componentDidMount(){
        const formData = localStorage.getItem("form")
        const formData2 = JSON.parse(formData)
        const province = formData2[0]
        const date = formData2[1]
        console.log(province)
        console.log(date)
        // let newDate = moment(date).subtract(6, "days")
        // newDate = moment(newDate).format()
        // console.log(newDate)
        for (let i = 0; i < 3; i++) {
            let newDate = moment(date).subtract(i, "days")
            newDate = moment(newDate).format()
            let dateArray = newDate.split("T")
            console.log(dateArray[0])
            let url = `https://api.covid19api.com/country/united-states/status/confirmed?from=${dateArray[0]}T00:00:00Z&to=${dateArray[0]}T10:00:00Z&province=${province}`
            fetch(url)
            .then((response) => response.json())
            .then(data => {this.setState({data:data})})
        }
    }
    
    render() { 
        console.log(this.state.data)
        return (
        <div>
            <a href="/Covid-Case-Tracker/#/Covid-Case-Tracker">
                <button> Go Back </button>
            </a>
            <br/>
            <h1>This is a prediction</h1>
        </div>
        );
    }
}
 
export default Predict;