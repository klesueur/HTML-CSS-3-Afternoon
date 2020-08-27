import React, {Component} from 'react'
import './components/reset.css'
import './App.css'
import NavBar from './components/NavBar'

export default class App extends Component {



  render() {
    return(
      <div className='body'> 
        <NavBar />

        <div className='content'>
          <h1 className='grayscale'> GRAYSCALE </h1>
          <div> 
            <h2 className='description'> 
              <p>A free, responsive, one page Bootstrap </p>
              <p>theme created by Start Bootstrap </p>
            </h2>
          </div>
          <button className='start-button'> GET STARTED </button>
        </div>
        
      </div>
    )
  }
}