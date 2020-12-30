import React, { Component } from 'react';
import axios from 'axios';
import Splash from '../components/splash';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      data: [],
    }
  }

  async componentDidMount() {
    try {
      var response = await axios({
        method: 'GET',
        baseURL: 'https://jsonplaceholder.typicode.com/photos',
        timeout: 10000
      });
      for (var i=0; i<response.data.length; i++) {
        console.log(response.data[i]);
        this.state.data.push(response.data[i]);
      }
      this.setState({
        loading: false
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    var {loading, data} = this.state;
    var datas = data.length > 0 && data.map((item, index) => (
      <div className="list-data" key={item.id} onClick={() => this.setState({status: item.title}) }>
        <p className="index">{++index}.</p>
        <p className="title">{item.title}</p>
      </div>
    ));
    return (
      loading ? <Splash/>
      : <div className="App">
        <h1>Home Page</h1>
        {
          datas
        }
        <br/>
      </div>
    );
  }
}

export default Home;