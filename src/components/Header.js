import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import headerVideo from '../../src/headerVideo.mp4';


export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
        <ReactPlayer
      url={headerVideo}
      playing
      loop
      muted
      width="100%"
      height="100%"
      background={headerVideo}
    /> 
    <header id="home" id="-wrap"> 
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
               <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>
         <div className="banner-text">
               <h1 className="responsive-headline" style={{textShadow:'-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,	1px 1px 0 #000'}}>I'm {resumeData.name}</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif ', textShadow:'-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,	1px 1px 0 #000'}}> A {resumeData.role}.{resumeData.roleDescription}
               </h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
       
       <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>
         
      </header>
    
      </React.Fragment>
     
    );
  }
}

