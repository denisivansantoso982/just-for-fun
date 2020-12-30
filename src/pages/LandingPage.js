import React, { Component } from 'react';
import axios from 'axios';
import Splash from '../components/splash';

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    }
  }

  async componentDidMount() {
    try {
      var response  = await axios({
        method: 'GET',
        baseURL: 'https://jsonplaceholder.typicode.com/posts',
        timeout: 60000,
        params: 1
      });
      console.log(response)
      this.setState({
        loading: false
      });
    } catch (error) {
      alert(error.message);
    }
  }

  render() {
    var {loading} = this.state;
    return (
      loading ? <Splash/>
      : <div className="App">
        <h1>Landing Page</h1>
      </div>
    );
  }
}

export default LandingPage;