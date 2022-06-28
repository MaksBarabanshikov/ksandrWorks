// import axios from "axios";
//
// const getAccessId = async (response) => {
//     try {
//         await axios.post('/api/hashtags/get-access-id', {
//             accessToken: response.accessToken, userId: response.userID
//         }, {
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }).then(response => {
//             console.log(response.data.message)
//         })
//     } catch (e) {
//         console.log({e})
//     }
// }
//
// export default getAccessId