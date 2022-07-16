import LandingButton from "./LandingButton";
import fire from '../../../Assets/image/landing/fire.svg'
import Grid from "./Grid";
import hero from '../../../Assets/image/landing/hero.png'
import Gradient from "./Gradient";
import {motion} from "framer-motion";

const Welcome = () => {
    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay:0.5,
                staggerChildren: 0.08
            }
        }
    }

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
        }
    }

    const h2Variant = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay:2.7,
            }
        }

    }

    const line1 = 'Получай горячих клиентов в instagram'

    const btnChildren = <>
        <img src={fire} alt=""/>
        <span>Активировать предложение</span>
    </>

    const style1 = {
        top: -145,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: -10
    }
    const style2 = {
        top: 0,
        right: 0,
        zIndex: -10
    }

    const gradientStyle = {
        position: 'absolute',
        width: '532.09px',
        height: '484px',
        top: 270,
        right: 0,
        zIndex: 10000
    }

    return (
        <section className='landing-welcome flex'>
            <div className="landing-welcome__content">
                <motion.h1
                    variants={sentence}
                    initial="hidden"
                    animate="visible"
                >
                    {line1.split('').map((char, index) => {
                        return (
                            <motion.span
                                key={char + '-' + index}
                                variants={letter}
                            >
                                {char}
                            </motion.span>
                        )
                    })}
                </motion.h1>

                <motion.h2
                    initial="hidden"
                    variants={h2Variant}
                    animate="visible"
                >
                    24/7 уже в первую неделю
                </motion.h2>

                <div className='landing-welcome__activate'>
                    <p className="text-white">
                        Благодаря инструментам <strong>ipostX</strong> ты настроишь дополнительный
                        канал продаж в своем бизнесе и выйдешь но новый уровень дохода
                    </p>
                    <LandingButton width={'100%'} height={'70px'} children={btnChildren}/>
                    <Grid style={style1}/>
                </div>
            </div>
            <img className="landing-welcome__hero" src={hero} alt="IpostX"/>
            <Gradient style={gradientStyle}/>
            <Grid style={style2}/>
        </section>

    )
}

export default Welcome