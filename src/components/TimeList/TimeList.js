import React from 'react';
import TimeChooser from '../TimeChooser/TimeChooser';

const key = 'timelist';
const prefixtask = 'task';
const prefixtime = 'time';

function RenderList (props) {
    const reversed = props.items.slice().reverse();
    const list = reversed.map((item) =>
        <div key={item}>
            <TimeChooser itemid={item} prefix1={'first'} prefix2={'second'} delete={props.delete}/>
        </div>
    );
    return (
        <>
            {list}
        </>
    )
}

class TimeList extends React.Component {
    constructor(props) {
        super(props);
        if (chrome.storage) {
            this.state = { timelist: [] };
            chrome.storage.local.get(key, res => {
                let list = res[key] || [];
                console.log(list);
                this.setState({ timelist: list });
            }) 
        }
        else {
            let list = JSON.parse(window.localStorage.getItem(key)) || [];
            this.state = { timelist: list };
        }
    }


    addNew = () => {
        let curr = this.state.timelist;
        curr.push(Date.now().toString());
        this.setState({timelist: curr});
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
        this.setState({timelist: []});
    }
    
    deleteItem = (id) => {
        console.log("deleting id: " + id);
        let curr = this.state.timelist;
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
        this.setState({timelist: curr});
    }

    render() {
        return (
            <>
                <button onClick={this.addNew}>Add New</button>
                <button onClick={this.clearAll}>Clear All</button>
                <RenderList items={this.state.timelist} delete={this.deleteItem}/>
            </>
        );
    }
}

export default TimeList;