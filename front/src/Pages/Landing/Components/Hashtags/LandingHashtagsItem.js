import Image from "react-image-webp";
import { motion } from "framer-motion"

const LandingHashtags = ({item}) => {

  return(
      <motion.div
          className={`landing-hashtags__item flex flex-column align-center ${item.active ? 'active' : ''}`}
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
      >
          <div className="landing-hashtags__item_border-img">
              <Image
                  src={item.img}
                  webp={item.webp}
                  alt=""
              />
          </div>
          <strong>{item.title}</strong>
          <p>{item.text}</p>
      </motion.div>
  )
}

export default LandingHashtags