import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p style={{ color:"orange", fontSize:"75px", fontFamily:'sans-serif ', textShadow:'-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,	1px 1px 0 #000'}}>
              Follow Me...
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                    <SocialIcon style={{ position:"relative",}} url="https://github.com/ChristineOz" />
                    <SocialIcon style={{position:"relative", }} url="https://www.linkedin.com/in/christine-osmak-42808376/" />
                    <SocialIcon style={{ position:"relative",}} url="https://www.facebook.com/christine.osmak" />
                    <SocialIcon style={{ position:"relative",}} url="https://www.instagram.com/christineozz/?hl=en"/>
                
              
              </div>
            </aside>
          </div>
        </section>
        );
  }
}
