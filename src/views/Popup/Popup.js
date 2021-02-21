import React from 'react'
import './Popup.css'
import TaskList from '../../components/TaskList/TaskList';
import LoginGoogle from '../../components/LoginGoogle/LoginGoogle';
import Register from "../../components/Forms/Register";

class Popup extends React.Component {
    newPage = () => {
        chrome.tabs.create({url: chrome.runtime.getURL('test.html')})
    }
    render()  {
        return (
            <div className="App">
                <h1 style={{margin:0 + "px"}}>Hello, world :))!</h1>
                <Register/>
                <TaskList />
            </div>
        );
    }
}

export default Popup;
