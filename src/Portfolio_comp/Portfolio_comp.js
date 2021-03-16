
//------------------------------------
//-------------------------------------------------
import './Portfolio_comp.css';

import pbg from '../media/pbg.jpeg';
import jum from '../media/jum.png';
import por from '../media/por.png';
import ikea from '../media/ikea.png';

//import vidSrc from '../media/yt1s.com - Retrowave animation_1080p.mp4';
//import ToDoElement_comp from '../ToDoElementt_comp/ToDoElement_comp';
import PortfolioCard_comp from '../PortfolioCard_comp/PortfolioCard_comp';
import ReactDOM from "react-dom";
import React from "react";
import { connect } from 'react-redux';
import { setSelectedBtn } from '../store/actions';
import { setSkillPageData } from '../store/actions';



 class Portfolio_comp extends React.Component {
  state = {
    // skillImgMain : _400x500Skill,
    // title: 'My Skills',
    // details: 'Select a skill to see details',
    // DetailsBtn : true

  };

  componentDidMount()
  {

    this.setState({
      CardsArr : [ 
        <PortfolioCard_comp title={'Portfolio website'} pImg={por}/>,
        <PortfolioCard_comp title={'Jumia clone'} pImg={jum}/>,
        <PortfolioCard_comp title={'IKEA'} pImg={ikea}/>
      ]
    });


  }
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
<div class="container-fluid portCont" style={{ backgroundImage: `url(${pbg})` }}>
            <div class="row">

                <div class="col-lg-7 portLeft" id="portfolioSection">
                    <span class="portTitle">Portfolio</span><br/>
                    <span class="portTitlee">check my projects</span><br/>
                    <div class="portBtnCont">
                        <button type="button" class="btn btn-outline-light btn-lg  portBtn" disabled>Explore All</button>
                    </div>
                </div>
                <div class="col-lg-5 portRight">
                    {/* <!-- /////////////////////////////////////// --> */}
                    {this.state.CardsArr}
                    {/* <!-- /////////////////////////////////////// --> */}
                    <div class="portBtnContt">
                        <button type="button" class="btn btn-outline-light btn-lg  portBtn" disabled>Explore All</button>
                    </div>
                </div>

            </div>

        </div>

 

      </>
    );
  }

  
}
const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps , {setSelectedBtn,setSkillPageData})(Portfolio_comp);





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