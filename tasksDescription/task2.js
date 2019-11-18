import React from 'react';
// 1. z podanego htmla wytworzyć aktywnie działające komponenty stanowe
const htmlInput = (<div>
        <input placeholder='Wpisz tekst'/>
        </div>)

class Input extends Component{
    constructor(){
        super()
    // w tym komponencie wartosc inputa ma być przechowywana w stanie pod kluczem "inputValue"
    // ten komponent ma mieć metodę onInputChange która loguje zmiany wartości do konsoli
    }
    render(){}
}



// 2. z podanego htmla wytworzyć aktywnie działające komponenty funkcyjne
const htmlButton = (<div><button>Wciśnij mnie</button></div>)

// ten komponent ma otrzymywać propsy "label" i "onButtonClick"
// "label" ma być wyrenderowany jako label przycisku
// "onButtonClick" ma być przyczepiony do eventu onclick tego buttona oraz ma logować do konsoli string "kliknięto przycisk"
const Button = ()=>{}




// 3. z podanego htmla wytworzyć aktywnie działające komponenty funkcyjne i stanowe
const htmlTodoItem = (<li><h3>treść todo</h3></li>)
const htmlTodoList = (<ul>{/* tutaj mają być wyrenderowane elementy TodoItem dla każdego todosa */}</ul>)

// ten komponent funkcyjny ma przyjmować props "title"
const ToDoItem = ()=>{}

// ten komponent stanowy ma mieć stan "imBusy" oraz "todos"
// ten komponent ma mieć zamontowanego axiosa z getem po wszystkie todosy
// w trakcie gdy wykonywane jest zapytanie przez axiosa ma mieć pokazany "loading"
// jeśli zapytanie zostanie wykonane ze statusem 200 komponent ma wyświetlić listę todosów w komponentach TodoItem
class ToDoList extends Component {
    constructor(){
        super()
    }
    componentDidMount(){}
    render(){}
}
