import React from 'react'
import { IoHome, IoBriefcase, IoMailOpen } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { FaComments } from "react-icons/fa6";
import Home from './Home';
import { Link } from 'react-router-dom';

function Fixd() {
    return (

        <>
        
            <section className='fixed_menu z-3 d-none d-lg-block'>
                <div className="side_menu">
                    <ul className='menu-list'>
                        <li>
                            <Link href="" to="/" className='icon-f position-relative'><IoHome /><div className='cccc'>HOME</div></Link>
                        </li>
                        <li>
                            <Link to="About" href="" className='icon-f position-relative'><FaUserAlt /><div className='cccc'>ABOUT</div></Link >
                        </li>
                        <li>
                            <Link href="" to="Portfolio" className='icon-f position-relative'><IoBriefcase /><div className='cccc'>PORTFOLIO</div></Link>
                        </li>
                        <li>
                            <Link href="" to="Contact" className='icon-f position-relative'> <IoMailOpen /><div className='cccc'>CONTACT</div></Link>
                        </li>
                        <li>
                            <Link href="" to="Blog" className='icon-f position-relative'><FaComments /><div className='cccc'>BLOG</div></Link>
                        </li>
                    </ul>
                </div>
            </section>

        </>

    )
}

export default Fixd


