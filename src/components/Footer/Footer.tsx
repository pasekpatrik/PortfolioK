import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import './Footer.css'

const Footer: React.FC = () => {
    return (
        <>
            <div className="social-footer">
                <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                <a href=""><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
            <span>&copy; Copyright 2023 <a href="https://portfoliopatrik.netlify.app/" target='_blank'>portfoliopatrik.netlify.app</a> | všechna práva vyhrazena </span>
        </>
    )
}

export default Footer