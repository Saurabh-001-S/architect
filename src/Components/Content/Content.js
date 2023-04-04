import React from 'react'

import { BsArrowRight } from "react-icons/bs";
import ContactForm from '../../Constant/ContactForm/ContactForm'
import images from '../../Assest/importImage'

import './content.css'
import { Link } from 'react-router-dom';
const Content = () => {
      return (
            <div className='app__content section__padding'>

                  {/* -----------------------------                                       About Section                                  ----------------------------------- */}
                  <div className="app__content-about">
                        <div className="app__content-about_imgBox1">
                              <img src={images.Home.About1} alt="" />
                              <img src={images.Home.About2} alt="" />
                        </div>

                        <div className="app__content-about_imgBox2">
                              <img src={images.Home.About3} alt="" />
                        </div>
                        <div className="app__content-about_text">
                              <h1 className='headtext'>About company</h1>
                              <p className='about_text_p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                              <Link className="custom_Button" to='#'>
                                    <p>READ</p>
                                    <BsArrowRight />
                              </Link>
                        </div>
                  </div>

                  {/* -----------------------------                                       Goals Section                                  ----------------------------------- */}
                  <div className="app__content-goals">
                        <h1 className="headtext">Main goals</h1>
                        <div className="app__content-goals_content">

                              <div className="app__content-goals_text-1">
                                    <div className='display-none'></div>
                                    <h1 className='headtext'>1</h1>
                                    <p>Creating comfortable conditions and improving the quality of customer service</p>
                              </div>
                              <div className="app__content-goals_text-2">
                                    <h1 className='headtext'>2</h1>
                                    <p>Constantly improve the quality of services provided by training staff, purchasing new equipment and increased advertising in the market</p>
                              </div>
                        </div>
                  </div>

                  {/* -----------------------------                                       Project Section                                  ----------------------------------- */}
                  <div className="app__content-project">
                        <div className="content-project_heading">
                              <h1 className='headtext'>Our Project</h1>
                        </div>
                        <div className="app__content-project_img">
                              <div className="content-project_img-row1">
                                    <img src={images.Home.Hproject1} alt="Project" />
                                    <img src={images.Home.Hproject2} alt="Project" />
                              </div>
                              <div className="content-project_img-row2">
                                    <img src={images.Home.Hproject3} alt="Project" />
                                    <img src={images.Home.Hproject4} alt="Project" />
                                    <img src={images.Home.Hproject5} alt="Project" />
                              </div>
                        </div>
                        <div className="app__content-project_button">
                              <Link className="custom_Button" to='/project'>
                                    <p>LEARN MORE</p>
                                    <BsArrowRight />
                              </Link>
                        </div>
                  </div>

                  {/* -----------------------------                                       Contact Section                                  ----------------------------------- */}
                  <div className="app__content-contact">
                        <ContactForm title="Connect with us" />
                  </div>

            </div>
      )
}

export default Content
