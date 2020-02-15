import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  // === LIFECYCLE METHODS === //

  // 'componentDidMount' will be called at the first component render.
  // The most use case for this lifecycle method is to do an API call.
  componentDidMount() {
    console.log('componentDidMount');
  }

  // 'shouldComponentUpdate' will decide whether to update a component.
  // React will automatically re-render everything regardless of whether it needs one or not. Therefore ~
  // ~ this method will allow developer to optimize the app. We can implement a logic here for component ~
  // ~ to decide whether it needs an update or not.
  // It will receive nextProps and nextState to help in the decision making.
  shouldComponentUpdate(nextProps, nextState) {
    // The method should return a boolean.
    // True if the component needs to be re-render.
    // And false otherwise.
  }

  // 'componentWillUnmount' will be called before the component is destroyed.
  // This is the place to do cleanup to everything we set up and that might lead to cluttered DOM.
  // One of the common case is event listeners. A random, unused listeners will only bug down the performance.
  componentWillUnmount() {}

  // The method should return an updated state object based on props.
  // But this method is rarely used (and possibly buggy). Because the case where we use this method is when we need ~
  // ~ to use the incoming state from parent component and set this component's OWN STATE based on those props.
  static getDerivedStateFromProps(props, state) {}

  // 'getSnapshotBeforeUpdate' will allow us to create a 'backup' of the current way things are (the snapshot of the ~
  // ~ current 'situation'). A backup here is just some kind of data, often an object containing information.
  getSnapshotBeforeUpdate() {}

  // === DEPRECARED LIFECYCLE METHODS === //

  // 'componentWillReceiveProps' will run whenever a child component receives props from parent component.
  // Given the next props, it can be used to check whether the old props are different from the new one. ~
  // ~ And if so, then we can do something with the new props.
  // This lifecycle method is DEPRECATED, do not use it but just understand how it works because it is ~
  // ~ replaced by other method (getDerivedStateFromProps)
  // componentWillReceiveProps(nextProps) {}

  // componentWillMount() {}

  // componentWillUpdate() {}

  // ======================================================================================================== //

  render() {
    return (
      <div>
        <h1>React Lifecycle Methods</h1>
      </div>
    );
  }
}

export default App;
