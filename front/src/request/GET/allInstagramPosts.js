import axios from "axios";
import {HashtagsContext} from "../../context/HashtagsContext";
import {useContext} from "react";

const AllInstagramPosts = () => {
    const {updatePosts} = useContext(HashtagsContext)
    axios.get(`/api/hashtags/all-instagram-posts`)
        .then(res => {
            updatePosts(res.data)
        })
        .catch(e => {
            console.log(e.response)
        })
        .finally(() => {
            console.log('Запрос завершен')
        })
}

export default AllInstagramPosts


