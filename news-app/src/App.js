import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import LoadingBar from 'react-top-loading-bar'



const App =()=> {

  const [progress, setprogress] = useState(0)
  let newsapi="8c5e5ec518bc4fe29c8f9469a9bd9d1c"
 
    let pageSize = 6;
    let country="us";


    return (
      <div>
        <Router>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={progress}
        height={4}
      />
          <Routes>
                
            <Route exact  path="/" element={<News  setProgress={setprogress} newsapi={newsapi} key="general"  category="general" pageSize={pageSize} country={country}/>} />
            <Route exact  path="/general" element={<News  setProgress={setprogress} newsapi={newsapi} key="general"  category="general" pageSize={pageSize} country={country}/>} />
            <Route exact path="/science" element={<News  setProgress={setprogress} newsapi={newsapi} key="science"  category="science" pageSize={pageSize} country={country}/>} />
            <Route exact path="/technology" element={<News  setProgress={setprogress} newsapi={newsapi} key="technology" category="technology" pageSize={pageSize} country={country}/>} />
            <Route exact path="/sports" element={<News  setProgress={setprogress} newsapi={newsapi} key="sports" category="sports" pageSize={pageSize} country={country}/>} />
            <Route exact path="/health" element={<News  setProgress={setprogress} newsapi={newsapi} key="health" category="health" pageSize={pageSize} country={country}/>} />
            <Route exact path="/general" element={<News  setProgress={setprogress} newsapi={newsapi} key="general" category="general" pageSize={pageSize} country={country}/>} />
            <Route exact path="/entertainment" element={<News  setProgress={setprogress} newsapi={newsapi} key="entertainment" category="entertainment" pageSize={pageSize} country={country}/>} />
            <Route exact path="/business" element={<News  setProgress={setprogress} newsapi={newsapi} key="business" category="business" pageSize={pageSize} country={country}/>} />
              
          </Routes>
        </Router>
      
        
      </div>
    );
  
}
export default App;