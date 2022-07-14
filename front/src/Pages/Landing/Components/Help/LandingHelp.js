import MotionSectionX from "../Motion/MotionSectionX";
import Gradient from "../Gradient";
import img1 from "../../../../Assets/image/landing/for-businessman.png"
import img2 from "../../../../Assets/image/landing/for-entrepreneurs.png"

import img3 from "../../../../Assets/image/landing/for-bloggers.png"
import rocket from "../../../../Assets/image/landing/rocket-dynamic-gradient.png"
import trophy from "../../../../Assets/image/landing/trophy-dynamic-gradient.png"

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
                <img className="landing-help__block_rocket" src={rocket} alt=""/>
                <img className="landing-help__block_trophy" src={trophy} alt=""/>
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
            <img className="landing-help__img landing-help__img_one" src={img1} alt="владельцам бизнеса"/>
            <img className="landing-help__img landing-help__img_two" src={img2} alt="предпринимателям"/>
            <img className="landing-help__img landing-help__img_three" src={img3} alt="блогерам"/>
            <Gradient style={gradientStyle}/>
        </MotionSectionX>
    )
}

export default LandingHelp
