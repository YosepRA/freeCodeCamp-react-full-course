import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    const today = new Date(2020, 2, 10, 1);
    const hour = today.getHours();
    let timeOfDay;

    if (hour < 12) timeOfDay = 'morning';
    else if (hour >= 12 && hour < 18) timeOfDay = 'afternoon';
    else timeOfDay = 'night';

    return <h2>Good {timeOfDay} to you, sir or madam.</h2>;
  }
}

export default Greeting;
