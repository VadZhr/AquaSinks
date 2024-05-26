import React, { useContext, useEffect } from 'react'
import "./AdminApp.css"
import { useDispatch, useSelector } from 'react-redux'
import Authorization from './routes/Autorization' 
import MainPage from './components/mainPage'
import IsLoading from './components/isLoading'
import { checkAuth } from './features/authorization/authSlice'


export default function App() {
  const user = useSelector(state => state.authSlice)
  const dispatch = useDispatch()
  useEffect(() => {
    if(localStorage.getItem('token')) dispatch(checkAuth())
  }, [])
  
  if(user.isLoading){
    return <IsLoading/>
  }
 
  return (
    <>
      {user.isAuth ? <MainPage /> : <Authorization/>}        
      {/* <MainPage/>         */}
    </>

  )
}

