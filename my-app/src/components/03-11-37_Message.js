import React from 'react';

class Message extends React.Component {
  render() {
    return (
      <div className="unread-messages-list__msg">{this.props.message}</div>
    );
  }
}

export default Message;
