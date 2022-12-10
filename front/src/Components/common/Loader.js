import loader from "../../Assets/image/loader.png"
import { motion } from "framer-motion"
import './loader.scss'

const Loader = ({width, height}) => {

    return <div className="loader text-center">
        <motion.img
            src={loader}
            style={{width: `${width}px`, height: `${height}px`}} alt=""
            animate={{rotate: 360}}
            transition={{
                duration: 0.4,
                repeat: Infinity,
                type: 'tween',
                ease: 'easeOut'
            }}
        />
    </div>
}

export default Loader