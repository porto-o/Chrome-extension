import React from 'react'
import './Popup.css'
import TaskItem from '../../components/TaskItem/TaskItem';
import LoginGoogle from '../../components/LoginGoogle/LoginGoogle';

class Popup extends React.Component {
    newPage = () => {
        chrome.tabs.create({url: chrome.runtime.getURL('test.html')})
    }
    render()  {
        return (
            <div className="App">
                <button onClick={this.newPage}>Test page</button>
                <LoginGoogle />
                <h1 style={{margin:0 + "px"}}>Hello, world :))!</h1>
                <TaskItem itemid={'testing'} focus={false}/>
            </div>
        );
    }
}

export default Popup;
