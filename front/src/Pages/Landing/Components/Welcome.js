import React, {Suspense} from 'react'
import LandingButton from "./LandingButton"
import Image from "react-image-webp";
import heroPng from '../../../Assets/image/landing/hero.png'
import heroWebp from '../../../Assets/image/landing/hero.webp'
import fire from '../../../Assets/image/landing/fire.svg'

const Grid = React.lazy(() => import('./Grid'))
const Gradient = React.lazy(() => import('./Gradient'))

const Welcome = () => {
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
                <h1>Получай горячих клиентов в instagram</h1>
                <h2>24/7 уже в первую неделю</h2>
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
            <Image
                className="landing-welcome__hero"
                src={heroPng}
                webp={heroWebp}
                alt="IpostX"
            />
            <Suspense fallback={null}>
                <Gradient style={gradientStyle}/>
            </Suspense>
            <Suspense fallback={null}>
                <Grid style={style2}/>
            </Suspense>
        </section>
    )
}

export default Welcome