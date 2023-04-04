import React, { useState } from 'react'
import ContactForm from '../../Constant/ContactForm/ContactForm'
import { BsArrowRight } from "react-icons/bs";
import ConImg from './ContactPage.png'

import './contactpage.css'
const ContactPage = () => {
    const [isActive, setActive] = useState("false");

    const ToggleClass = () => {
        setActive(!isActive);
    };

    return (
        <div className='app__conPage section__padding'>
            <div className="app__conPage-row1">
                <div className="app__conPage-content">
                    <div className="main-Heading">
                        <h1 className='headText__h1'>CONTACT</h1>
                        <h2 className='headText__h2'>INFORMATION</h2>
                    </div>

                    <div className="app__conPage-details">
                        <h4>«Digital Project»</h4>
                        <p>  Karaganda, st. Television 10</p>
                        <h4>+7 (701) 77 76 811</h4>
                        <p>Galym.sultanov@mail.ru</p>
                    </div>
                    <a className="custom_Button" onClick={ToggleClass}>
                        <p>FEEDBACK</p>
                        <BsArrowRight />
                    </a>
                </div>
                <div className="app__conPage-img">
                    <img src={ConImg} alt="Contact" />
                </div>
            </div>
            <div className={isActive ? "notdisplay" : "isdisplay"}>
                <ContactForm title="Ask a Question" />
            </div>
        </div >
    )
}

export default ContactPage
