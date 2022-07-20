import LandingButton from "../LandingButton";

const WhyIPostX = ({card}) =>
    <div className="why-ipostX__card">
        <div className="why-ipostX__circle">
            <h1 style={{fontWeight: '900'}}>
                {card.title}
            </h1>
        </div>

        {(card.title === '01' || card.title === '02') &&
            <>
                <LandingButton width={'220px'} height={'41px'} children={<span>{card.buttonText}</span>}/>
                <strong>{card.textStrong}</strong>
                <p>{card.text}</p>
            </>
        }
        {card.title === '03' &&
            <>
                <LandingButton width={'220px'} height={'41px'} children={<span>{card.buttonText}</span>}/>
                <p>{card.text}</p>
                <strong>{card.textStrong}</strong>
            </>
        }

        {card.title === '04' &&
            <>
                <LandingButton width={'220px'} height={'41px'} children={<span>{card.buttonText[0]}</span>}/>
                <p>{card.text[0]}</p>
                <strong>{card.textStrong}</strong>
                <LandingButton width={'220px'} height={'41px'} children={<span>{card.buttonText[1]}</span>}/>
                <p>{card.text[1]}</p>
            </>
        }

    </div>

export default WhyIPostX