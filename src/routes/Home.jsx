import { useSelector } from 'react-redux'
import './home.css'
import { Link, Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
    const link = useSelector(state=>state.path.pathForImagesPC)
  return (

    <section className="home">
        {/* <div className="container">
            <div className="home-wrapper">
                <div className="home-left">
                    <div className="home-left__title">
                        <h2>SINK CONTETN</h2>
                    </div>
                    <img src={link+'/assets/images/bg.webp'} alt="image of a sink" />
                </div>
                <div className="home-right">
                    <div className="home-link">
                        <div className="link">
                            <Link to={"/Fratelli"}>Домашняя</Link>
                            <p className="link-description">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, voluptas! Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <div className="link">
                            <Link to={"/Fratelli/products"}>Продукты</Link>
                            <p className="link-description">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, voluptas! Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <div className="link">
                            <Link to={"/Fratelli/about"}>О Нас</Link>
                            <p className="link-description">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, voluptas! Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <div className="link">
                            <a href="">Самое лучшее</a>
                            <p className="link-description">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, voluptas! Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </section>
  )
}
