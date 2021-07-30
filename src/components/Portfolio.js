import React, { Component } from 'react';


export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1 style={{ color:"yellow", fontSize:"35px"}}>Check Out Some of My Work.</h1>
          <div id="portfolio-wrapper" className="bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img src={`${item.imgurl}`} className="item-img"style={{ Width: "600px", height: "200px" }}/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5 style={{ color:"black"}}>{item.name}</h5>
                          <p style={{ color:"black"}}>{item.description}</p>
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