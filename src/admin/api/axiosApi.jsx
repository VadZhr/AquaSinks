import axios from "axios";

// export const API_URL = "https://fratelli.kz/api"
export const API_URL = "http://26.162.108.48:5000/api"
const $api = axios.create({
    baseURL: API_URL,
    withCredentials: true
})

$api.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

$api.interceptors.response.use(config => {
    return config
}, async error => {
    const originalRequest = error.config
    if(error.response.status == 401 && error.config && !error.config._isRetry){
        originalRequest._isRetry = true
        try {
            const response = await axios.get(`${API_URL}/refresh`, {
                withCredentials: true,           
                headers: {
                    //ПРИ ДЕПЛОЕ УДАЛИТЬ РЕФРЕШ
                    Authorization: `Bearer ${localStorage.getItem('refreshToken')}`
                }   
            })
            localStorage.setItem('token', response.data.accessToken)

            //ПРИ ДЕПЛОЕ УДАЛИТЬ РЕФРЕШ
            localStorage.setItem('refreshToken', response.data.refreshToken)
            console.log(originalRequest)
            return $api.request(originalRequest)
        } catch (error) {
            console.log(error)
        }
    }
    throw error
})

export default $api