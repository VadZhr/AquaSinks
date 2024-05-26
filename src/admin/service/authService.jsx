import $api from "../api/axiosApi";

export default class AuthService{
    static async login(email ,password){
        return $api.post('/login',{email,password}).then(response => {
            //ПРИ ДЕПЛОЕ УДАЛИТЬ РЕФРЕШ
            localStorage.setItem('token', response.data.accessToken)
            localStorage.setItem('refreshToken', response.data.refreshToken)
            return response
        })
    }
    static async registration(email, password){
        return $api.post('/registration',{email,password}).then(response => {
            
            //ПРИ ДЕПЛОЕ УДАЛИТЬ РЕФРЕШ
            localStorage.setItem('token', response.data.accessToken)
            localStorage.setItem('refreshToken', response.data.refreshToken)
        })
    }
    static async logout(){
        return $api.post('/logout')
    }    
}