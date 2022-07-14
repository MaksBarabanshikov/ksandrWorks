import TariffsList from "./TariffsList";
import MotionSectionX from "../Motion/MotionSectionX";

const Tariffs = () => {
    return (
        <MotionSectionX classNames='landing-tariffs'>
            <h1><strong>тарифы</strong></h1>
            <TariffsList/>
        </MotionSectionX>
    )
}

export default Tariffs