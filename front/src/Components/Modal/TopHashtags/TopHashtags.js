import {uniqueId} from "../../../Utils/redux/modules/favoritesSlice";
import TopHashtagButton from "./TopHashtagButton";

const TopHashtags = () => {

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
        {id: uniqueId(), hashtag: 'Хештег'},
    ]


    return (
        <div className="modal-hashtags_top">
            {hashtags.map(hashtag => <TopHashtagButton key={hashtag.id} text={hashtag.hashtag}/>)}
        </div>
    )
}

export default TopHashtags