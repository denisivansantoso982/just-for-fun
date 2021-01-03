import React, { Component } from 'react';
import axios from 'axios';
import Splash from '../components/splash';

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true
    }
  }

  async componentDidMount() {
    try {
      var response  = await axios({
        method: 'GET',
        baseURL: 'https://jsonplaceholder.typicode.com/photos',
        timeout: 60000,
        params: 1
      });
      for (var i=0; i<response.data.length; i++) {
        this.state.data.push(response.data[i]);
      }
      this.setState({
        loading: false
      });
    } catch (error) {
      alert(error.message);
    }
  }

  render() {
    var {loading, data} = this.state;
    return (
      loading ? <Splash/>
      : <div className="App">
        <h1>Landing Page</h1>
        <p>Data length : {data.length}</p>
      </div>
    );
  }
}

export default LandingPage;