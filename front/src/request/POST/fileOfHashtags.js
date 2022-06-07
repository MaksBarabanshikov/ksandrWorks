import axios from "axios";

const fileOfHashtags = async (result) => {
    try {
        await axios.post('/api/hashtags/file-of-hashtags',
            {
                file: result
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {alert(response.data.message)})
    } catch (e) {
        console.log({e})
    }
}

export default fileOfHashtags