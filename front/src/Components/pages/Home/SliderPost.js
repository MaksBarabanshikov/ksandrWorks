import MainSliderPost from "./MainSliderPost";
import "./SliderPost.scss"


const SliderPost = () => {
  return(
      <>
          <div className="slider-post  flex flex-column">
              <div className="slider-post__main ">
                  <MainSliderPost/>
              </div>
              <div className="slider-post__control flex align-center">
                    <span>
                        Выберите нужный пост
                    </span>
              </div>
          </div>
      </>


  )
}

export default SliderPost