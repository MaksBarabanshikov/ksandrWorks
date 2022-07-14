import MotionSectionX from "../Motion/MotionSectionX";
import Gradient from "../Gradient";
import img1 from "../../../../Assets/image/landing/for-businessman.png"
import img1Webp from "../../../../Assets/image/landing/for-businessman.webp"
import img2 from "../../../../Assets/image/landing/for-entrepreneurs.png"
import img2Webp from "../../../../Assets/image/landing/for-entrepreneurs.webp"

import img3 from "../../../../Assets/image/landing/for-bloggers.png"
import img3Webp from "../../../../Assets/image/landing/for-bloggers.webp"
import rocket from "../../../../Assets/image/landing/rocket-dynamic-gradient.png"
import rocketWebp from "../../../../Assets/image/landing/rocket-dynamic-gradient.webp"
import trophy from "../../../../Assets/image/landing/trophy-dynamic-gradient.png"
import trophyWebp from "../../../../Assets/image/landing/trophy-dynamic-gradient.webp"
import Image from "react-image-webp";

const LandingHelp = () => {

    const gradientStyle = {
        position: 'absolute',
        width: '532.09px',
        height: '484px',
        bottom: -60,
        left: '50%',
        zIndex: 0,
        transform: 'translateX(-45%)'
    }


    return (
        <MotionSectionX classNames="landing-help">
            <div className='landing-help__block'>
                <Image
                    className="landing-help__block_rocket"
                    src={rocket}
                    webp={rocketWebp}
                    alt="rocket"
                />
                <Image
                    className="landing-help__block_trophy"
                    src={trophy}
                    webp={trophyWebp}
                    alt="trophy"/>
                <h3 className="landing-help__block_title">
                    SMM-специалист
                </h3>
                <div className="landing-help__block_content">
                    <p>
                        Подобрать для клиента базу из целевой аудитории, подготовить креативы и сделать массувую рассылку всем потенциальным клиентам/подписчикам. Твой клиент наверняка возбудиться
                        от притока новых клиентов и возжможно даже уводит своего маркетолога, так что будь аккратней с нашим оружием.😃
                    </p>
                    <p>
                        Вы сможете вести диалоги со всеми клиентами из рассылок, это позволит вам выстроить качественную цепочку писем, для утепления
                        и последужщей продажи. Именно при таком подходе мы наблюдаем наивысшие показатели конверсий. Людям не нравится спам, а с Айпост вы сможете очень деликатно вести продажи.
                    </p>
                </div>
            </div>
            <div className="landing-help__bg"/>
            <Image
                className="landing-help__img landing-help__img_one"
                src={img1}
                webp={img1Webp}
                alt="владельцам бизнеса"
            />
            <Image
                className="landing-help__img landing-help__img_two"
                src={img2}
                webp={img2Webp}
                alt="предпринимателям"
            />
            <Image
                className="landing-help__img landing-help__img_three"
                src={img3}
                webp={img3Webp}
                alt="блогерам"
            />
            <Gradient style={gradientStyle}/>
        </MotionSectionX>
    )
}

export default LandingHelp
