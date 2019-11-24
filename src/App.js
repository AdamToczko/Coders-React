import React from 'react';
import './App.css';
import Form from './components/Form';
import RegisterForm from './components/RegisterForm'

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <p style={{color: 'red'}}>Task 3.1 Form</p>
    <div>
       <Form />
    </div>
    <br></br>
    <p style={{color: 'red'}}>Task 3.2 Registration </p>
    <div>
      <RegisterForm/>
      </div>
      <div className="wrapper"></div>
      </header>
      
      
      
    </div>
  );
}

export default App;