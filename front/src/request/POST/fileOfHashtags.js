import axios from "axios";

const fileOfHashtags = async (result) => {
    try {
        await axios.post('/api/hashtags/file-of-hashtags', {
            file: result
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(response)
        })
    } catch (e) {
        console.log({e})
    }
}

export default fileOfHashtags