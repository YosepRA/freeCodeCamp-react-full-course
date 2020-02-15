import React from 'react';

class NameList extends React.Component {
  render() {
    let nameComponents;
    if (this.props.names)
      nameComponents = this.props.names.map(name => <li>{name}</li>);

    return (
      <div>
        <h3>Member list:</h3>
        <ul>{nameComponents}</ul>
      </div>
    );
  }
}

export default NameList;
