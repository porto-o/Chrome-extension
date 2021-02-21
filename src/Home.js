import React from 'react';
import LoginGoogle from './components/LoginGoogle/LoginGoogle';

class Home extends React.Component {
    render() {
        return (
            <>
                <h1 style={{color:"white"}}>Homepage, nothing to see here :)</h1>
                <LoginGoogle/>
            </>
        );
    }
}
export default Home;