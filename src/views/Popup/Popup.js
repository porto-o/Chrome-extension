import React from 'react'
import './Popup.css'
import Textarea from '../../components/Textarea/Textarea';
import Time from '../../components/Time/Time';
import List from '../../components/List/List';

class Popup extends React.Component {
    render()  {
        return (
            <div className="App">
                <h1 style={{margin:0 + "px"}}>Hello, world!</h1>
                <List current={[]}/>
            </div>
        );
    }
}

export default Popup;
