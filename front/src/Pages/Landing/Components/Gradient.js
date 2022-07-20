const Gradient = ({style}) => {
    const ellipse1 = {
        position: 'absolute',
        background: 'linear-gradient(261.63deg, #7000FF 4.87%, #06FFF0 87.02%)',
        filter: 'blur(133.94px)',
        transform: 'rotate(54.35deg)',
        width: 312,
        height: 366,
    }
    const ellipse2 = {
        position: 'absolute',
        background: 'linear-gradient(180deg, #FB03F5 0%, #AA9CFF 100%)',
        filter: 'blur(47.415px)',
        transform: 'rotate(76.66deg)',
        width: 194.35,
        height: 285.21,
        top: 30,
        left: 105,
        borderRadius: "50%"
    }
    const ellipse3 = {
        position: 'absolute',
        background: 'linear-gradient(180deg, #2603FB 0%, #D906FF 99.99%, #DC06FF 100%)',
        filter: 'blur(86px)',
        transform: 'rotate(-22.54deg)',
        width: 155.27,
        height: 155.27,
        borderRadius: '50%',
        left: 237,
        bottom: 121
    }
    const ellipse4 = {
        position: 'absolute',
        background: 'linear-gradient(180deg, #03FB75 0%, #06FFF0 100%)',
        filter: 'blur(353.465px)',
        transform: 'rotate(76.66deg)',
        width: 194.35,
        height: 285.21,
        bottom: 10,
        left: 0
    }
    return (
        <div className="landing-gradient" style={style}>
            <div style={ellipse1}></div>
            <div style={ellipse2}></div>
            <div style={ellipse3}></div>
            <div style={ellipse4}></div>
        </div>

    )
}

export default Gradient