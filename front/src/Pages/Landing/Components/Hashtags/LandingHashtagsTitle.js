import {useSelector} from "react-redux";

import LandingHashtagsTitleItem from "./LandingHashtagsTitleItem";

const LandingHashtagsTitle = () => {
    const tabsTitle = useSelector(state => state.landing.tabsTitle)
    const activeTab = useSelector(state => state.landing.activeTab)

    return (
        <div className='landing-hashtags__title'>

            <h1 className={activeTab.title.length >= 10 ? 'small_h1' : ''}><strong>{activeTab.title}</strong></h1>
                <div
                    className='landing-hashtags_tabs flex'
                >
                    {
                        tabsTitle.filter(tab => tab.id !== activeTab.id).map(tab =>
                            <LandingHashtagsTitleItem
                                key={tab.id}
                                tab={tab}
                            />
                        )
                    }
                </div>
        </div>
    )
}
export default LandingHashtagsTitle