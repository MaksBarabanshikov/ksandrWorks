import {motion} from 'framer-motion'

const TariffsItem = ({tariff}) => {
    const tariffVariant = {
        close: {
            height: 0,
            opacity: 0
        },
        open: {
            height: 450,
            opacity: 1,
            transition: { delay: 0.3 }
        }
    }
    const tariffContentVariant = {
        close: {
            padding: 0,
        },
        open: {
            padding: '82px 11px 72px 11px',
            transition: { delay:  0.3 }
        }
    }

    return (
        <motion.div
            className={`landing-tariffs__item ${tariff.isPurple ? 'purple' : ''}`}
            variants={tariffVariant}
            viewport={{amount: 0.4, once: true}}
            initial='close'
            whileInView='open'
        >
            <div className="landing-tariffs__item_title">{tariff.title}</div>
            <motion.div className="landing-tariffs__item_main"
                        variants={tariffContentVariant}
                        viewport={{amount: 1, once: true}}
                        initial='close'
                        whileInView='open'
            >
                <ul>
                    {tariff.children.map(item => <li key={item}>{item}</li>)}
                </ul>
            </motion.div>
            <div className="landing-tariffs__item_price">{tariff.price}</div>
        </motion.div>
    )

}


export default TariffsItem