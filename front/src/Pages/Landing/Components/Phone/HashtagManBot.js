import Image from "react-image-webp";
import hashtagManSrc from "../../../../Assets/image/landing/hashtagman.png"
import hashtagManWebp from "../../../../Assets/image/landing/hashtagman.webp"
import HelperDialog from "./HelperDialog";

const HashtagManBot = () => {
    return (
        <div className='phone-helper__container  m-auto text-white'>
            <div className="phone-helper__top relative">
                <Image
                    className='m-auto relative w-1/3 lg:w-auto'
                    width={256}
                    height={256}
                    src={hashtagManSrc}
                    webp={hashtagManWebp}
                    alt='ipostX'
                />
            </div>
            <HelperDialog/>
        </div>
    )
}

export default HashtagManBot
