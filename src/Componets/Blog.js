import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const cards = [
  {
    t1: "How to Own Your Audience by Creating an Email List",
    t2: require("../assest/blog-post-1.jpg"),
    t3: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidun",
  },
  {
    t1: "Top 10 Toolkits for Deep Learning in 2020",
    t2: require("../assest/blog-post-2.jpg"),
    t3: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidun",
  },
  {
    t1: "Everything You Need to Know About Web Accessibility",
    t2: require("../assest/blog-post-3.jpg"),
    t3: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidun",
  },
  {
    t1: "How to Inject Humor & Comedy Into Your Brand",
    t2: require("../assest/blog-post-4.jpg"),
    t3: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidun",
  },
  {
    t1: "Women in Web Design: How To Achieve Success",
    t2: require("../assest/blog-post-5.jpg"),
    t3: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidun",
  },
  {
    t1: "Evergreen versus topical content: An overview",
    t2: require("../assest/blog-post-6.jpg"),
    t3: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidun",
  },
];

function Blog() {
  return (
    <>

      <section className='About_Page'>
      <div className="top_about d-none d-sm-block">
            <h1 className='about_sec text-center'>MY
              <span className='about_sec1'>BLOG</span>
            </h1>
          </div>
          <div className="mm_menu d-sm-none mb-3">
               <h1 className='about_sec'>MY
            <span className='about_sec1'>BLOG</span>
               </h1>
        </div>
        <div className="container">
          <div className="row">

            {
              cards.map((data2) => {
                return (
                  <>

                    <div className="col-xl-4 col-md-6 col-12 mb-4" id='card'>
                      <div className="c_img">
                        <img src={data2.t2} alt="" className='w-100' />
                      </div>
                      <div className='c_line'></div>
                      <div className="cc_text">
                        <h3>{data2.t1}</h3>
                        <p>{data2.t3}</p>
                      </div>
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

export default Blog
