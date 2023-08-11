import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../images/K.png'

import './NavBar.css'

const NavBar: React.FC = () => {
    const refHamburger = useRef(null)
    const refNavMenu = useRef(null)

    const handlerMenu = () => {
        const newHamburger: any = refHamburger.current
        const newNavMenu: any = refNavMenu.current

        newHamburger.classList.toggle('active')
        newNavMenu.classList.toggle('active')
    }

    const handlerNav = () => {
        const newHamburger: any = refHamburger.current
        const newNavMenu: any = refNavMenu.current

        newHamburger.classList.remove('active')
        newNavMenu.classList.remove('active')
    }

    return <>
        <nav className="navBar">
            <div className="container-logo">
                <a href='/'><img src={logo} alt="Logo" id="nav-logo" width={60} height={60} /></a>
            </div>
            <div className="container-menu">
                <ul className="nav-menu" ref={refNavMenu} onClick={handlerNav}>
                    <li><NavLink to='/'>Domů</NavLink></li>
                    <li><NavLink to='/about'>O mně</NavLink></li>
                    <li><NavLink to='/work'>Práce</NavLink></li>
                    <li><NavLink to='/contact'>Kontakt</NavLink></li>
                </ul>
            </div>
            <div className="hamburger" ref={refHamburger} onClick={handlerMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    </>
}

export default NavBar