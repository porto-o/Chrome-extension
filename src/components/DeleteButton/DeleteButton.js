import React from 'react';

class DeleteButton extends React.Component {
    handleDelete = () => {
        if (chrome.storage) {
            chrome.storage.local.remove(this.props.taskprefix + this.props.itemid);
            chrome.storage.local.remove(this.props.timeprefix + this.props.itemid);
        }
        else {
            window.localStorage.removeItem(this.props.taskprefix + this.props.itemid);
            window.localStorage.removeItem(this.props.timeprefix + this.props.itemid);
        }
        this.props.delete(this.props.itemid);
    }
    render() {
        return (
            <button onClick={this.handleDelete}>Delete</button>
        );
    }
}
export default DeleteButton;