import React from 'react';
import './Textarea.css';

class Textarea extends React.Component {
    constructor(props) {
        super(props);
        let currenttext;
        let key = 'text' + this.props.itemid;
        if (chrome.storage) {
            this.state = {text: ''};
            console.log("previous state: " + this.state.text);
            console.log(this.props.itemid);
            chrome.storage.local.get(key, res => {
                currenttext = res[key] || '';
                this.setState({text: currenttext});
            });
        }
        else {
            console.log("local storage");
            currenttext = window.localStorage.getItem(key) || '';
            console.log(currenttext);
            this.state = {text: currenttext};
        }
    }

    handleSave = text => {
        if (chrome.storage) {
            chrome.storage.local.set({['text' + this.props.itemid]: text});
        }
        else {
            window.localStorage.setItem('text' + this.props.itemid, text);
        }
    }

    handleBlur = (event) => {
        this.handleSave(event.target.value);
    }
    handleChange = (event) => {
        this.setState({ text: event.target.value });
    }

    handleSubmit = (event) => {
        if (event.which === 13) {
            this.handleSave(event.target.value);
        }
    }

    render() {
        return (
            <textarea 
                autoFocus={this.props.focus}
                value={this.state.text}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                onKeyDown={this.handleSubmit}
            />
        );
    }
}

export default Textarea;