const SocialSelectItem = ({network, handleSetActive}) => {
    return(
        <a
            className={`social-select-card ${network.active ? "active" : "lock" }`}
            onClick={() => handleSetActive(network) }
        >
            <p>{network.text}</p>
            <img src={network.img} alt=""/>
        </a>
    )
}


export default SocialSelectItem