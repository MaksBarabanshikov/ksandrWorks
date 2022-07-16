import { motion } from "framer-motion"
import {setActiveTab} from "../../../../Utils/redux/modules/landingSlice";
import {useDispatch} from "react-redux";

const LandingHashtagsTitleItem = ({tab}) => {
    const dispatch = useDispatch()


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{
                backgroundColor: '#1e50fe',
                color: '#fff',
                boxShadow: '0 0 6px #1e50fe',
                transition: { duration: 0.25 },
                easing: 'easeInOut'
            }}
            layout
            className='landing-hashtags_tab text-white-op-15'
            onClick={() => dispatch(setActiveTab(tab))}
        >
            {tab.text}
        </motion.div>
    )
}

export default LandingHashtagsTitleItem
