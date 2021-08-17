import React, { Component } from 'react';
import Collapsible from 'react-collapsible';

export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section className="mobile-btn" id="resume"style={{borderColor:'black',borderBottomWidth:25,borderTopWidth:25}}>
<div class="transbox">
  <br></br>
         <div className="row education">

            <div className="three columns header-col">
               <h1><span style={{ letterSpacing: '2px',
                               margin: '0 auto 18px auto',
                              textShadow: '0px 1px 3px rgba(0, 0, 0, 1)',
                              color:'white', 
                              fontSize:'30px'}}>Education</span></h1>
            </div>
          
            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <Collapsible trigger="+" id='+' style={{color:'black', size:'large'}}>
                    <div className="row item">
                       <div className="twelve columns">
                          <h3 style={{ letterSpacing: '2px',
                               margin: '0 auto 18px auto',
                              textShadow: '0px 1px 3px rgba(0, 0, 0, 1)',
                              color:'black', 
                              fontSize:'30px'}}>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                    </Collapsible>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span style={{ letterSpacing: '2px',
                               margin: '0 auto 18px auto',
                              textShadow: '0px 1px 3px rgba(0, 0, 0, 1)',
                              color:'white', 
                              fontSize:'30px'}}>Work</span></h1>
            </div>
            
            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <Collapsible trigger="+">
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p style={{fontSize:'20px', textAlign:'center'}}>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>
              </Collapsible>
                  )
                })
              }
            </div> 
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span style={{ letterSpacing: '2px',
                               margin: '0 auto 18px auto',
                              textShadow: '0px 1px 3px rgba(0, 0, 0, 1)',
                              color:'white', 
                              fontSize:'30px'}}>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {resumeData.skillsDescription}
               </p>

   				<div className="bars">

   				   <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>
         </div>

      </section>
    );
  }
}