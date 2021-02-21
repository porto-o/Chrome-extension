import React from 'react';
import Textarea from '../Textarea/Textarea';
import Time from '../Time/Time';

function RenderList(props) {
    console.log(props.values);
    const reversed = props.values.slice().reverse();
    console.log(reversed);
    const listitems = reversed.map((item) => 
        <div className="Textarea" key={item}>
            <Textarea itemid={item} focus={item === reversed[0]}/>
            <Time itemid={item}/>
        </div>
    );
    console.log(listitems);
    return (
        <div>
            {listitems}
        </div>
    );
}

class List extends React.Component {
    constructor(props) {
        super(props);
        if (chrome.storage) {
            this.state = {currentlist: this.props.current};
            chrome.storage.local.get('itemlist', res => {
                let items = res['itemlist'] || [];
                console.log(items);
                this.setState({currentlist: items});
            });
        }
        else {
            let items = JSON.parse(window.localStorage.getItem('itemlist')) || [];
            console.log(items);
            this.state = {currentlist: items};
            console.log(this.state);
        }
    }
    addNew = () => {
        let curr = this.state.currentlist;
        curr.push(Date.now().toString());
        this.setState({currentlist: curr});
        if (chrome.storage) {
            chrome.storage.local.set({['itemlist']: curr});
        }
        else {
            window.localStorage.setItem('itemlist', JSON.stringify(curr));
        }
    }

    clearStorage = () => {
        if (chrome.storage) {
            chrome.storage.local.clear();
        }
        else {
            window.localStorage.clear();
        }
        window.location.reload();
    }
    
    render() {
        return (
            <div>
                <button onClick={this.addNew}>Add new</button>
                <button onClick={this.clearStorage}>Clear Storage</button>
                <RenderList values={this.state.currentlist} />
            </div>
        )
    }
}

export default List;