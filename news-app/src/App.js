import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    let pageSize = 6;
    let country="us";


    return (
      <div>
        <Router>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={4}
      />
          <Routes>
                
            <Route exact  path="/" element={<News  setProgress={this.setProgress}  key="general"  category="general" pageSize={pageSize} country={country}/>} />
            <Route exact  path="/general" element={<News  setProgress={this.setProgress}  key="general"  category="general" pageSize={pageSize} country={country}/>} />
            <Route exact path="/science" element={<News  setProgress={this.setProgress}  key="science"  category="science" pageSize={pageSize} country={country}/>} />
            <Route exact path="/technology" element={<News  setProgress={this.setProgress}  key="technology" category="technology" pageSize={pageSize} country={country}/>} />
            <Route exact path="/sports" element={<News  setProgress={this.setProgress} key="sports" category="sports" pageSize={pageSize} country={country}/>} />
            <Route exact path="/health" element={<News  setProgress={this.setProgress} key="health" category="health" pageSize={pageSize} country={country}/>} />
            <Route exact path="/general" element={<News  setProgress={this.setProgress} key="general" category="general" pageSize={pageSize} country={country}/>} />
            <Route exact path="/entertainment" element={<News  setProgress={this.setProgress} key="entertainment" category="entertainment" pageSize={pageSize} country={country}/>} />
            <Route exact path="/business" element={<News  setProgress={this.setProgress} key="business" category="business" pageSize={pageSize} country={country}/>} />
              
          </Routes>
        </Router>
      
        
      </div>
    );
  }
}
