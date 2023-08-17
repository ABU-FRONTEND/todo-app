import { Component } from "react";
import TodoListItem from "../TodoListItem/TodoListItem";

import "./TodoList.scss"

class TodoList extends Component{
  clearBtn = () => {
    let btnClear = document.querySelector(".clear__todo")
    btnClear.classList.add("active")
    let list = document.querySelectorAll("li")
    list.forEach((li) => {
      li.style.display = "none"
      // btnClear.classList.remove("active")
    })
  }
  render(){
     const { todos, changeTodosStatus, deleteTodo, clearTrueTodo } = this.props

    return(
      <ul>{
          todos.map((todo) =>{
            const {title, isChecked, id} = todo
            return <TodoListItem 
             key = {id}
             id = {id}
             changeTodosStatus={(status)=> changeTodosStatus(id, status)}
             deleteTodo={()=>{
               deleteTodo(id)
             }}
             title = {title}
             isChecked={isChecked}/>
          })
        }
        <div className="todo__info">
             <div className="info"><span>{
                todos.filter((e) => !e.isChecked).length
             }</span> items left</div>
          <div className="todo__check">
                <span className="active">All</span>
                <span>Active</span>
                <span>Completed</span>
          </div>
             <div className="clear__todo" onClick={() => { clearTrueTodo() }}>Clear Completed</div>
        </div>
      </ul>
    )
  }
}

export default TodoList