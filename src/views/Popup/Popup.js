import React from 'react'
import './Popup.css'
import TaskItem from '../../components/TaskItem/TaskItem';
import LoginGoogle from "../../components/Forms/LoginGoogle";

class Popup extends React.Component {
    render()  {
        return (
            <div className="App">
                <h1 style={{margin:0 + "px"}}>Hello, world :))!</h1>
                <LoginGoogle/>
                <TaskItem itemid={'testing'} focus={false}/>
            </div>
        );
    }
}

export default Popup;
