
//------------------------------------
//-------------------------------------------------
import './About_comp.css';



//import vidSrc from '../media/yt1s.com - Retrowave animation_1080p.mp4';
//import ToDoElement_comp from '../ToDoElementt_comp/ToDoElement_comp';
import ReactDOM from "react-dom";
import React from "react";
import { connect } from 'react-redux';
import { setSelectedBtn } from '../store/actions';
import { setSkillPageData } from '../store/actions';
import Unity, { UnityContext } from "react-unity-webgl";


 class About_comp extends React.Component {
  state = {


  };

  componentDidMount()
  {




  }
  // constructor(props)
  // {
   
  //   super(props);
  //   this.state={
  //     complete : ""
  //   };
  // }
 
  


  render() {

    const unityContext = new UnityContext({ 
      loaderUrl:    "/build/New folder (4).loader.js",
      dataUrl:      "/build/New folder (4).data",
      frameworkUrl: "/build/New folder (4).framework.js",
      codeUrl:      "/build/New folder (4).wasm",
    });








    return (
      <>
       <div class="container-fluid" id='aboutSection'>
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-6">
                    <div class="aboutLeftSide">

                        <div class="aboutMe">
                            
                            <span class="about" id='aboutSectionn'>About</span><br/>
                            <div className={'mee'}>

                            <span class="me">Me</span>
                            </div>
    
                        </div><br/>
                    </div>
                    <div className={'aboutDetailss'}>
                    <span class="aboutDetails">I can build a front-end web application using React.js library and a lot of helping tools like Redux, Bootstrap, HTML5 and CSS3, also I can add variant charts to the UI through charts.js library and I can add a 3D viewer to the UI using Unity Engine WebGL export,
                        I can also build the back-end of the web application using Node.js and Express.js and make the REST API needed to the web application,
                        I also use MongoDB as NoSQL database.</span>

                    </div>
                        <br/>
                        <div class="seeMoreBtnContt">
                <div class="seeMoreBtnCont">
                            <button type="button" class="btn btn-dark seeMoreBtn" disabled>See More</button>
                        </div>
                </div>
                </div>
                <div class="col-md-5 viewerCont">
                    <div id="unity-container" class="unity-desktop">
                        {/* <canvas id="unity-canvas"></canvas> */}
                        <Unity id={"unity-canvas"} className={'unity-canvas'} unityContext={unityContext} />
                  
                        <div id="unity-loading-bar">
                          <div id="unity-logo"></div>
                          <div id="unity-progress-bar-empty">
                            <div id="unity-progress-bar-full"></div>
                          </div>
                        </div>
                  
                      </div>

                </div>
                <div class="col-md-1 btnGhost">
                <div class="seeMoreBtnCont">
                            <button type="button" class="btn btn-dark seeMoreBtn" disabled>See More</button>
                        </div>
                </div>

            </div>

        </div>
        <br/><br/><br/><br/><br/>
      
      </>
    );
  }

  
}
const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps , {setSelectedBtn,setSkillPageData})(About_comp);





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