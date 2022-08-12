import {setActiveTab} from "../../../../Utils/redux/modules/landingSlice";
import {useDispatch} from "react-redux";

const LandingHashtagsTitleItem = ({tab}) => {
    const dispatch = useDispatch()


    return (
        <div
            className='landing-hashtags_tab text-white-op-15'
            onClick={() => dispatch(setActiveTab(tab))}
        >
            {tab.text}
        </div>
    )
}

export default LandingHashtagsTitleItem
