import MainSliderPost from "./MainSliderPost";
import "./SliderPost.scss"

const SliderPost = () => {
  return(
      <>
          <div className="slider-post  flex flex-column">
              <div className="slider-post__main ">
                  <MainSliderPost />
              </div>
          </div>
      </>
  )
}

export default SliderPost