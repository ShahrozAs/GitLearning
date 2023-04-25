import React from 'react'
import loading from './Rhombus.gif'
// export class Spinner extends Component {
//   render() {
//     return (
//       <div className="container my-3 text-center">
//          <img src={loading} alt="Error While Fetching" />
//       </div>
//     )
//   }
// }

// export default Spinner

const Spinner =()=> {

    return (
      <div className="container my-3 text-center">
         <img src={loading} alt="Error While Fetching" />
      </div>
    )
  
}

export default Spinner