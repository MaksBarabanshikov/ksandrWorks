import Image from "react-image-webp";
import rocket from "../../../../Assets/image/landing/rocket-dynamic-gradient.png";
import rocketWebp from "../../../../Assets/image/landing/rocket-dynamic-gradient.webp";
import trophy from "../../../../Assets/image/landing/trophy-dynamic-gradient.png";
import trophyWebp from "../../../../Assets/image/landing/trophy-dynamic-gradient.webp";
import {useDispatch} from "react-redux";
import {setActiveBlock} from "../../../../Utils/redux/modules/landingSlice";
import {motion} from "framer-motion"

const LandingHelpBlock = ({title, body, active, index}) => {
    const dispatch = useDispatch()

    const content =
        <>
            <h3 className='landing-help__block_title'>
                {title}
            </h3>
            <div className="landing-help__block_content">
                {body.length && body.map(p => <p key={Math.random()}>{p}</p>)}
            </div>
        </>

    if (active) {
        return <motion.div
            className={`landing-help__block ${active ? 'active' : ''}`}
            layout
        >
            <Image
                className="landing-help__block_rocket"
                src={rocket}
                webp={rocketWebp}
                alt="rocket"
            />
            {content}
            <Image
                className="landing-help__block_trophy"
                src={trophy}
                webp={trophyWebp}
                alt="trophy"/>
        </motion.div>
    }
    return (
        <motion.div
            layout
            className='landing-help__block'
            onClick={() => dispatch(setActiveBlock(index))}
        >
            {content}
        </motion.div>
    )
}

export default LandingHelpBlock
