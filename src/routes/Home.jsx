import { useSelector } from 'react-redux'
import './home.css'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
    const link = useSelector(state => state.path.pathForImagesPC)

    return (
        <section className="home">
            <Header></Header>
            <main className='main'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </section>
    )
}
