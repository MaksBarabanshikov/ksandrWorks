import MainSliderPost from "./MainSliderPost";
import "./SliderPost.scss"

const SliderPost = ({isSendId}) => {
  return(
      <>
          <div className="slider-post  flex flex-column">
              <div className="slider-post__main ">
                  <MainSliderPost isSendId={isSendId} />
              </div>
          </div>
      </>
  )
}

export default SliderPost