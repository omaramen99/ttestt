
//------------------------------------
//-------------------------------------------------
import './Cover_comp.css';
import vidSrc from '../media/yt1s.com - Retrowave animation_1080p.mp4';
//import ToDoElement_comp from '../ToDoElementt_comp/ToDoElement_comp';
import ReactDOM from "react-dom";
import React from "react";

export default class Cover_comp extends React.Component {
  state = {

  };
  // constructor(props)
  // {
   
  //   super(props);
  //   this.state={
  //     complete : ""
  //   };
  // }

  ContactMeScroll = (e) => 
 {
  
   e.preventDefault();
   e.stopPropagation();
     var ele = document.getElementById('stayConnected');
     var close = document.getElementById('close');
     close.click();
     ele.scrollIntoView({behavior: 'smooth', block: "center"})

 }

  render() {
    return (
      <>

<div class="vidCont" >

<video class="headerVid"  src={vidSrc} muted autoPlay loop ></video>
          </div>

 
          <h1 id="myName" class="name">Omar Amen</h1>
          <h1 class="title">MERN full-stack web developer</h1>
          <div class="row BtnCoubleCont"> 
              <div class="col-md-6">
                  <button type="button" onClick={(e) => {this.ContactMeScroll(e)}} class="btn btn-primary BtnCouble ">Contact Me</button>

              </div>
              <div class="col-md-6">
                  <button type="button" class="btn btn-warning BtnCouble " disabled>Send Message</button>

            </div>

          </div>
          <div className='vidFiller'></div>
          {/* <span>cc</span> */}
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