import React from "react"
import Card from "./Project.Card"
import Fade from "react-reveal/Fade"

import data from "../resumeData"

const Work = () => {
  return (
    <div className="mobile-btn" className="section" id="work">
      <div className="twelve columns collapsed"></div>
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1 style={{ letterSpacing: '-2px',
                               margin: '0 auto 18px auto',
                              textShadow: '1px 3px 6px rgba(0, 0, 0, .8)',
                              color:'white',
                              fontSize:'40px'}}>Work</h1>
          </Fade>

          <div className="grid">
            <Fade bottom cascade style={{fontSize:'10px'}}>
              {data.projects.map((project, index) => (
                <Card style={{fontSize:'10px'}}
                  key={index}
                  heading={project.title}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                ></Card>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
