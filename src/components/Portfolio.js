import React, { Component } from 'react';

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1 style={{ color:"orange", fontSize:"30px", position:"relative", fontFamily:'sans-serif ', textShadow:'-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,	1px 1px 0 #000'}}>Check out my work</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item" >
                  <div className="item-wrap" >
                    <a href={item.link}>
                    <img src={`${item.imgurl}`} className="item-img"/>
                      <button>
                    <a href={item.link} style={{color:'white', fontWeight:'bolder', textAlign:'center', textShadow:'-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,	1px 1px 0 #000'}}>Explore</a></button>
                      <div className="overlay" style={{overflow:"scroll"}}>
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                         
                        </div>
                      </div>
                  
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}
