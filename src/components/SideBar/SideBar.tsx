import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import './SideBar.css'

const SideBar: React.FC = () => {
    return (
        <ul className="social">
            <li><a href="https://www.linkedin.com/in/kate%C5%99ina-kortanov%C3%A1-30a864287" target="_blank"><span>Linkedin</span><span><FontAwesomeIcon icon={faLinkedin} /></span></a></li>
            <li><a href="https://instagram.com/kajda.kortanka?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank"><span>Instagram</span><span><FontAwesomeIcon icon={faInstagram} /></span></a></li>
            <li><a href="mailto:kata.kortanova@seznam.cz"><span>Email</span><span><FontAwesomeIcon icon={faEnvelope} /></span></a></li>
        </ul>
    )
}

export default SideBar