import React from 'react';

class MarkDone extends React.Component {
    handleMark = () => {
        this.props.markDone(true);
    }
    render() {
        return (
            <button onClick={this.handleMark}>Mark Done</button>
        );
    }
}
export default MarkDone;