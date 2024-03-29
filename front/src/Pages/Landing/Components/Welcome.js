import React, {Suspense} from 'react'
import LandingButton from "./LandingButton"
import {LazyMotion, domAnimation, m} from "framer-motion"
import heroPng from '../../../Assets/image/landing/hero.png'
import fire from '../../../Assets/image/landing/fire.svg'
import useWindowDimensions from "../../../Utils/hooks/useWindowDimensions";

const Grid = React.lazy(() => import('./Grid'))

const Welcome = () => {
    const {width} = useWindowDimensions()
    const sentence = {
        hidden: {opacity: 1},
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.08
            }
        }
    }

    const letter = {
        hidden: {opacity: 0, y: 50},
        visible: {
            opacity: 1,
            y: 0,
        }
    }

    const h2Variant = {
        hidden: {opacity: 0, y: -50},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 2.7,
            }
        }

    }

    const title = 'Получай горячих клиентов из instagram'

    const btnChildren = <>
        <img width='102' src={fire} alt=""/>
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

    const desktop = <LazyMotion features={domAnimation}>
        <m.h1
            variants={sentence}
            initial="hidden"
            animate="visible"
        >
            {title.split('').map((char, index) => {
                return (
                    <m.span
                        key={char + '-' + index}
                        variants={letter}
                    >
                        {char}
                    </m.span>
                )
            })}
        </m.h1>

        <m.h2
            initial="hidden"
            variants={h2Variant}
            animate="visible"
        >
            24/7 уже в первую неделю
        </m.h2>
    </LazyMotion>

    const mobile = <>
        <h1>{title}</h1>
        <h2>24/7 уже в первую неделю</h2>
    </>

    return (
        <section className='landing-welcome flex'>
            <div className="landing-welcome__content">
                {width <= 992 ? mobile : desktop}
                <div className='landing-welcome__activate'>
                    <p className="text-white">
                        Благодаря инструментам <strong>ipostX</strong> ты настроишь дополнительный
                        канал продаж в своем бизнесе и выйдешь но новый уровень дохода
                    </p>
                    <LandingButton width={'100%'} height={'70px'} children={btnChildren}/>
                    <Suspense fallback={null}>
                        <Grid style={style1}/>
                    </Suspense>

                </div>
            </div>
            <img className="landing-welcome__hero"
                 src={heroPng}
                 alt="IpostX"
            />
            <Grid style={style2}/>
        </section>

    )
}

export default Welcome