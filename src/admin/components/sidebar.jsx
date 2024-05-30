import React, { useContext } from 'react'
import './sidebar.css'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../features/authorization/authSlice'


export default function sidebar() {
    const location = useLocation()
    const dispatch = useDispatch()

    const logOut = (e) => {
        e.preventDefault()
        dispatch(logout())
    }

    return (
        <section className="sidebar">
            <h2 className='admin-panel-name' onClick={() => dispatch(changeFirstId())}>Fratelli</h2>
            <hr className='sidebar-division-line' />
            <ul className='sidebar-nav'>
                <li className={location.pathname.split("/").includes('about') ? 'nav-link active' : 'nav-link'}>
                    <Link to={'/admin/about'}>
                        <div>Главная</div>
                    </Link>
                </li>
                <li className={location.pathname.split("/").includes('categories') ? 'nav-link active' : 'nav-link'}>
                    <Link to={'/admin/categories'}>
                        <div>Катетгории</div>
                    </Link>
                </li>
                <li className={location.pathname.split("/").includes('products') ? 'nav-link active' : 'nav-link'}>
                    <Link to={'/admin/products'}>
                        <div>Продукты</div>
                    </Link>
                </li>
                <li className={location.pathname.split("/").includes('footer') ? 'nav-link active' : 'nav-link'}>
                    <Link to={'/admin/footer'}>
                        <div>Контакты</div>
                    </Link>
                </li>
                <li className={location.pathname.split("/").includes('headerfooter') ? 'nav-link active' : 'nav-link'}>
                    <Link to={'/admin/headerfooter'}>
                        <div>Меню и Футер</div>
                    </Link>
                </li>
                <li className='button-exit'>
                    <button onClick={(e) => logOut(e)}>Выйти</button>
                </li>
            </ul>

        </section>
    )
}
