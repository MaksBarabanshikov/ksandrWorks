import loader from "../../Assets/image/loader.png"
import './loader.scss'

const Loader = ({width, height}) => {

    return <div className="loader text-center">
        <img
            src={loader}
            style={{width: `${width}px`, height: `${height}px`}} alt=""
        />
    </div>
}

export default Loader