import React from 'react';
import './TaskItem.css';
import {saveTaskApi} from "../api/api";

const prefix = 'task';
class TaskItem extends React.Component {
    constructor (props) {
        super(props);
        let key = this.props.prefix + this.props.itemid;
        if (chrome.storage) {
            this.state = { taskinfo: '' };
            chrome.storage.local.get(key, res => {
                let task = res[key] || '';
                this.setState({ taskinfo: task });
            });
        }
        else {
            let task = window.localStorage.getItem(key) || '';
            this.state = { taskinfo: task };
        }
    }

    handleSave = async (text) => {
        if (chrome.storage) {
            chrome.storage.local.set({[prefix + this.props.itemid]: text});
        }
        else {
            window.localStorage.setItem(prefix + this.props.itemid, text);
        }
        this.setState({taskinfo: text});
        //Connecting to api
    }

    handleBlur = (event) => {
        this.handleSave(event.target.value);
    }

    handleSubmit = async (event) => {
        if (event.which === 13) {
            this.handleSave(event.target.value);
            const hours = prompt("How many hours? ")
            const result = await saveTaskApi(this.props.itemid, this.state.taskinfo, hours);
        }
    }

    handleChange = (event) => {
        this.setState({ taskinfo: event.target.value });
    }

    render() {
        return (
            <input 
                type='text' 
                autoFocus={this.props.focus}
                value={this.state.taskinfo}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                onKeyDown={this.handleSubmit}
            />
        );
    }
}

export default TaskItem;