import React from 'react';
import './App.css';
import Form from './components/Form';
import RegisterForm from './components/RegisterForm'

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <p style={{color: 'red'}}>Task Form</p>
    <div>
       
       <Form />
    </div>
      </header>
      <RegisterForm/>
      <div className="wrapper">
      
      </div>
    </div>
  );
}

export default App;