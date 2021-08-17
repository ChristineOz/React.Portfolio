import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import ReactTypingEffect from 'react-typing-effect';



export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (



      <section className="mobile-btn" id="about"style={{borderColor:'black',borderBottomWidth:25,borderTopWidth:25}}>
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/Christine.jpg"
               style={{ maxWidth: "125%", height: "auto", position: "relative", right:"150px", }} alt=""/>

            </div>

            <div className="nine columns main-col">
         
               <h2
               style={{
                  textAlign:"center",letterSpacing: '-2px',
                  margin: '0 auto 18px auto',
                 textShadow: '0px 1px 3px rgba(0, 0, 0, .8)',}}
               >About Me</h2>
               <ReactTypingEffect style={{ color:'black', fontSize:'20px'}}
               text={
                 resumeData.aboutme
               }
              ></ReactTypingEffect> <br></br>

               <div className="row">

                  <div className="columns contact-details">

                  <h2 style={{ letterSpacing: '-2px',
                               margin: '0 auto 18px auto',
                              textShadow: '0px 1px 3px rgba(0, 0, 0, .8)',}}>Contact Details:</h2>
                  <p className="address">
       						
                    
                    <span>{resumeData.website}</span>
                   
                    <SocialIcon  url="mailto: christineosmak@gmail.com" />
                    <SocialIcon  url="https://github.com/ChristineOz" />
                    <SocialIcon url="https://www.linkedin.com/in/christine-osmak-42808376/" />
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    
    );
  }
}
