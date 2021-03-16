
//------------------------------------
//-------------------------------------------------
//import './Home_comp.css';
//import ToDoElement_comp from '../ToDoElementt_comp/ToDoElement_comp';
import ReactDOM from "react-dom";
import React from "react";
import Cover_comp from '../Cover_comp/Cover_comp';
import Portfolio_comp from '../Portfolio_comp/Portfolio_comp';
import Skills_comp from '../Skills_comp/Skills_comp';
import About_comp from '../About_comp/About_comp';


export default class Home_comp extends React.Component {
  state = {

  };
  // constructor(props)
  // {
   
  //   super(props);
  //   this.state={
  //     complete : ""
  //   };
  // }


  render() {
    return (
      <>
      <Cover_comp />
      <About_comp />
      <Portfolio_comp />
      <Skills_comp />
      
      </>
    );
  }

  
}





// //------------------------------------
// //-------------------------------------------------
// import './Header_comp.css';
// //import ToDoElement_comp from '../ToDoElementt_comp/ToDoElement_comp';
// import ReactDOM from "react-dom";
// import React from "react";

// export default class Header_comp extends React.Component {
//   state = {

//   };
//   // constructor(props)
//   // {
   
//   //   super(props);
//   //   this.state={
//   //     complete : ""
//   //   };
//   // }


//   render() {
//     return (
//       <>

//       </>
//     );
//   }

  
// }