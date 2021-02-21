import React from 'react';
import './Time.css';

class Time extends React.Component {
    constructor(props) {
        super(props);
        let currentvalue;
        let key = 'time' + this.props.itemid;
        if (chrome.storage) {
            this.state = {time: ''};
            console.log("previous state: " + this.state.time);
            chrome.storage.local.get(key, res => {
                console.log('current time: ' + res[key]);
                currentvalue = res[key] || '';
                this.setState({time: currentvalue});
                console.log("state: " + this.state.time);
            });
        }
        else {
            console.log("local storage");
            currentvalue = window.localStorage.getItem(key) || '';
            console.log(currentvalue);
            this.state = {time: currentvalue};
        }
    }

    handleSave = time => {
        if (chrome.storage) {
            chrome.storage.local.set({['time' + this.props.itemid]: time});
        }
        else {
            window.localStorage.setItem('time' + this.props.itemid, time);
        }
    }

    handleChange = (event) => {
        this.setState({ time: event.target.value });
        console.log(this.state);
    }

    handleSubmit = (event) => {
        if (event.which === 13) {
            this.handleSave(event.target.value);
        }
    }
    
    handleBlur = (event) => {
        this.handleSave(event.target.value);
    }

    render() {
        return (
            <input 
                type="number"
                value={this.state.time}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                onKeyDown={this.handleSubmit}
            />
        )
    }
}

export default Time;