import WhyIPostXList from "./WhyIPostXList";
import Gradient from "../Gradient";

const WhyIPostX = () => {

    const gradientStyle = {
        left: 0,
        transform: 'translate(-96%, 11%)',
        position: 'absolute',
        width: '532.09px',
        height: '484px',
    }

  return (
      <section className='why-ipostX'>
          <h1>Зачем нужен <strong>ipostX</strong> ?</h1>
          <WhyIPostXList/>
          <Gradient style={gradientStyle}/>
      </section>

  )
}

export default WhyIPostX