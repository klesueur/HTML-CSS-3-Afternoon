import React, {Component} from 'react'
import './components/reset.css'
import './App.css'
import NavBar from './components/NavBar'

export default class App extends Component {



  render() {
    return(
      <div className='body'> 
        <NavBar />

        <div>
          <h1> GRAYSCALE </h1>
          <div> 
            <h2> A free, responsive, one page Bootstrap</h2>
            <h2> theme created by Start Bottstrap </h2>
          </div>
          <button> GET STARTED </button>
        </div>
        
      </div>
    )
  }
}