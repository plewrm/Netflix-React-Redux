import axios from 'axios'

const instance =axios.create({
    // baseURL:"https://api.themoviedb.org/3/movie/550?api_key=daaba6bbe6610cf85d4f58cc1c6ac773"
    baseURL:"https://api.themoviedb.org/3"
})
export default instance;