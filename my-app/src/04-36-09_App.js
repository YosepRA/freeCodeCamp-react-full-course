import React from 'react';
import Header from './components/04-36-09_Header';
import MemeGenerator from './components/04-36-09_MemeGenerator';
import './04-36-09_main.css';

function App() {
  return (
    <div className="container">
      <Header />

      <main className="page-content">
        <MemeGenerator />
      </main>
    </div>
  );
}

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {};
//   }

//   render() {
//     return (
//       <div>
//         <div className="page-title">
//           <h1>Meme Generator</h1>
//         </div>

//         <div className="page-content"></div>
//       </div>
//     );
//   }
// }

export default App;
