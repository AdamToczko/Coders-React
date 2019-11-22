import React from 'react';
import './App.css';
import Button from './components/Button'
import TableTemplate from './components/Table';
import Chart from './components/Chart'
import Chart2 from './components/Chart2'
import Input from './components/Input'
import Todo from './components/Todo'

function App() {
  return (
    <div className="App">
    <header className="App-header">
    <p style={{color: 'red'}}>Task Button </p>
      <Button 
      label={'Wciśnij mnie'}
      onButtonClick={(event)=>{
        console.log('kliknięto przycisk');
      }
      }
      />
      <p style={{color: 'red'}}>Task input  </p>
      <Input />
        
      <p style={{color: 'red'}}>Task Todo
        zainstalowalem loader z semantic Ui ale zeby go 
        zobaczyc trzeba zmienic netwoork na slow 
        Lista ponizej z serwera z projektu z JS </p>
      <Todo />
      </header>
      <TableTemplate />
      <div className="wrapper">
        <Chart />
        <Chart2 />
      </div>
    </div>
  );
}

export default App;
