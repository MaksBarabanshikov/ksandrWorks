import Image from "react-image-webp";
import iphoneSrc from "../../../../Assets/image/landing/iPhone.png"
import iphoneWebp from "../../../../Assets/image/landing/iPhone.png"
import HashtagManBot from "./HashtagManBot";

const Iphone = () => {
    return (
        <div className="phone-helper relative max-w-[607px] lg:min-h-[680px] max-h-[440px] md:min-h-full lg:max-h-[680px] m-auto overflow-hidden pt-12 lg:pt-36">
            <Image
                className="w-100 h-100 absolute inset-0 -z-50"
                src={iphoneSrc}
                webp={iphoneWebp}
            />
            <HashtagManBot />
        </div>
    )
}

export default Iphone
