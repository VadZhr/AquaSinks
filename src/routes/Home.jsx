import './home.css'
import bgImage from '../assets/images/bg.webp'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <section className="home">
        <div className="container">
            <div className="home-wrapper">
                <div className="home-left">
                    <div className="home-left__title">
                        <h2>SINK CONTETN</h2>
                    </div>
                    <img src={bgImage} alt="image of a sink" />
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
        </div>
    </section>
  )
}
