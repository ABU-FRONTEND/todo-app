import { Component } from 'react';
import './App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';


class App extends Component{
  render(){
    return(
      <>
      <body>
        <Header />
        <Main />
          </body>
      </>
    )
  }
}

export default App;
