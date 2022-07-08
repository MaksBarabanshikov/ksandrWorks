import {uniqueId} from "../../../Utils/redux/modules/favoritesSlice";
import TopHashtagButton from "./TopHashtagButton";
import {useState} from "react";

const TopHashtags = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const handleSetIndex = index => {
        setActiveIndex(index)
    }

    const hashtags = [
        {id: uniqueId(), hashtag: 'Хештег'},
        {id: uniqueId(), hashtag: 'Хештег'},
        {id: uniqueId(), hashtag: 'Хештег'},
        {id: uniqueId(), hashtag: 'Хештег'},
        {id: uniqueId(), hashtag: 'Хештег'},
        {id: uniqueId(), hashtag: 'Хештег'},
        {id: uniqueId(), hashtag: 'Хештег'},
        {id: uniqueId(), hashtag: 'Хештег'},
        {id: uniqueId(), hashtag: 'Хештег'},
        {id: uniqueId(), hashtag: 'Хештег'},
        {id: uniqueId(), hashtag: 'Хештег'},
        {id: uniqueId(), hashtag: 'Хештег'},
        {id: uniqueId(), hashtag: 'Хештег'},
        {id: uniqueId(), hashtag: 'Хештег'},
        {id: uniqueId(), hashtag: 'Хештег'},
        {id: uniqueId(), hashtag: 'Хештег'},
        {id: uniqueId(), hashtag: 'Хештег'},
        {id: uniqueId(), hashtag: 'Хештег'},
        {id: uniqueId(), hashtag: 'Хештег'},
        {id: uniqueId(), hashtag: 'Хештег'},
        {id: uniqueId(), hashtag: 'Хештег'},
        {id: uniqueId(), hashtag: 'Хештег'},
        {id: uniqueId(), hashtag: 'Хештег'},
        {id: uniqueId(), hashtag: 'Хештег'},
        {id: uniqueId(), hashtag: 'Хештег'},
        {id: uniqueId(), hashtag: 'Хештег'},
        {id: uniqueId(), hashtag: 'Хештег'},
        {id: uniqueId(), hashtag: 'Хештег'},
    ]




    return (
        <div className="modal-hashtags_top">
            {hashtags.map((hashtag, index) => <TopHashtagButton
                key={hashtag.id}
                text={hashtag.hashtag}
                index={index}
                activeIndex={activeIndex}
                setIndex={handleSetIndex}
            />)}
        </div>
    )
}

export default TopHashtags