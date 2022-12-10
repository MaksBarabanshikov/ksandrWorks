import blurImg1 from '../../../../Assets/image/landing/bookmark-dynamic-color.png'
import blurImg1Webp from '../../../../Assets/image/landing/bookmark-dynamic-color.webp'
import blurImg2 from '../../../../Assets/image/landing/flash-dynamic-color.png'
import blurImg2Webp from '../../../../Assets/image/landing/flash-dynamic-color.webp'
import Image from "react-image-webp";
import Iphone from "./Iphone";

const Phone = () => {
    return (
        <section className="landing-phone">
            <Iphone />
            <Image
                className="landing-phone__blur1"
                src={blurImg1}
                webp={blurImg1Webp}
                alt="ipostX"/>
            <Image
                className="landing-phone__blur2"
                src={blurImg2}
                webp={blurImg2Webp}
                alt="ipostX"/>
        </section>
    )
}

export default Phone