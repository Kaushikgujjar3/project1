import React from 'react'

 function Portfolio() {
  return (
    <>

    <section className='About_Page pb-5'>
    <div className="top_about d-none d-sm-block">
          <h1 className='about_sec text-center'>MY
            <span className='about_sec1'>PORTFOLIO</span>
          </h1>
        </div>
        <div className="mm_menu d-sm-none mb-3">
               <h1 className='about_sec'>MY
            <span className='about_sec1'>PORTFOLIO</span>
               </h1>
        </div>
      <div className="container">
        <div className="row ms-2 me-2">
          <div className="col-lg-4 col-sm-6 g-4 g-0 p_img">
            <img src={require('../assest/project-1.jpg')} alt="" className='w-100'/>
          </div>
          <div className="col-lg-4 col-sm-6 g-4 g-0 p_img">
            <img src={require('../assest/project-2.jpg')} alt="" className='w-100'/>
          </div>
          <div className="col-lg-4 col-sm-6 g-4 g-0 p_img">
            <img src={require('../assest/project-3.jpg')} alt="" className='w-100'/>
          </div>
          <div className="col-lg-4 col-sm-6 g-4 g-0 p_img">
            <img src={require('../assest/project-4.jpg')} alt="" className='w-100'/>
          </div>
          <div className="col-lg-4 col-sm-6 g-4 g-0 p_img">
            <img src={require('../assest/project-5.jpg')} alt="" className='w-100'/>
          </div>
          <div className="col-lg-4 col-sm-6 g-4 g-0 p_img">
            <img src={require('../assest/project-6.jpg')} alt="" className='w-100'/>
          </div>
          <div className="col-lg-4 col-sm-6 g-4 g-0 p_img">
            <img src={require('../assest/project-7.jpg')} alt="" className='w-100'/>
          </div>
          <div className="col-lg-4 col-sm-6 g-4 g-0 p_img">
            <img src={require('../assest/project-8.jpg')} alt="" className='w-100'/>
          </div>
          <div className="col-lg-4 col-sm-6 g-4 g-0 p_img">
            <img src={require('../assest/project-9.jpg')} alt="" className='w-100'/>
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Portfolio
