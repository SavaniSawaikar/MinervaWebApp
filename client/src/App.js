//App.js
import React from 'react';
import Tabs from "./components/Tabs";
//import axios from 'axios';
import './App.css';

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
    <div>
      <h1>Tabs Demo</h1>
      <Tabs>
        <div label="Gator">
          See ya later, <em>Alligator</em>!
        </div>
        <div label="Croc">
          After 'while, <em>Crocodile</em>!
        </div>
        <div label="Sarcosuchus">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Tabs>
    </div>
  );
}

export default App;