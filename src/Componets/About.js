import React from 'react'
import Button from '../Common_Componants/Button'
import { FaDownload } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { IoBriefcase, IoMailOpen } from "react-icons/io5";


const prograce = [
  {
    text: '25%',
    head: "HTML",
    pr: 25,
  },
  {
    text: '89%',
    head: "JAVASCRIPT",
    pr: 89,
  },
  {
    text: '70%',
    head: "CSS",
    pr: 70,
  },
  {
    text: '60%',
    head: "PHP",
    pr: 60,
  },
  {
    text: '95%',
    head: "WORDPRESS",
    pr: 95,
  },
  {
    text: '50%',
    head: "JQUERY",
    pr: 50,
  },
  {
    text: '65%',
    head: "ANGULAR",
    pr: 65,
  },
  {
    text: '45%',
    head: "REACT",
    pr: 45,
  },
];

const card = [
  {
    t1: "2018 - Present",
    t2: "Web Developer ",
    t3: "Envato",
    t4: <IoBriefcase />,
    t5: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore",
  },
  {
    t1: "2015",
    t2: "Engineering Degree",
    t3: "Oxford University",
    t4: <FaGraduationCap />,
    t5: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore",

  },
  {
    t1: "2013 - 2018",
    t2: "UI/UX Designer",
    t3: "Themeforest",
    t4: <IoBriefcase />,
    t5: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore",

  },
  {
    t1: "2012",
    t2: "Master Degree",
    t3: "Kiev University",
    t4: <FaGraduationCap />,
    t5: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore",

  },
  {
    t1: "2005 - 2013",
    t2: "Consultant ",
    t3: "Videohive",
    t4: <IoBriefcase />,
    t5: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore",

  },
  {
    t1: "2009",
    t2: "Bachelor Degree ",
    t3: "Tunis High School",
    t4: <FaGraduationCap />,
    t5: "Lorem ipsum amet, consectetur adipisicing tempor incididunt ut labore",

  },
];


function About() {
  return (

    <>





      {/* INFO */}

      <section className='About_Page'>
        <div className="top_about d-none d-sm-block">
          <h1 className='about_sec text-center'>ABOUT
            <span className='about_sec1'>ME</span>
          </h1>
        </div>
        <div className="mm_menu d-sm-none mb-3">
               <h1 className='about_sec'>ABOUT
            <span className='about_sec1'>ME</span>
               </h1>
        </div>
        <div className="container">
          <div className="row year_class">
            <div className="col-lg-6 col-12 text_area mb-5 ps-4 pe-4">
              <h3>PERSONAL INFOS</h3>
              <div className='img_sml'>
                <img src={require('../assest/img-mobile.jpg')} alt="" className='d-sm-none' />
              </div>
              <div className="d-flex justify-content-around">
                <div className="l_sec">
                  <ul className='m-0 p-0 me-5 mt-4'>
                    <li className='mt-3'><span>First Name  :</span>  Steve</li>
                    <li className='mt-3'><span>Last Name  :</span>  Milner</li>
                    <li className='mt-3'><span>Age  :</span>  27 Years</li>
                    <li className='mt-3'><span>Nationality  :</span>  Tunisian</li>
                    <li className='mt-3'><span>Freelance :</span>  Available</li>
                  </ul>
                </div>
                <div className="l_sec">
                  <ul className='m-0 p-0 ms-5 mt-4'>
                    <li className='mt-3'><span>First Name  :</span>  Steve</li>
                    <li className='mt-3'><span>Last Name  :</span>  Milner</li>
                    <li className='mt-3'><span>Age  :</span>  27 Years</li>
                    <li className='mt-3'><span>Nationality  :</span>  Tunisian</li>
                    <li className='mt-3'><span>Freelance :</span>  Available</li>
                  </ul>
                </div>
              </div>
              <div className="btn-ii">
                <Button btntext="Download CV" icon={<FaDownload />} />
              </div>
            </div>
            <div className="col-lg-6 col-12 d-flex jjjj">
              <div className="row">
                <div className="col-6 ps-3">
                  <div className="box">
                    <span>12<sup>+</sup></span>
                    <div className="div">
                      <p className='position-relative'>YEARS OF
                        EXPERIENCE</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 ps-3">
                  <div className=" box">
                    <span>97<sup>+</sup></span>
                    <div className="div">
                      <p className='position-relative'>YEARS OF
                        EXPERIENCE</p>
                    </div>
                  </div>
                </div>
                <div className=" col-6 ps-3">
                  <div className=" box">
                    <span>51<sup>+</sup></span>
                    <div className="div">
                      <p className='position-relative'>YEARS OF
                        EXPERIENCE</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 ps-3">
                  <div className=" box">
                    <span>21<sup>+</sup></span>
                    <div className="div">
                      <p className='position-relative'>YEARS OF
                        EXPERIENCE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hr">
          <hr />
        </div>
      </section>


      {/* MY SKILL */}


      <section className='About_Page'>
        <div className="container">
          <h2 className='skill'>MY SKILLS</h2>
          <div className="row">

            {
              prograce.map((data) => {
                return (
                  <>
                    <div className="col-6 col-md-3 d-flex flex-column justify-content-center align-items-center s-link mb-4">
                      <div class="progress-bar" style={{ '--roundbox': `${data.pr}%` }}>
                        <progress value="75" min="0" max="100" className='ddd'></progress>
                        <span>{data.text}</span>
                      </div>
                      <h5 className='text-cente p-0 m-0'>{data.head}</h5>
                    </div>
                  </>
                )
              })
            }

          </div>
          <div className="hr mt-4">
            <hr />
          </div>
        </div>
      </section>

      {/* EXPERIENCE & EDUCATION */}

      <section className='About_Page'>
        <div className="container">
          <div className="col-12">
            <h3 className='skill'>EXPERIENCE & EDUCATION</h3>
          </div>
          <div className="row sec_ab p-3">

            {
              card.map((data1) => {
                return (
                  <>
                    <div className="col-12 col-lg-6 mb-5">
                      <ul className='EXPERIENCE'>
                        <li className=''>
                          <div className="icon_edu position-relative">
                            <div className="IoBriefcase">{data1.t4}</div>
                            <div className='bf'></div>
                          </div>
                          <div className="items">
                            <span className='ms-3 mt-2'>{data1.t1}</span>
                            <h5>{data1.t2}<span> - {data1.t3}</span></h5>
                            <p>{data1.t5}</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </section>

    </>
  )
}

export default About
