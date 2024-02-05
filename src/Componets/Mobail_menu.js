import React from 'react'
import { IoHome, IoBriefcase, IoMailOpen } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { FaComments } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { click } from '@testing-library/user-event/dist/click';



function Mobail_menu() {
    
    var cnt=0;
    function header() {

        if(cnt==0)
        {
            document.getElementById('right_po').style.left = '0';
            document.getElementById("iconmenu").classList.add("active");
            cnt++;
        }else if(cnt==1)
        {
            document.getElementById('right_po').style.left = '-100%';
            document.getElementById("iconmenu").classList.remove("active");
            cnt--;
        }
    }

    function mclick () 
    {
        document.getElementById('right_po').style.left = '-100%';
        document.getElementById("iconmenu").classList.remove("active");
        cnt--;
    }


    return (
        <>

            <section className='d-lg-none qq '>
                <div id='iconmenu' class="wrap menu-icon dd" onClick={() => header()}>
                    <div class="burger">
                        <div class="strip burger-strip-5">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div id='right_po'>
                    <ul className='r_menu-list list'>
                        <li>
                            <Link onClick={()=>mclick()} href="" to="/" className='r_icon-f position-relative'><IoHome /><span className='r_m_t ms-4'>HOME</span></Link>
                        </li>
                        <li>
                            <Link onClick={()=>mclick()} to="About" href="" className='r_icon-f position-relative'><FaUserAlt /><span className='r_m_t ms-4'>ABOUT</span></Link >
                        </li>
                        <li>
                            <Link onClick={()=>mclick()} href="" to="Portfolio" className='r_icon-f position-relative'><IoBriefcase /><span className='r_m_t ms-4'>PORTFOLIO</span></Link>
                        </li>
                        <li>
                            <Link onClick={()=>mclick()} href="" to="Contact" className='r_icon-f position-relative'> <IoMailOpen /><span className='r_m_t ms-4'>CONTACT</span></Link>
                        </li>
                        <li>
                            <Link onClick={()=>mclick()} href="" to="Blog" className='r_icon-f position-relative'><FaComments /><span className='r_m_t ms-4'>BLOG</span></Link>
                        </li>
                    </ul>
                </div>
            </section>

        </>
    )
}


export default Mobail_menu
