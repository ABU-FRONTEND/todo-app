import { Component } from "react";
import CloseIcon from "../img/close.svg"

class TodoListItem extends Component{
   showCheckbox = (e) =>{
      this.props.changeTodosStatus(e.target.checked)
   }
  render(){
     const { title, isChecked, id, deleteTodo } = this.props
    return(
      <li>
        <input type="checkbox" name="" defaultChecked={isChecked}
        id={id}
        onChange={this.showCheckbox} />
        <label htmlFor={id}></label>
        <span>{title}</span>
        <img src={CloseIcon} onClick={deleteTodo} alt="Close"/>
      </li>
    )
  }
}

export default TodoListItem