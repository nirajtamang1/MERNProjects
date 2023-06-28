import React from 'react';
import { NavLink } from 'react-router-dom';
const Footer = () =>{
    return (
        <div className='footer'>
            <h4 className="text-center">All Right Reserved &copy; Techinfo</h4>
            <p className="text-center mt-3">
                <NavLink to = "/about">About</NavLink>
                |
                <NavLink to = "/contact">contact</NavLink>
                |
                <NavLink to = "/policy">Privacy policy</ NavLink>
                
            </p>
        </div>
    )
}
export default Footer;