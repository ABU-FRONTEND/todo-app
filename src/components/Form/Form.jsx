import { Component } from "react";
import TodoList from "../TodoList/TodoList";

import "./Form.scss"

class Form extends Component{
  state = {
    todos: [
    ],
    todoIdCount: 0

   }
   addTodo = (todoTitle) => {
    const todoData = {
      id: this.state.todoIdCount+1,
      title: todoTitle,
      isChecked: false
    }
    this.setState((prevState) => {
      return{
        todos: [todoData, ...prevState.todos],
        todoIdCount: prevState.todoIdCount+1
      }
    })
  }
  handleInput = (e) => {
    this.setState({title: e.target.value})
  }
  errorInput = () => {
    let error = document.querySelector(".error")
    if(this.state.title == ""){
      error.innerHTML = "Siz hech narsa yozmadingiz"
    }else{
      error.innerHTML = ""
      this.addTodo(this.state.title)
      this.setState({title: ""})
    }
  }
  submitForm = (e) => {
    e.preventDefault()
    this.errorInput()
  }
  changeTodosStatus = (id, status)=>{
      const {todos} = this.state
      const todoData = todos.map((item, ind)=>{
         if(item.id !== id){
            return item
         }
         else{
            return {
               ...item,
               isChecked:status
            }
         }
      })
      this.setState(() => {
         return {
            todos:todoData
         }
      })
  }
  deleteTodo = (id) => {
   this.setState(({todos}) => {
      return {
         todos: todos.filter((item)=>{
            return item.id !== id
         })
      }
   })
  }
  clearTrueTodo = () =>{
      this.setState(({todos}) =>{
         return {
            todos: todos.filter((item) =>{
               return item.isChecked !== true
            })
         }
      })
  }
  
  
  render(){
    const {title, todos} = this.state
    return(
      <form action="#" onSubmit={this.submitForm}>
        <div className="create__todo">
          <div className="create">
            <div className="checkbox">
              <input type="checkbox" name="" id="radio1" />
              <label htmlFor="radio1"></label>
            </div>
            <input type="text" placeholder="Create a new todo…" value={title} onChange={this.handleInput} />
          </div>
          <div className="error"></div>
        </div>
          <TodoList 
          todos={todos} 
          changeTodosStatus={this.changeTodosStatus}
          deleteTodo={this.deleteTodo}
          clearTrueTodo={this.clearTrueTodo}/>
      </form>
    )
  }
}

export default Form