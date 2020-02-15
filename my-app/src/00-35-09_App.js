import React from 'react';
import Nav from './components/00-35-09_Nav';
import Content from './components/00-35-09_Content';
import Footer from './components/00-35-09_Footer';

// It's conventional to have one main file (i.e. gateway) for all components. Imagine App will be ~
// ~ the root of the page just like how <html> in DOM tree is.
function App() {
  return (
    <div>
      <Nav />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
