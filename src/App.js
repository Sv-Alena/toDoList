import './App.css';
import { Component } from 'react';
import { ToDoList } from './ToDoList';
class App extends Component{

  render(){
    return(
    <div>
      <div className="container">
        <h1>МОЙ ПЛАН НА ДЕНЬ</h1>
      </div>
        <ToDoList />
    </div>
    )
  }
}



export default App;
