import React, { useState } from 'react'
import './authorization.css'
import { useDispatch, useSelector } from 'react-redux'
import { login, registration, setClicked } from '../features/authorization/authSlice'

import loadingGif from '../assets/loading.gif'

export default function Autorization() {
    // const {store} = useContext(Context)
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")
    const [error, setError] = useState("")
    const errorMessage = useSelector(state => state.authSlice.errorMessage)
    const isLoading = useSelector(state => state.authSlice.isLoading)
    const clicked = useSelector(state => state.authSlice.clickedToLog)
    const dispatch = useDispatch()

    //ДЛЯ РЕГИСТРАЦИИ
    // const register = async (e) => {
    //     e.preventDefault()
    //     dispatch(registration({email, password}))
    // }

    const logIn = async (e) => {
        e.preventDefault()
        dispatch(setClicked(true))
        dispatch(login({email, password}))            
    }

    return (
        <section className='authorization'>
            <form className="authorization-form">
                <div className="error-message">
                    {error ? error : ""}
                </div>
                <div className="row">
                    <label htmlFor="login">Логин</label>
                    <input type="email" id={"login"} required onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="row">
                    <label htmlFor="pass">Пароль</label>
                    <input type="password" id={"pass"} required onChange={(e) => setPass(e.target.value)} />
                </div>
                <div className="row buttons">
                    {/* <button onClick={(e) => register(e)}>Регаемся</button> */}
                    <button onClick={(e) => logIn(e)}>Войти</button>
                </div>
                {/* <button href="">забыл пароль</button> */}
                {clicked && <div style={{margin: '0 auto'}}><img src={loadingGif} width={100}/></div>}
                {errorMessage && <p style={{color: 'red', textAlign: 'center'}}>{errorMessage}</p>}
            </form>
        </section>
    )
}
