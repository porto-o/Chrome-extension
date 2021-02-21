import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import Time from '../Time/Time';
import DeleteButton from '../DeleteButton/DeleteButton';
import './TaskList.css';

const key = 'tasklist';
const prefixtask = 'task';
const prefixtime = 'time';
function RenderList(props) {
    const reversed = props.items.slice().reverse();
    const list = reversed.map((item) => 
        <div className="Item" key={item}>
            <TaskItem itemid={item} focus={item === reversed[0]} />
            <Time itemid={item} focus={false} />
            <DeleteButton taskprefix={prefixtask} timeprefix={prefixtime} delete={props.delete} itemid={item}/>
        </div>
    );
    return (
        <>
            {list}
        </>
    )
}

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        if (chrome.storage) {
            this.state = { tasklist: [] };
            chrome.storage.local.get(key, res => {
                let list = res[key] || [];
                console.log(list);
                this.setState({ tasklist: list });
            }) 
        }
        else {
            let list = JSON.parse(window.localStorage.getItem(key)) || [];
            this.state = { tasklist: list };
        }
    } 
    addNew = () => {
        let curr = this.state.tasklist;
        curr.push(Date.now().toString());
        this.setState({tasklist: curr});
        if (chrome.storage) {
            chrome.storage.local.set({[key]: curr});
        }
        else {
            window.localStorage.setItem(key, JSON.stringify(curr));
        }
    }
    clearAll = () => {
        if (chrome.storage) {
            chrome.storage.local.clear();
        }
        else {
            window.localStorage.clear();
        }
        this.setState({tasklist: []});
    }
    
    deleteItem = (id) => {
        console.log("deleting id: " + id);
        let curr = this.state.tasklist;
        const index = curr.indexOf(id);
        if (index >= 0) {
            curr.splice(index, 1);
        }
        if (chrome.storage) {
            chrome.storage.local.set({[key]: curr});
        }
        else {
            window.localStorage.setItem(key, JSON.stringify(curr));
        }
        this.setState({tasklist: curr});
    }

    render() {
        return (
            <>
                <button onClick={this.addNew}>Add New</button>
                <button onClick={this.clearAll}>Clear All</button>
                <RenderList items={this.state.tasklist} delete={this.deleteItem}/>
            </>
        );
    }
}

export default TaskList;