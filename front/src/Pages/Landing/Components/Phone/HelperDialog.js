import {useState} from "react";
import HelperDialogMessage from "./HelperDialogMessage";

const HelperDialog = () => {
    const [step, setStep] = useState(0);
    const data = [
        {
            step: 0,
            text: 'Салют, на связи IpostX =) Меня зовут Хэштегарь и я твой личный помощник.\n' +
                'Хочешь получать огромное количество заявок в свой бизнес или новых подписчиков?',
            buttons: ['Да, конечно хочу', 'В чем суть?']
        },
        {
            step: 1,
            text: 'Ты сможешь ежедневно продвигать свою страницу или бизнес на базе нашего инструментария, я сделаю так, ' +
                'чтобы с каждой твоей публикации в инсте на тебя подписывались заинтересованные подписчики, а клиенты оставляли заявки ',
            buttons: ['Круто', 'Что ещё?']
        },
        {
            step: 2,
            text: 'ТА еще я хочу сделать для тебя подарок, мне кажется ты клевый(ая) и заслуживаешь бонуса в виде' +
                ' бесплатной тестовой версии на (срок) Уверен, мы с тобой подружимся',
            buttons: ['Круто']
        }
    ]

    const handleSetStep = () => {
        if (step === 2) {
            return
        }
        setStep(step + 1)
    }


    return (
        <>
            {/*<div className="flex align-middle mb-3">*/}
            {/*    <span className="block w-[10px] h-[10px] bg-landing-blue rounded-full mr-1"></span>*/}
            {/*    <span className="block w-[10px] h-[10px] bg-landing-blue rounded-full mr-1"></span>*/}
            {/*    <span className="block w-[10px] h-[10px] bg-landing-blue rounded-full"></span>*/}
            {/*</div>*/}

            <div className="phone-helper__main max-w-[90%] m-auto px-3.5">
                {data?.filter(f => f.step === step).map(m => (
                    <HelperDialogMessage
                        key={m.step}
                        text={m.text}
                        buttons={m.buttons}
                        setStep={handleSetStep}
                    />
                ))}
            </div>
        </>
    )
}

export default HelperDialog
