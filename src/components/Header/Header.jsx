import { Component } from "react";
import Moon from "../img/moon.svg"
import Sunny from "../img/sunny.svg"
import "./Header.scss"
class Header extends Component{
  state = {
    activeClass: false
  }
  showClass = () => {
    this.setState((prevState) => {
      let body = document.querySelector('body')
      return{
        whitecolor: body.classList.add('active'),
        activeClass: prevState.activeClass = true
      }
    })
  }

  hiddenClass = () => {
    this.setState((prevState) => {
      let body = document.querySelector('body')
      return{
        color: body.classList.remove('active'),
        activeClass: prevState.activeClass = false
      }
    })
  }
  render(){
    const {activeClass} = this.state
    return(
      <header>
        <div className="header container">
          <span>TODO</span>
          <div className="dark__linght" onClick={activeClass === false ? this.showClass : this.hiddenClass}>
            <div className="moon">
              <img src={Moon} alt="Moon" />
            </div>
            <div className="sunny">
              <img src={Sunny} alt="Sunny" />
            </div>
          </div>
        </div>
      </header>
    )
  }
}


export default Header