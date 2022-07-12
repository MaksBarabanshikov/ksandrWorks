import LandingHashtagsList from "./LandingHashtagsList";
import LandingHashtagsTitle from "./LandingHashtagsTitle";

const LandingHashtags = ({item}) => {
  return(
      <div className="landing-hashtags__item flex flex-column align-center">
          <div className="landing-hashtags__item_border-img">
              <img src={item.img} alt=""/>
          </div>

          <strong>{item.title}</strong>
          <p>{item.text}</p>
      </div>
  )
}

export default LandingHashtags