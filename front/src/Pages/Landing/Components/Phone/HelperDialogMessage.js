import x from '../../../../Assets/image/landing/X.svg'

const HelperDialogMessage = ({text, buttons, setStep}) => {

    return (
            <div
                className="phone-helper__message justify-between mb-8 grid gap-3.5 grid-col-1 lg:grid-cols-[50px_minmax(auto,_1fr)]"
            >
                <div className="bg-[#797EE1] border-2 border-white border-opacity-25 w-[50px] h-[50px] hidden lg:flex justify-center align-middle rounded-full ">
                    <img className="mt-1" width={30} height={30} src={x} alt="ipostX"/>
                </div>
                <div className="px-3 lg:px-0">
                    <p className="text-left text-sm lg:text-base bg-landing-blue bg-opacity-60 border-2 border-white/10 mb-3 p-3 rounded-12 break-all">{text}</p>
                    <div className="grid grid-cols-2 lg:gap-3.5 gap-2">
                        {
                            buttons.map(b => (
                                    <button
                                        key={b}
                                        className="text-sm lg:text-base text-center block w-100 lg:py-3.5 md:py-2 bg-landing-blue bg-opacity-60 border-2 border-white/10 rounded-xl font-bold hover:bg-opacity-100"
                                        onClick={() => setStep()}
                                    >
                                        {b}
                                    </button>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
    )
}

export default HelperDialogMessage
