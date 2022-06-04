import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import post from "../../../image/post-test.jpg"

const SliderPost = () => {
  return(
      <div className="slider-post">
          <div className="slider-post__img">
              <img src={post} alt="Пост"/>
          </div>
          <div className="slider-post__control flex justify-content-between align-center">
              <button className="slider-post__control_prev slider-post__control_btn black-opacity">
                  <FontAwesomeIcon icon={faAngleLeft}/>
              </button>
              <span className="black-opacity_text">
                  Выберите нужный пост
              </span>
              <button className="slider-post__control_next slider-post__control_btn black-opacity">
                  <FontAwesomeIcon icon={faAngleRight}/>
              </button>
          </div>
      </div>
  )
}

export default SliderPost