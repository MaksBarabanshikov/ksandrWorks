import logo from '../../../Assets/image/landing/ipostX.svg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
import {faTelegram} from "@fortawesome/free-brands-svg-icons"
import {faTwitter} from "@fortawesome/free-brands-svg-icons"
import {faVk} from "@fortawesome/free-brands-svg-icons"

const LandingFooter = () => {
    return (
        <footer className="landing-footer flex align-center justify-content-between">
            <img width='126' src={logo} alt="IpostX"/>
            <div className="landing-footer__social">
                <a href="https://twitter.com/">
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
                <a href="https://twitter.com/">
                    <FontAwesomeIcon icon={faTelegram}/>
                </a>
                <a href="https://twitter.com/">
                    <FontAwesomeIcon icon={faTwitter}/>
                </a>
                <a href="https://twitter.com/">
                    <FontAwesomeIcon icon={faVk}/>
                </a>
            </div>
        </footer>
    )
}

export default LandingFooter
