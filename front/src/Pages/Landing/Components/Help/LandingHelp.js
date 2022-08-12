import React from 'react';
import Gradient from "../Gradient"
import {useSelector} from "react-redux"

const MLandingHelpBlock = React.lazy(() => import('./MLandingHelpBlock'))

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


    return (
        <section className="landing-help">
                {helpBlocks.map((helpBlock, index) =>
                    <MLandingHelpBlock
                        key={helpBlock.title}
                        title={helpBlock.title}
                        body={helpBlock.body}
                        index={index}
                        active={helpBlock.active}
                    />
                )}
            <Gradient style={gradientStyle}/>
        </section>
    )
}

export default LandingHelp
