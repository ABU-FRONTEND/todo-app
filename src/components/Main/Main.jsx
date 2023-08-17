import { Component } from "react";
import Form from "../Form/Form";


import "./Main.scss"

class Main extends Component{
  
  render(){
    return(
      <main>
        <div className="main__content container">
          <Form />
          <span>Drag and drop to reorder list</span>
        </div>
      </main>
    )
  }
}

export default Main