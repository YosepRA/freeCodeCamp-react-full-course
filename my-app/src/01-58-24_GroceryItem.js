import React from 'react';

class GroceryItem extends React.Component {
  render() {
    const { item } = this.props;
    return <li>{item}</li>;
  }
}

export default GroceryItem;
