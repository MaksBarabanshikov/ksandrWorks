import testImage from '../../../../Assets/image/landing/test-image-blog.jpg'
import LandingButton from "../LandingButton";
import MotionSectionXPlus from "../Motion/MotionSectionXPlus";
import Gradient from "../Gradient";

const Blogs = () => {

    const gradientStyle = {
        position: "absolute",
        top: "50%",
        transform: "translateY(-25%)",
        left: '-20%',
        width: '532.09px',
        height: '484px',
    }
    const gradientStyle2 = {
        position: "absolute",
        top: "50%",
        right: '-25%',
        width: '532.09px',
        height: '484px',
    }

    return (
        <MotionSectionXPlus classNames="landing-blogs">
            <h1><strong>Новые статьи</strong> из блога</h1>
            <div className="landing-blogs__row">
                <div className="landing-blogs__big-card">
                    <div className="landing-blogs__card">
                        <div>
                            <h3 className="landing-blogs__card_title flex align-center justify-content-between">
                                статья 1
                                <span className="landing-blogs__card_date">
                                19.08.2022
                            </span>
                            </h3>
                            <img src={testImage} alt="Блог"/>

                            <p className="landing-blogs__card_content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </div>
                        <div className='landing-blogs__card_footer'>
                            <LandingButton width={'220px'} height={'50px'} children={<span>Читать полностью</span>}/>
                        </div>
                    </div>
                </div>
                <div className="landing-blogs__row">
                    <div className="landing-blogs__card">
                        <h3 className="landing-blogs__card_title flex align-center justify-content-between">
                            статья 1
                            <span className="landing-blog__card_date">
                                19.08.2022
                            </span>
                        </h3>
                        <p className="landing-blogs__card_content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua...
                        </p>
                    </div>
                    <div className="landing-blogs__card">
                        <h3 className="landing-blogs__card_title flex align-center justify-content-between">
                            статья 1
                            <span className="landing-blog__card_date">
                                19.08.2022
                            </span>
                        </h3>
                        <p className="landing-blogs__card_content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua...
                        </p>
                    </div>
                    <div className="landing-blogs__card">
                        <h3 className="landing-blogs__card_title flex align-center justify-content-between">
                            статья 1
                            <span className="landing-blog__card_date">
                                19.08.2022
                            </span>
                        </h3>
                        <p className="landing-blogs__card_content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua...
                        </p>
                    </div>
                </div>
            </div>

            <div className="landing-blogs__gradients">
                <Gradient style={gradientStyle}/>
                <Gradient style={gradientStyle2}/>
            </div>
        </MotionSectionXPlus>
    )
}

export default Blogs
