import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

class RydoComponent extends React.Component {

    constructor(props) {
        super(props);

        this.Id = React.createRef();
        this.Name = React.createRef();
        this.Location = React.createRef();
        this.Salary = React.createRef();

        this.state = { employees: '' };
    }

    onCreateEmployee = () => {
        let empInfo = {
            Id: this.Id.current.value,
            Name: this.Name.current.value,
            Location: this.Location.current.value,
            Salary: this.Salary.current.value
        };

        let val = JSON.stringify(empInfo);
        console.log(val);

        fetch('http://localhost:18983/api/Employee', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(empInfo)
        }).then(r => r.json()).then(res => {
            if (res) {
                this.setState({ message: 'New Employee is Created Successfully' });
            }
        })

    }

    render() {
        return <div>
            <h2>Please Enter Employee Details...</h2>
            <p>
                <label>Employee ID : <input type="text" ref={this.Id}></input></label>
            </p>
            <p>
                <label>Employee Name : <input type="text" ref={this.Name}></input></label>
            </p>
            <p>
                <label>Employee Location : <input type="text" ref={this.Location}></input></label>
            </p>
            <p>
                <label>Employee Salary : <input type="text" ref={this.Salary}></input></label>
            </p>
            <button onClick={this.onCreateEmployee}>Create</button>
            <p>{this.state.message}</p>
        </div>
    }


}

const element = <RydoComponent></RydoComponent>

ReactDOM.render(element, rootElement);

registerServiceWorker();

