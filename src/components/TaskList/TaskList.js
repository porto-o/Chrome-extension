import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import Time from '../Time/Time';
import './TaskList.css';

const key = 'tasklist';

function RenderList(props) {
    const reversed = props.items.slice().reverse();
    const list = reversed.map((item) => 
        <div className="Item" key={item}>
            <TaskItem itemid={item} focus={item === reversed[0]} />
            <Time itemid={item} focus={false}/>
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
    render() {
        return (
            <>
                <button onClick={this.addNew}>Add New</button>
                <button onClick={this.clearAll}>Clear All</button>
                <RenderList items={this.state.tasklist} />
            </>
        );
    }
}

export default TaskList;