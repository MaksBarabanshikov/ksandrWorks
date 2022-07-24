import {LazyMotion, domAnimation, m} from "framer-motion"

const MotionSectionX = ({classNames, children}) => {
    const sectionVariant = {
        hidden: {
            x: -10,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1
        }
    }
    return (
        <LazyMotion features={domAnimation}>
            <m.section
                className={classNames}
                variants={sectionVariant}
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.15, once: true}}
                transition={{
                    delay: 0.25,
                }}
            >
                {children}
            </m.section>
        </LazyMotion>

    )
}

export default MotionSectionX
