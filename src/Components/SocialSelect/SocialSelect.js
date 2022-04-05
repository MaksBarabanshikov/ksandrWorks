import {SocialData} from "../../StorageData/SocialData"
import "./SocialSelect.scss"
import SocialSelectItem from "./SocialSelectItem";
import {useEffect, useState} from "react";

const SocialSelect = () => {
    const [network, setNetwork] = useState([...SocialData])


    const handleSetActive = (item) => {
        if (!item.active) {
            setNetwork(
                network.map(net => {
                    net.active = false
                    if (net.id === item.id) {
                        net.active = !net.active
                    }
                    return net
                })
            )
        }
    }

    return (
        <div className="social-select flex">
            {network.map(item =>
                (
                    <SocialSelectItem
                        key={item.id}
                        className="social-select-card"
                        network={item}
                        handleSetActive={handleSetActive}
                    />
                )
            )}
        </div>
    )

}
export default SocialSelect