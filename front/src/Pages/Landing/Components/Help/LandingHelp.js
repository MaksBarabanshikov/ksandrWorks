import Gradient from "../Gradient";
import {useSelector} from "react-redux";
import LandingHelpBlock from "./LandingHelpBlock";
import {AnimatePresence} from "framer-motion";

const LandingHelp = () => {
    const helpBlocks = useSelector(state => state.landing.helpBlocks)
    const gradientStyle = {
        position: 'absolute',
        width: '532.09px',
        height: '484px',
        bottom: -60,
        left: '50%',
        zIndex: 0,
        transform: 'translateX(-45%)'
    }


    return (
        <section className="landing-help">
            <AnimatePresence initial={false} exitBeforeEnter>
                {helpBlocks.map((helpBlock, index) =>
                    <LandingHelpBlock
                        key={helpBlock.title}
                        title={helpBlock.title}
                        body={helpBlock.body}
                        index={index}
                        active={helpBlock.active}
                    />
                )}
            </AnimatePresence>
            <Gradient style={gradientStyle}/>
        </section>
    )
}

export default LandingHelp
