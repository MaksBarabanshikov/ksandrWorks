import Image from "react-image-webp";

const LandingHashtags = ({item}) => {

  return(
      <div
          className={`landing-hashtags__item flex flex-column align-center ${item.active ? 'active' : ''}`}
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
      </div>
  )
}

export default LandingHashtags