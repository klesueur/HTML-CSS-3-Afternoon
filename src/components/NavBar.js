import React, {Component} from 'react'
import './Navbar.css' 


export default class NavBar extends Component {
    constructor() {
        super() 

        this.state = {
            display: false
        }
        
        this.handleDropdown = this.handleDropdown.bind(this)
    }

    handleDropdown() {
        this.setState({
            display: !this.state.display
        })
    }

    render() {
        console.log(this.state.display)
        return(
            <div>
                <div className='navbar'>
                    <h1 className='app-name'> Start Bootstrap </h1>

                    <div className='hamburger' onClick={this.handleDropdown}>
                        Menu &#9776; 
                    </div>

                    <div className='navbar-button-container'>
                        <button className='nav-button'> About </button>
                        <button className='nav-button'>  Projects </button>
                        <button className='nav-button'> Contact </button>
                    </div>

                    <div >
                        <button className='nav-button'> About </button>
                        <button className='nav-button'>  Projects </button>
                        <button className='nav-button'> Contact </button>
                    </div>

                </div>
            </div>
        )
    }
}