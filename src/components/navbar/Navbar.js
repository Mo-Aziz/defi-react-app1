import React, { useState } from 'react'
import './Navbar.css';
import{AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
    const [click,setClick] = useState(false)
    const handleClick = () => setClick(!click);
  return (
    <div className='navbar'>
        <div className='container'>
            <h1>Defi</h1>
            {/* nav-menu */}
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className='nav-item'>
                    <a href='/'>Plateform</a>
                </li>
                <li className='nav-item'>
                    <a href='/'>Developers</a>
                </li>
                <li className='nav-item'>
                    <a href='/'>Community</a>
                </li>
                <li className='nav-item'>
                    <a href='/'>About</a>
                </li>
                <li className='nav-item'>
                 <button className='btn'>Use Defi</button>
                </li>
            </ul>

            {/* side-toogle-icons */}
            <div className='hamburger-icons' onClick={handleClick}>
                {click ? <AiOutlineClose className='icon'/> : <AiOutlineMenu className='icon'/> }
                
            </div>
        </div>
    </div>
  )
}

export default Navbar