import loader from "../../image/loader.png"

const Loader = ({width, height}) => {

    return <div className="loader">
        <img src={loader} style={{width: `${width}px`, height: `${height}px`}} alt=""/>
    </div>
}

export default Loader