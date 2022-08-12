import LandingHashtagsItem from "./LandingHashtagsItem";
import {useSelector} from "react-redux";


const LandingHashtagsList = () => {
    const tabsContent = useSelector(state => state.landing.tabsContent)
    const activeTab = useSelector(state => state.landing.activeTab)

    return (
        <div className="landing-hashtags__wrapper">
            <div className='landing-hashtags__border'>
                    <div className={`landing-hashtags__list ${activeTab.id}`}>
                        {tabsContent[activeTab.id].map(item => <LandingHashtagsItem key={item.id} item={item}/>) }
                    </div>
            </div>
        </div>
    )
}

export default LandingHashtagsList