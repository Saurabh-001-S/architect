import React from 'react'
import { ProImg1, ProImg2, ProImg3 } from '../../Assest/Project'
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

import './project.css'
const Project = () => {
      return (
            <div className='app__project section__padding'>
                  <div className="app__project-heading main-Heading">
                        <h1 className='headText__h1'>OUR</h1>
                        <h2 className='headText__h2'>PROJECTS</h2>
                  </div>

                  <div className="app__project-details">
                        <div className="app__project-b1">
                              <div className="project-img">
                                    <img src={ProImg1} alt="Project" />
                              </div>
                              <div className="project-text">
                                    <div className="content-project_heading">
                                          <h1 className='headText'>Comprehensive school</h1>
                                    </div>
                                    <p>
                                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                    <a className="custom_Button" href='/project'>
                                          <p>LEARN MORE</p>
                                          <BsArrowRight />
                                    </a>
                              </div>
                        </div>

                        <div className="app__project-b1">
                              <div className="project-img">
                                    <img src={ProImg2} alt="Project" />
                              </div>
                              <div className="project-text">
                                    <div className="content-project_heading">
                                          <h1 className='headText'>Office interior project</h1>
                                    </div>
                                    <p>
                                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                    <a className="custom_Button" href='/project/datails'>
                                          <p>LEARN MORE</p>
                                          <BsArrowRight />
                                    </a>
                              </div>
                        </div>

                        <div className="app__project-b1">
                              <div className="project-img">
                                    <img src={ProImg3} alt="Project" />
                              </div>
                              <div className="project-text">
                                    <div className="content-project_heading">
                                          <h1 className='headText'>Parking for 500 cars</h1>
                                    </div>
                                    <p>
                                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                    <a className="custom_Button" href='/project'>
                                          <p>LEARN MORE</p>
                                          <BsArrowRight />
                                    </a>
                              </div>
                        </div>
                  </div>

                  <div className="app__project-page">
                        <div className="page__p">
                              <p> 01 </p>
                              <p> / </p>
                              <p> 05 </p>
                        </div>
                        <div className="page_arrow">
                              <BsArrowLeft />
                              <BsArrowRight />
                        </div>
                  </div>
            </div>
      )
}

export default Project
