import React from 'react';
import './00-48-17_main.css';

function App() {
  return (
    <div>
      <label>
        <input type="checkbox" name="grocery" value="apple" />
        Apple
      </label>

      <label>
        <input type="checkbox" name="grocery" value="potato" />
        Potato
      </label>

      <label>
        <input type="checkbox" name="grocery" value="orange" />
        Orange
      </label>

      <label>
        <input type="checkbox" name="grocery" value="carrot" />
        Carrot
      </label>

      <label>
        <input type="checkbox" name="grocery" value="pepper" />
        Pepper
      </label>
    </div>
  );
}

export default App;
