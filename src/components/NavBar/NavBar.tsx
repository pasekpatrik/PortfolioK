import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../images/K.webp'

import './NavBar.css'

const NavBar: React.FC = () => {
    const [toggle, setToggle] = useState<boolean>(false)

    const handlerNav = () => {
        setToggle(false)
    }

    const handlerMenu = () => {
        setToggle(!toggle)
    }

    return (
        <nav className='nav-bar'>
            <div className='container-logo'>
                <a href='/'><img src={logo} alt='Logo' id='nav-logo' width={60} height={60} /></a>
            </div>
            <div className='container-menu'>
                <ul className={toggle ? 'nav-menu active' : 'nav-menu'} onClick={handlerNav}>
                    <li><NavLink to='/'>Domů</NavLink></li>
                    <li><NavLink to='/about'>O&nbsp;mně</NavLink></li>
                    <li><NavLink to='/work'>Práce</NavLink></li>
                    <li><NavLink to='/contact'>Kontakt</NavLink></li>
                </ul>
            </div>
            <div className={toggle ? 'hamburger active' : 'hamburger'} onClick={handlerMenu}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
        </nav>
    )
}

export default NavBar