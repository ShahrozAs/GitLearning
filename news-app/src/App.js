// import "./App.css";

// import React, { Component } from "react";
// import Navbar from "./components/Navbar";
// import News from "./components/News";
//  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//  import LoadingBar from 'react-top-loading-bar'



// export default class App extends Component {
//   state={
//     progress:0
//   }
//   Progress=(progress)=>{
//     this.setState({progress:progress})
//   }

//   newsapi="8c5e5ec518bc4fe29c8f9469a9bd9d1c"
//   render() {
//     let pageSize = 6;
//     let country="us";


//     return (
//       <div>
//         <Router>
//         <Navbar />
//         <LoadingBar
//         color='#f11946'
//         progress={this.state.progress}
//         height={4}
//       />
//           <Routes>
                
//             <Route exact  path="/" element={<News  Progress={Progress} newsapi={"8c5e5ec518bc4fe29c8f9469a9bd9d1c"} key="general"  category="general" pageSize={pageSize} country={country}/>} />
//             <Route exact  path="/general" element={<News  Progress={Progress} newsapi={"8c5e5ec518bc4fe29c8f9469a9bd9d1c"} key="general"  category="general" pageSize={pageSize} country={country}/>} />
//             <Route exact path="/science" element={<News  Progress={Progress} newsapi={"8c5e5ec518bc4fe29c8f9469a9bd9d1c"} key="science"  category="science" pageSize={pageSize} country={country}/>} />
//             <Route exact path="/technology" element={<News  Progress={Progress} newsapi={"8c5e5ec518bc4fe29c8f9469a9bd9d1c"} key="technology" category="technology" pageSize={pageSize} country={country}/>} />
//             <Route exact path="/sports" element={<News  Progress={Progress} newsapi={"8c5e5ec518bc4fe29c8f9469a9bd9d1c"} key="sports" category="sports" pageSize={pageSize} country={country}/>} />
//             <Route exact path="/health" element={<News  Progress={Progress} newsapi={"8c5e5ec518bc4fe29c8f9469a9bd9d1c"} key="health" category="health" pageSize={pageSize} country={country}/>} />
//             <Route exact path="/general" element={<News  Progress={Progress} newsapi={"8c5e5ec518bc4fe29c8f9469a9bd9d1c"} key="general" category="general" pageSize={pageSize} country={country}/>} />
//             <Route exact path="/entertainment" element={<News  Progress={Progress} newsapi={"8c5e5ec518bc4fe29c8f9469a9bd9d1c"} key="entertainment" category="entertainment" pageSize={pageSize} country={country}/>} />
//             <Route exact path="/business" element={<News  Progress={Progress} newsapi={"8c5e5ec518bc4fe29c8f9469a9bd9d1c"} key="business" category="business" pageSize={pageSize} country={country}/>} />
              
//           </Routes>
//         </Router>
      
        
//       </div>
//     );
//   }
// }


import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import LoadingBar from 'react-top-loading-bar'
import { useState } from "react";


 function  App()   {



  const [progress, Progress] = useState(0)

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
                
            <Route exact  path="/" element={<News  Progress={Progress} newsapi={"8c5e5ec518bc4fe29c8f9469a9bd9d1c"} key="general"  category="general" pageSize={pageSize} country={country}/>} />
            <Route exact  path="/general" element={<News  Progress={Progress} newsapi={"8c5e5ec518bc4fe29c8f9469a9bd9d1c"} key="general"  category="general" pageSize={pageSize} country={country}/>} />
            <Route exact path="/science" element={<News  Progress={Progress} newsapi={"8c5e5ec518bc4fe29c8f9469a9bd9d1c"} key="science"  category="science" pageSize={pageSize} country={country}/>} />
            <Route exact path="/technology" element={<News  Progress={Progress} newsapi={"8c5e5ec518bc4fe29c8f9469a9bd9d1c"} key="technology" category="technology" pageSize={pageSize} country={country}/>} />
            <Route exact path="/sports" element={<News  Progress={Progress} newsapi={"8c5e5ec518bc4fe29c8f9469a9bd9d1c"} key="sports" category="sports" pageSize={pageSize} country={country}/>} />
            <Route exact path="/health" element={<News  Progress={Progress} newsapi={"8c5e5ec518bc4fe29c8f9469a9bd9d1c"} key="health" category="health" pageSize={pageSize} country={country}/>} />
            <Route exact path="/general" element={<News  Progress={Progress} newsapi={"8c5e5ec518bc4fe29c8f9469a9bd9d1c"} key="general" category="general" pageSize={pageSize} country={country}/>} />
            <Route exact path="/entertainment" element={<News  Progress={Progress} newsapi={"8c5e5ec518bc4fe29c8f9469a9bd9d1c"} key="entertainment" category="entertainment" pageSize={pageSize} country={country}/>} />
            <Route exact path="/business" element={<News  Progress={Progress} newsapi={"8c5e5ec518bc4fe29c8f9469a9bd9d1c"} key="business" category="business" pageSize={pageSize} country={country}/>} />
              
          </Routes>
        </Router>
      
        
      </div>
    );
  
}
export default App;