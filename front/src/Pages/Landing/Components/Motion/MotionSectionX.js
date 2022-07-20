import { motion } from 'framer-motion'

const MotionSectionX = ({classNames, children}) => {
    const sectionVariant = {
        hidden: {
            x: -30,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1
        }
    }
    return (
        <motion.section
            className={classNames}
            variants={sectionVariant}
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.4, once: true}}
            transition={{
                delay: 0.25,
            }}
        >
            {children}
        </motion.section>
    )
}

export default MotionSectionX
