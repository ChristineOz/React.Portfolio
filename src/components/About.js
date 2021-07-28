import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';



export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/Christine.jpg"
               style={{ maxWidth: "125%", height: "auto", position: "relative", right:"150px", }} alt=""/>

            </div>

            <div className="nine columns main-col">

               <h2
               style={{
                  textAlign:"center",
               }}>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
                    <br></br>
                    <SocialIcon url="https://github.com/ChristineOz" />
                    <SocialIcon url="https://www.linkedin.com/in/christine-osmak-42808376/" />
                    <SocialIcon url="https://www.facebook.com/christine.osmak" />
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}
