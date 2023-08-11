import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import './SideBar.css'

const SideBar: React.FC = () => {
    return <>
        <ul className="social">
            <li><a href="" target="_blank"><span>Linkedin</span><span><FontAwesomeIcon icon={faLinkedin} /></span></a></li>
            <li><a href="" target="_blank"><span>Instagram</span><span><FontAwesomeIcon icon={faInstagram} /></span></a></li>
            <li><a href=""><span>Email</span><span><FontAwesomeIcon icon={faEnvelope} /></span></a></li>
        </ul>
    </>
}

export default SideBar