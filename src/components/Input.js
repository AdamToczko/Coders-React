// 1. z podanego htmla wytworzyć aktywnie działające komponenty stanowe
// w tym komponencie wartosc inputa ma być przechowywana w stanie pod kluczem "inputValue"
// ten komponent ma mieć metodę onInputChange która loguje zmiany wartości do konsoli
// const htmlInput = (
//     <div>
//     <input placeholder='Wpisz tekst'/>
//     </div>)

import React from 'react'

class Input extends React.Component{
constructor(props){
    super(props)

    this.state = {inputValue: ''}
}

onInputChange =(event) => {
    const {value} = event.target

    this.setState({inputValue: value})

    console.log({value});
}

render(){

const {inputValue} = this.state;

return (
    <div>
    <input type='text' placeholder='Wpisz tekst' value={inputValue} onChange={this.onInputChange} />
    <span> Pokaz co wpisuje:  <span style={{color: 'yellow'}}>{inputValue}</span> </span>
    </div>
)

}
}


export default Input;
