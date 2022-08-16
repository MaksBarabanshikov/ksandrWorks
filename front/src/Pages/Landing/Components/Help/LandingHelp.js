import React from 'react';
import {useSelector} from "react-redux"
import {AnimatePresence} from "framer-motion"
import LandingHelpBlock from "./LandingHelpBlock"
import useWindowDimensions from "../../../../Utils/hooks/useWindowDimensions"

const MLandingHelpBlock = React.lazy(() => import('./MLandingHelpBlock'))

const LandingHelp = () => {
    const helpBlocks = useSelector(state => state.landing.helpBlocks)
    const { width } = useWindowDimensions()

    if (width <= 992) {
        return (
            <section className="landing-help">
                    {helpBlocks.map((helpBlock) =>
                        <LandingHelpBlock
                            key={helpBlock.title}
                            title={helpBlock.title}
                            body={helpBlock.body}
                        />
                    )}
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
        </section>
    )
}

export default LandingHelp
