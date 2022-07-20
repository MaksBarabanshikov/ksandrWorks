import Gradient from "../Gradient";
import {useSelector} from "react-redux";
import MLandingHelpBlock from "./MLandingHelpBlock";
import {AnimatePresence} from "framer-motion";
import {IsMobile} from "../../../../Utils/helpers/IsMobile";
import LandingHelpBlock from "./LandingHelpBlock";

const LandingHelp = () => {
    const helpBlocks = useSelector(state => state.landing.helpBlocks)
    const gradientStyle = {
        position: 'absolute',
        width: '532.09px',
        height: '484px',
        bottom: -60,
        left: '50%',
        zIndex: -1,
        transform: 'translateX(-45%)'
    }

    if (IsMobile()) {
        return (
            <section className="landing-help">
                    {helpBlocks.map((helpBlock) =>
                        <LandingHelpBlock
                            key={helpBlock.title}
                            title={helpBlock.title}
                            body={helpBlock.body}
                        />
                    )}
                <Gradient style={gradientStyle}/>
            </section>
        )
    }


    return (
        <section className="landing-help">
            <AnimatePresence initial={false} exitBeforeEnter>
                {helpBlocks.map((helpBlock, index) =>
                    <MLandingHelpBlock
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
