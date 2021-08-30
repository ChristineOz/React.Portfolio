import React, { Component } from 'react';

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1 style={{ color:"red", fontSize:"30px", position:"relative", fontFamily:'sans-serif ', textShadow:'-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,	1px 1px 0 #000'}}>Check out my work</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item" >
                  <div className="item-wrap" style={{overflow:"scroll"}}>
                    <a href="#modal-01">
                    <a href={item.link} style={{color:'red', fontWeight:'bolder', textAlign:'center', textShadow:'-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,	1px 1px 0 #000'}}>☆
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                         
                        </div>
                      </div>
                    </a>
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
