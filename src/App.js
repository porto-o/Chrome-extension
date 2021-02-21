import React from 'react';
import Popup from './views/Popup/Popup';
import Options from './views/Options/Options';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
class App extends React.Component {
    render() {
        return (
            <div>
                <Switch> {/* The Switch decides which component to show based on the current URL.*/}
                    <Route exact path='/options' component={Options}></Route>
                    <Route exact path='/popup' component={Popup}></Route>
                    <Route exact path='/' component={Home}></Route>
                </Switch>
            </div>
        )
    }
}
export default App;