
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import DieuHuongURL from './router/DieuHuongURL'
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router >
        <div className="App">
          <Nav />
          <DieuHuongURL />
        <div className="mt-5 mb-5">-----</div>
          <Footer />
        </div>
      </Router>
    )
  }
}


export default App;
