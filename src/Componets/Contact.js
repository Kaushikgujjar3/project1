import React from 'react'
import { IoIosMailOpen } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io"
import { FaDribbble } from "react-icons/fa";
// import { Button } from 'bootstrap';
import { IoIosSend } from "react-icons/io";
import Button from '../Common_Componants/Button';

function Contact() {
  return (
    <>

      <section className='About_Page CONTACT'>
      <div className="top_about d-none d-sm-block">
            <h1 className='about_sec text-center'>GET IN
              <span className='about_sec1'>TOUCH</span>
            </h1>
          </div>
          <div className="mm_menu d-sm-none mb-3">
               <h1 className='about_sec'>GET IN
            <span className='about_sec1'>TOUCH</span>
               </h1>
        </div>
        <div className="container">
          
          <div className="d-lg-flex">
            <div className="col-lg-4 col-12 c_text">
              <h3 className='pt-4 pt-lg-0'>DON'T BE SHY !</h3>
              <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
              <p className="i_text d-flex">
                <IoIosMailOpen className='IoIosMailOpen' />
                <div className='ms-4'>
                  <span>MAIL ME</span><br></br>
                  steav@gmail.com
                </div>
              </p>
              <p className="i_text d-flex">
                <FaSquarePhone className='IoIosMailOpen' />
                <div className='ms-4'>
                  <span>MAIL ME</span><br></br>
                  steav@gmail.com
                </div>
              </p>
              <div className="d-flex">
                <div className="icon_contact">
                  <ul className='p-0 mt-2'>
                    <li className='position-relative'>
                      <FaCircle className='FaCircle'></FaCircle>
                      <FaFacebookF className='FaFacebook position-absolute'></FaFacebookF>
                    </li>
                  </ul>
                </div>
                <div className="icon_contact">
                  <ul className='mt-2'>
                    <li className='position-relative'>
                      <FaCircle className='FaCircle'></FaCircle>
                      <FaTwitter className='FaFacebook position-absolute'></FaTwitter>
                    </li>
                  </ul>
                </div>
                <div className="icon_contact">
                  <ul className='mt-2'>
                    <li className='position-relative'>
                      <FaCircle className='FaCircle'></FaCircle>
                      <IoLogoYoutube className='FaFacebook position-absolute'></IoLogoYoutube>
                    </li>
                  </ul>
                </div>
                <div className="icon_contact">
                  <ul className='mt-2'>
                    <li className='position-relative'>
                      <FaCircle className='FaCircle'></FaCircle>
                      <FaDribbble className='FaFacebook position-absolute'></FaDribbble>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-12 ps-2 pr-2 mt-4 mt-lg-0">
              <div className="row input_con">
                <div className="col-md-4 col-12">
                  <input type="text" placeholder='YOUR NAME' />
                </div>
                <div className="col-md-4 col-12">
                  <input type="text" placeholder='YOUR EMAIL' />
                </div>
                <div className="col-md-4 col-12">
                  <input type="text" placeholder='YOUR SUBJECT' />
                </div>
                <div className="col-12">
                  <textarea name="message" placeholder="YOUR MESSAGE"></textarea>
                </div>
              </div>
              <div className="div mt-4">
              <Button btntext="Send Message" icon={<IoIosSend />} />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Contact
