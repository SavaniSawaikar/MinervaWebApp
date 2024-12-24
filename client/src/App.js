//App.js
import React from 'react';
import Tabs from "./components/Tabs";
//import axios from 'axios';
import './App.css';
import logo from './images/logo.png'

// //data will be the string we send from our server
// const apiCall = () => {
//   axios.get('http://localhost:8080')
//     .then((response) => {
//       // This console.log will be in our frontend console
//       console.log("DATA IS: ", response.data);
//       console.log("Got data");
//     })
//     .catch((error) => {
//       console.error('Error making API call:', error);
//     });
// };

function App() {
  return (
    <div class='App'>
    <div class='navbar' id='nav-bar'>
      <div class='logo'><img alt="logo" src={logo} width={175} height={100} /></div>
      <Tabs>
        <div label="ABOUT"></div>
        <div label="SCHEDULE"></div>
        <div label="COMMITTEE"></div>
        <div label="SPONSORS"></div>
        <div label="FAQs"></div>
        <div label="TICKETS"></div>
      </Tabs>
    </div>
    </div>
  );
}

export default App;