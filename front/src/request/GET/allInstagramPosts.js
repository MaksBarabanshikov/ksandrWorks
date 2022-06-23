import axios from "axios";

const AllInstagramPosts = () => {
    axios.get(`/api/hashtags/all-instagram-posts`)
        .then(res => {
            console.log(res)
        })
        .catch(e => {
            console.log(e.response)
        })
        .finally(() => {
            console.log('Запрос завершен')
        })
}

export default AllInstagramPosts


