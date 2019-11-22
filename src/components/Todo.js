// 3. z podanego htmla wytworzyć aktywnie działające komponenty funkcyjne i stanowe
// const htmlTodoItem = (<li><h3>treść todo</h3></li>)
// const htmlTodoList = (<ul>{/* tutaj mają być wyrenderowane elementy TodoItem dla każdego todosa */}</ul>)

// // ten komponent funkcyjny ma przyjmować props "title"
// const ToDoItem = ()=>{}

// ten komponent stanowy ma mieć stan "imBusy" oraz "todos"
// ten komponent ma mieć zamontowanego axiosa z getem po wszystkie todosy
// w trakcie gdy wykonywane jest zapytanie przez axiosa ma mieć pokazany "loading"
// jeśli zapytanie zostanie wykonane ze statusem 200 komponent ma wyświetlić listę todosów w komponentach TodoItem
import React from "react";
import axios from "axios";
import LoaderTo from "./Loader";

const ToDoItem = props => {
    const { title } = props;
  
    return (
      
        <div>{title}</div>
    )
  };

  
class ToDoList extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        todos: [],
        imBusy: true,
      };
    }
    componentDidMount() {
      axios
        .get("http://195.181.210.249:3000/todo/")
        .then(response => {
          const toDoList = response.data;
          this.setState({
            todos: toDoList,
            imBusy: false
          });
        })
    }
  
    render() {
      const { todos, imBusy } = this.state;
  
      if (imBusy) {
        return (
          <LoaderTo />
        )
        } else {
          return (
            <ul>
              {todos.map(todo => {
                return <ToDoItem title={todo.title}/>;
              })}
            </ul>
          );
        }
      }
    }
  
  
  export default ToDoList;
  