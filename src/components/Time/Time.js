import React from 'react';
import './Time.css';

const prefix = 'time';
class Time extends React.Component {
    constructor (props) {
        super(props);
        let key = prefix + this.props.itemid;
        if (chrome.storage) {
            this.state = { time: '' };
            chrome.storage.local.get(key, res => {
                let curr = res[key] || '';
                this.setState({ time: curr });
            });
        }
        else {
            let curr = window.localStorage.getItem(key) || '';
            this.state = { time: curr };
        }
    }
    handleSave = (curr) => {
        if (chrome.storage) {
            chrome.storage.local.set({[prefix + this.props.itemid]: curr});
        }
        else {
            window.localStorage.setItem(prefix + this.props.itemid, curr);
        }
        this.setState({time: curr});
    }
    handleBlur = (event) => {
        this.handleSave(event.target.value);
    }
    handleSubmit = (event) => {
        if (event.which === 13) {
            this.handleSave(event.target.value);
        }
    }
    handleChange = (event) => {
        this.setState({ time: event.target.value });
    }
    render() {
        return (
            <input 
                type='number' 
                autoFocus={this.props.focus}
                value={this.state.time}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                onKeyDown={this.handleSubmit}
            />
        );
    }
}
export default Time;