import React from 'react'
import { BsPinterest, BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { GoLocation } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import images from '../../Assest/importImage'


import './footer.css'
const Footer = () => {
      return (
            <div className='app__footer section__padding'>
                  <div className="app__footer-links">
                        <div className="app__footer-logo">
                              <img src={images.Home.ContLogo} alt="LOGO" />
                        </div>

                        <div className="app__footer-info">
                              <h4 className="foot-head">Information</h4>
                              <div className="footer-info_links">
                                    <p className="subText">Home</p>
                                    <p className="subText">Gallery</p>
                                    <p className="subText">Projects</p>
                                    <p className="subText">Certificates</p>
                                    <p className="subText">Contact</p>
                              </div>
                        </div>

                        <div className="app__footer-contact">
                              <h4 className="foot-head">Contacts</h4>
                              <div className="footer-contact_location flex">
                                    <GoLocation />
                                    <p className="p_subtext">100000, Republic of Kazakhstan,
                                          d. Karaganda, str. Television 10</p>
                              </div>
                              <div className="footer-contact_number flex">
                                    <FaPhoneAlt />
                                    <p className="p_subtext">+7 (701) 77 76 811</p>
                              </div>
                              <div className="footer-contact_number flex">
                                    <SiGmail />
                                    <p className="p_subtext">Galym.sultanov@gmail.com</p>
                              </div>
                        </div>

                        <div className="app__footer-contact_follow">
                              <h4 className="foot-head">Follow Us</h4>\
                              <div className="contact_follow-links">
                                    <BsLinkedin />
                                    <BsFacebook />
                                    <BsTwitter />
                                    <BsPinterest />
                              </div>
                        </div>
                  </div>

                  <div className="app__footer-bottom">
                        © 2019 Digital Project. All rights reserved.
                  </div>
            </div>
      )
}

export default Footer
