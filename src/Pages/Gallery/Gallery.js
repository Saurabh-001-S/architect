import React from 'react'
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import {
     Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6, Gallery7, Gallery8, Gallery9, Gallery10, Gallery11, Gallery12,
} from '../../Assest/Gallery'

import './gallery.css'
const Gallery = () => {

     return (
          <div className='app__gallery section__padding'>
               <div className="app__gallery-heading">
                    <h1 className='headText__h1'>GALLERY</h1>
                    <h2 className='headText__h2'>PHOTOS</h2>
               </div>
               <div className="app__gallery-img">
                    <div className="app__gallery-img_row">
                         <img src={Gallery1} alt="Gallery" />
                         <img src={Gallery2} alt="Gallery" />
                         <img src={Gallery3} alt="Gallery" />
                         <img src={Gallery4} alt="Gallery" />
                         <img src={Gallery5} alt="Gallery" />
                         <img src={Gallery6} alt="Gallery" />
                         <img src={Gallery7} alt="Gallery" />
                         <img src={Gallery8} alt="Gallery" />
                         <img src={Gallery9} alt="Gallery" />
                         <img src={Gallery10} alt="Gallery" />
                         <img src={Gallery11} alt="Gallery" />
                         <img src={Gallery12} alt="Gallery" />
                    </div>
               </div>
               <div className="app__gallery-page">
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

export default Gallery