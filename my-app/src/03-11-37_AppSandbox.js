import React from 'react';
import Message from './components/03-11-37_Message';
import './03-11-37_main.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      unreadMessages: [
        'The newest anime is coming up',
        "You should check out today's garage sale"
      ]
    };
  }

  render() {
    const unreadMessages = this.state.unreadMessages.map(msg => {
      return <Message message={msg} />;
    });

    return (
      <div>
        <header className="page-title">
          <h1>Conditional Rendering Part 2</h1>
        </header>

        <section className="page-content">
          <section className="unread-messages-count">
            <h2>
              You have {this.state.unreadMessages.length} unread messages.
            </h2>
          </section>

          <section className="unread-messages-list">{unreadMessages}</section>
        </section>
      </div>
    );
  }
}

export default App;
