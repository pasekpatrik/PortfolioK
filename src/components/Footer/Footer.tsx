import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import './Footer.css'

const Footer: React.FC = () => {
    return (
        <>
            <div className="social-footer">
                <a href="https://www.linkedin.com/in/kate%C5%99ina-kortanov%C3%A1-30a864287" target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://instagram.com/kajda.kortanka?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="mailto:kata.kortanova@seznam.cz"><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
            <span>&copy; Copyright 2023 <a href="https://portfoliopatrik.netlify.app/" target='_blank'>portfoliopatrik.netlify.app</a> | všechna práva vyhrazena </span>
        </>
    )
}

export default Footer