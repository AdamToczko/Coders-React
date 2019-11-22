// 2. z podanego htmla wytworzyć aktywnie działające komponenty funkcyjne
//const htmlButton = (<div><button>Wciśnij mnie</button></div>)

// ten komponent ma otrzymywać propsy "label" i "onButtonClick"
// "label" ma być wyrenderowany jako label przycisku
// "onButtonClick" ma być przyczepiony do eventu onclick tego buttona
// oraz ma logować do konsoli string "kliknięto przycisk"
import React from 'react'
import '../App.css';


const Button = props => {
    const { label,onButtonClick } = props;
    return(
    <div>
        <button className="App-btn" onClick={onButtonClick}>
            {label}</button>
        </div>
        );
}

export default Button