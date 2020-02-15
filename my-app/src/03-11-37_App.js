import React from 'react';
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
    return (
      <div>
        <header className="page-title">
          <h1>Conditional Rendering Part 2</h1>
        </header>

        <section className="page-content">
          {this.state.unreadMessages.length > 0 && (
            <h2>
              You have {this.state.unreadMessages.length} unread messages.
            </h2>
          )}
        </section>
      </div>
    );
  }
}

export default App;
