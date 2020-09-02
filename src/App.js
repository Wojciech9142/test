import React from 'react';
import axios from "axios";
import './App.css';

axios.get("products.json")
  .then(response => console.log(response.data))
  .catch(error => console.error(error));

function App() {
  return (
    <h1>Hello world!</h1>
  );
}

export default App;
