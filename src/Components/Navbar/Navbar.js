import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCrossCircled } from 'react-icons/rx';
import { Link } from 'react-router-dom'
import images from '../../Assest/importImage'
import './navbar.css'
const Navbar = () => {

      const [toggleMenu, setToggleMenu] = useState(false)

      return (
            <nav className='app__navbar '>
                  <Link className="app__navbar-logo" to="/">
                        <img src={images.Home.Logo} alt="" />
                  </Link>
                  <ul className='app__navbar-links'>
                        <li className='p__opensans'><Link className='a' to="/">HOME</Link></li>
                        <li className='p__opensans'><Link className='a' to="/gallery">GALLERY</Link></li>
                        <li className='p__opensans'><Link className='a' to="/project">PROJECT</Link></li>
                        <li className='p__opensans'><Link className='a' to="/contact">CONTACT</Link></li>
                  </ul>
                  <div className="app__navbar-smallscreen">
                        <GiHamburgerMenu color='black' fontSize={27} onClick={() => setToggleMenu(true)} />

                        {toggleMenu && (
                              <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                                    <RxCrossCircled fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                                    <ul className='app__navbar-smallscreen_links'>
                                          <li className='p__opensans'><Link className='a' to="/home">HOME</Link></li>
                                          <li className='p__opensans'><Link className='a' to="/gallery">GALLERY</Link></li>
                                          <li className='p__opensans'><Link className='a' to="/project">PROJECT</Link></li>
                                          <li className='p__opensans'><Link className='a' to="/contact">CONTACT</Link></li>
                                    </ul>
                              </div>
                        )}
                  </div>
            </nav>
      )
}

export default Navbar
