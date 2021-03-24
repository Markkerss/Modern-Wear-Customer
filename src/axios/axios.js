import axios from 'axios'

const instance = axios.create({
    baseURL:'https://modernwear-cmsserver.herokuapp.com'
})

export default instance
