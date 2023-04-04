import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import images from '../../Assest/importImage'

import './header.css'
const Header = () => {
      return (
            <div className='app__header section__padding'>
                  <div className="app__header-content main-Heading">
                        <h1 className='headText__h1'>PROJECT </h1>
                        <h2 className='headText__h2'>NURTOWN</h2>
                  </div>
                  <div className="app__header-img">
                        <img src={images.Home.HomeImg} alt="Home" />
                        <a className="app_header-img-links custom_Button" href='/project'>
                              <p>LOOK AT </p>
                              <BsArrowRight />
                        </a>
                  </div>

            </div>
      )
}

export default Header
