import React from 'react';
import './01-17-35_main.css';
import ContactCard from './components/01-17-35_ContactCard';

// We can give a function component a prop (custom properties). These props will be included to ~
// ~ the component as an object containing key-value pair based on what's described in the call.
// This behaves exactly like function arguments.
function App() {
  return (
    // <div className="contacts">
    //   <ContactCard
    //     imgUrl="./images/sea.jpg"
    //     name="Adriatic Sea"
    //     phone="(022) 100 2000"
    //     email="order@adriatic.sea"
    //   />

    //   <ContactCard
    //     imgUrl="./images/sea.jpg"
    //     name="Black Sea"
    //     phone="(022) 200 3000"
    //     email="order@black.sea"
    //   />

    //   <ContactCard
    //     imgUrl="./images/sea.jpg"
    //     name="Red Sea"
    //     phone="(022) 300 4000"
    //     email="order@red.sea"
    //   />

    //   <ContactCard
    //     imgUrl="./images/sea.jpg"
    //     name="Atlantic Ocean"
    //     phone="(022) 400 5000"
    //     email="order@atlantic.ocean"
    //   />

    //   <ContactCard
    //     imgUrl="./images/sea.jpg"
    //     name="Pacific Ocean"
    //     phone="(022) 500 6000"
    //     email="order@pacific.ocean"
    //   />
    // </div>

    // Sometimes, it's useful to only provide one prop for a component. This can be useful when data comes ~
    // ~ in JSON format. Also, to list a lot of properties can be tedious.
    <div className="contacts">
      <ContactCard
        contact={{
          imgUrl: './images/sea.jpg',
          name: 'Adriatic Sea',
          phone: '(022) 100 2000',
          email: 'order@adriatic.sea'
        }}
      />
      <ContactCard
        contact={{
          imgUrl: './images/sea.jpg',
          name: 'Black Sea',
          phone: '(022) 200 3000',
          email: 'order@black.sea'
        }}
      />
      <ContactCard
        contact={{
          imgUrl: './images/sea.jpg',
          name: 'Red Sea',
          phone: '(022) 300 4000',
          email: 'order@red.sea'
        }}
      />
    </div>
  );
}

export default App;
