import React from 'react'
import './Options.css'
import TimeList from '../../components/TimeList/TimeList';

class Options extends React.Component {
    render() {
        return (
            <div className="App">
                <h1 style={{color: 'white'}}>Scheduling page, coming soon!</h1>
                <TimeList />
            </div>
        );
    }
}

export default Options;
