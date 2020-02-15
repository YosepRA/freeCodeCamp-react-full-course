import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false
    };
  }

  // Using 'componentDidMount' to fetch an API. This is one of the most used case using this lifecycle method.
  componentDidMount() {
    // Set the loading state to true.
    this.setState({ isLoading: true });
    // Using timeout to replicate the behavior of an API call because I'm using a local data right here.
    setTimeout(() => {
      fetch('./data/members.json')
        .then(res => res.json())
        .then(members => {
          console.log('Member list: ', members);
          this.setState({
            isLoading: false,
            members
          });
        });
    }, 1500);
  }

  render() {
    let membersList;
    if (this.state.members) {
      membersList = this.state.members.map(({ id, name, age }) => (
        <h3 key={id}>
          {name} - {age}
        </h3>
      ));
    }

    return (
      <div>
        <header className="page-title">
          <h1>Fetching data from an API</h1>
        </header>

        <section className="page-content">
          {console.log(this.state.isLoading)}
          {this.state.isLoading ? 'Loading your data...' : membersList}
        </section>
      </div>
    );
  }
}

export default App;
