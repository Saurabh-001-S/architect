import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import images from '../../Assest/importImage'

import './contactform.css'

const ContactForm = (props) => {
      const onSubmit = () => {
            console.log("Hello")
      }
      const onChange = (e) => {
            e.preventDefault();
            e.target.name = e.target.value

      }
      return (
            <div className='app__contact'>
                  <div className="app__contact-left_section">
                        <h1 className='headtext'>{props.title}</h1>
                        <div className="app__contact-form">
                              <input type="text" placeholder='Name' name='name' id='name' onChange={onChange} required />
                              <input type="number" placeholder='Phone number' name='number' id='number' onChange={onChange} required />
                              <input type="email" placeholder='E-mail' name='email' id='email' onChange={onChange} required />
                              <input type="text" placeholder='Interested product/service' name='service' id='service' onChange={onChange} required />
                              <textarea name="message" id="message" placeholder='Message' cols="20" rows="6"></textarea>
                              <p>By submitting an application you agree
                                    with politics privacy</p>
                              <a onClick={onSubmit} className="app_contact-button custom_Button" href='/project'>
                                    <p>SEND</p>
                                    <BsArrowRight />
                              </a>
                        </div>
                        <div className="app__contact-alert">
                              <p>Request send successfully</p>
                        </div>
                  </div>

                  <div className="app__contact-img">
                        <img src={images.Home.HconImg} alt="Contact" />
                  </div>
            </div >
      )
}
export default ContactForm
