import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import Time from '../Time/Time';
import DeleteButton from '../DeleteButton/DeleteButton';
import MarkDone from '../MarkDone/MarkDone';
import './Item.css';

const prefix = 'status';
class Item extends React.Component {
    constructor(props) {
        super(props)
        if (chrome.storage) {
            this.state = { done: false };
            chrome.storage.local.get(prefix + this.props.itemid, res => {
                let status = res[prefix + this.props.itemid] ? true : false;
                this.setState({done: status});
            })
        }
        else {
            let status = JSON.parse(window.localStorage.getItem(prefix + this.props.itemid)) ? true : false;
            console.log(this.props.itemid + status);
            this.state = { done: status };
        }
    }
    changeStatus = (status) => {
        console.log(status);
        if (chrome.storage) {
            chrome.storage.local.set({[prefix + this.props.itemid]: status});
        }
        else {
            window.localStorage.setItem(prefix + this.props.itemid, JSON.stringify(status));
        }
        this.setState({done: status});
    }
    render() {
        return (
            <div className={this.state.done ? "ItemDone" : "ItemNotDone"}>
                <MarkDone markDone={this.changeStatus} />
                <TaskItem itemid={this.props.itemid} prefix={this.props.taskprefix} focus={this.props.focus} />
                <Time itemid={this.props.itemid} prefix={this.props.timeprefix} />
                <DeleteButton itemid={this.props.itemid} taskprefix={this.props.taskprefix} timeprefix={this.props.timeprefix} delete={this.props.delete} />
            </div>
        )
    }
}
export default Item;