import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import Time from '../Time/Time';
import DeleteButton from '../DeleteButton/DeleteButton';
import './Item.css';

class Item extends React.Component {
    render() {
        return (
            <div className="Item">
                <TaskItem itemid={this.props.itemid} prefix={this.props.taskprefix} focus={this.props.focus} />
                <Time itemid={this.props.itemid} prefix={this.props.timeprefix} />
                <DeleteButton itemid={this.props.itemid} taskprefix={this.props.taskprefix} timeprefix={this.props.timeprefix} delete={this.props.delete} />
            </div>
        )
    }
}
export default Item;