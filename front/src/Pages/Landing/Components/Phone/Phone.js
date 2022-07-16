import phone from '../../../../Assets/image/landing/phone.png'
import phoneWebp from '../../../../Assets/image/landing/phone.webp'
import blurImg1 from '../../../../Assets/image/landing/bookmark-dynamic-color.png'
import blurImg1Webp from '../../../../Assets/image/landing/bookmark-dynamic-color.webp'
import blurImg2 from '../../../../Assets/image/landing/flash-dynamic-color.png'
import blurImg2Webp from '../../../../Assets/image/landing/flash-dynamic-color.webp'
import Image from "react-image-webp";

const Phone = () => {
    return (
        <section className="landing-phone">
            <Image
                src={phone}
                webp={phoneWebp}
                alt="Помощник"/>
            <Image
                className="landing-phone__blur1"
                src={blurImg1}
                webp={blurImg1Webp}
                alt=""/>
            <Image
                className="landing-phone__blur2"
                src={blurImg2}
                webp={blurImg2Webp}
                alt=""/>
        </section>
    )
}

export default Phone