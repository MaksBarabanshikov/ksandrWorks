import Image from "react-image-webp";
import rocket from "../../../../Assets/image/landing/rocket-dynamic-gradient.png";
import rocketWebp from "../../../../Assets/image/landing/rocket-dynamic-gradient.webp";
import trophy from "../../../../Assets/image/landing/trophy-dynamic-gradient.png";
import trophyWebp from "../../../../Assets/image/landing/trophy-dynamic-gradient.webp";
import {useDispatch} from "react-redux";
import {setActiveBlock} from "../../../../Utils/redux/modules/landingSlice";

const MLandingHelpBlock = ({title, body, active, index}) => {
    const dispatch = useDispatch()

    const blockVariant = {
        notSelectedRight: {
            rotate: 12
        },
        notSelectedLeft: {
            rotate: -12
        },
        selected: {
            rotate: 0
        }
    }

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
        return <div
            className={`landing-help__block ${active ? 'active' : ''}`}
            style={{rotate: 0}}
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
        </div>
    }
    return (
        <div
            className='landing-help__block'
            onClick={() => dispatch(setActiveBlock(index))}
        >
            {content}
        </div>
    )
}

export default MLandingHelpBlock
