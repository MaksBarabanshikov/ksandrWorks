import LandingHashtagsItem from "./LandingHashtagsItem";
import {AnimatePresence} from 'framer-motion'
import {useSelector} from "react-redux";


const LandingHashtagsList = () => {
    const tabsContent = useSelector(state => state.landing.tabsContent)
    const activeTab = useSelector(state => state.landing.activeTab)

    return (
            <div className="landing-hashtags__wrapper">
                <div className='landing-hashtags__border'>
                    <AnimatePresence initial={false} exitBeforeEnter>
                        <div
                            className={`landing-hashtags__list ${activeTab.id}`}
                        >
                            {tabsContent[activeTab.id].map(item => <LandingHashtagsItem key={item.id} item={item}/>)}
                        </div>
                    </AnimatePresence>
                </div>
            </div>
    )
}

export default LandingHashtagsList