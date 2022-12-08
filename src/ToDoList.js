import { Component } from "react";
export class ToDoList extends Component{

    state={
userInput: "",
toDoList: []
    }

onChangeEvent(e){
    this.setState({userInput:e})
}

addBtn(input){
    if(input===''){
        alert('Пустая строка!!!')
    }
    else{
    let listArray = this.state.toDoList;
    listArray.push(input)
    this.setState({toDoList: listArray,userInput:''})
}
}

crosList(e){
const li = e.target;
li.classList.toggle('crossed')
}

deleteBtn(){
    let listArray = this.state.toDoList;
    listArray = [];
    this.setState({toDoList:listArray})
}

enter(e){
e.preventDefault()
}

    render(){
        return (
            <form onSubmit={this.enter}>
            <div>
                <div className="container">
                    <input typy='text' onChange={(e) =>{this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput}/>
                </div>
                
                <ol>
                    {this.state.toDoList.map((item,index) =>(
                        <li onClick={this.crosList} key={index}>
                        {item}
                        </li>
                    ))}
                </ol>
                <div className="container">
                    <button className="add" onClick={() => {this.addBtn(this.state.userInput)}}>&#10133;</button>
                    <button className="delete" onClick={() =>{this.deleteBtn()} }>&#10006;</button>
                </div>
            </div>
            </form>
        )
    }
}