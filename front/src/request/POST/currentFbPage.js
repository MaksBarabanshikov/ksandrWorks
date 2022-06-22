import axios from "axios";

const currentFbPage = async (id) => {
    console.log(id, "перед try")
    try {
        await axios.post("/api/hashtags/current-fb-page",
            {
                fbpage:id
            },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {alert(response.data.message)})
    } catch (e) {
        console.log(e.request)
        console.log(e.response)
        console.log(e)
    }
}

export default currentFbPage