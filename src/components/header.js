import React, { Component} from 'react'
import { Link } from 'react-router-dom'

class Header extends Component{
  render(){
    return(
      <nav>
        <ul>
          <li><Link className="App-link" to="/just-for-fun/home">Home</Link></li>
          <li><Link className="App-link" to="/just-for-fun/landingPage">Landing Page</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Header