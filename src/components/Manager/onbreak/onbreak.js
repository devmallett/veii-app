import React, { Component } from 'react'
import axios from 'axios'
import OnBreakList from "./onbreakList"

class OnBreak extends Component {

    constructor() {
        super();
        this.state = {
            employees: [],
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        let initialList = [];
        axios.get('/onBreak/').then(response => {
            console.log("Data: " + response.data[0].startbreak[0].breakstart)
            initialList = response.data.map((employee) => {
                return employee
            });
            this.setState({
                employees: initialList,
            })
            //console.log(this.state.employees[0].firstname)
        });
    }

    render() {
        return (
            <div>
                <h3>Employees On Break:</h3>
                <OnBreakList state={this.state} />
            </div>

        );
    }
}
export default OnBreak;