import React, {Component} from 'react'
import './Navbar.css' 


export default class NavBar extends Component {


    render() {
        return(
            <div>
                <div className='navbar'>
                    <h1 className='app-name'> Start Bootstrap </h1>
                    <div className='navbar-button-container'>
                        <button className='nav-button'> About </button>
                        <button className='nav-button'>  Projects </button>
                        <button className='nav-button'> Contact </button>
                    </div>
                </div>
            </div>
        )
    }
}