import React from 'react';
import './TimeChooser.css';
import DeleteButton from '../DeleteButton/DeleteButton';

class TimeChooser extends React.Component {
    constructor(props) {
        super(props)
        if (chrome.storage) {
            this.state = {first: '', second: '', firstinvalid: false, secondinvalid: false};
            chrome.storage.local.get(this.props.prefix1 + this.props.itemid, res => {
                let time = res[this.props.prefix1 + this.props.itemid] || '';
                this.setState({first: time});
            })
            chrome.storage.local.get(this.props.prefix2 + this.props.itemid, res => {
                let time = res[this.props.prefix2 + this.props.itemid] || '';
                this.setState({second: time});
            })
        }
        else {
            let time1 = window.localStorage.getItem(this.props.prefix1 + this.props.itemid) || '';
            let time2 = window.localStorage.getItem(this.props.prefix2 + this.props.itemid) || '';
            this.state = {first: time1, second: time2, firstinvalid: false, secondinvalid: false};
        }
    }
    handleSave = (prefix, text) => {
        if (chrome.storage) {
            chrome.storage.local.set({[prefix + this.props.itemid]: text});
        }
        else {
            window.localStorage.setItem(prefix + this.props.itemid, text);
        }
    }
    handleFirstBlur = (event) => {
        this.setState({first: event.target.value});
        this.handleSave(this.props.prefix1, event.target.value);
    }
    handleSecondBlur = (event) => {
        this.setState({second: event.target.value});
        this.handleSave(this.props.prefix2, event.target.value);
    }
    handleFirstChange = (event) => {
        if (this.state.second && event.target.value > this.state.second) {
            this.setState({firstinvalid: true});
        }
        else {
            this.setState({first: event.target.value, firstinvalid: false});
        }
    }
    handleSecondChange = (event) => {
        if (event.target.value < this.state.first) {
            this.setState({secondinvalid: true});
        }
        else {
            this.setState({second: event.target.value, secondinvalid: false});
        }
    }
    render() {
        return (
            <>
                <input className={this.state.firstinvalid ? "Invalid" : "Good"} type="time" value={this.state.first} onChange={this.handleFirstChange} onBlur={this.handleFirstBlur} />
                <input className={this.state.secondinvalid ? "Invalid" : "Good"} type="time" value={this.state.second} onChange={this.handleSecondChange} onBlur={this.handleSecondBlur} />
                <DeleteButton taskprefix={this.props.prefix1} timeprefix={this.props.prefix2} itemid={this.props.itemid} delete={this.props.delete}/>
            </>
        )
    }
}
export default TimeChooser;