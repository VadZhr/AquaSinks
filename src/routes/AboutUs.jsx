import React from 'react'
import './about.css'
import aboutBg from '../assets/images/aboutus.jpeg'
import aboutBg_1 from '../assets/images/aboutus_1.jpg'
import HomeLink from '../components/HomeLink'



export default function AboutUs() {
  return (
    <section className="about">
        <div className="container">
            <div className="about-wrapper">
                <div className="about-left">
                    <div className="about-background">
                        <div className='about-bg_1' src="" alt="backround 1" />
                        <img className='about-bg_2' src={'Fratelli/assets/images/aboutus_1.jpg'} alt="backround 2" />
                    </div>
                </div>
                <div className="about-right">
                    <img src={aboutBg_1} alt="background right" />
                    <h3>About us</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, rerum. Saepe quidem facere rerum doloribus incidunt sequi debitis voluptas omnis laborum delectus! Temporibus, officia sapiente.</p>
                    <br />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem nisi laudantium fugit cumque, consequuntur cupiditate doloribus.</p>
                    <br />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores dolore iusto velit aut molestias, fuga magnam doloremque sint recusandae, sunt omnis! Doloribus et vel laboriosam. Eius, provident? Obcaecati, dignissimos eaque!</p>
                    <br />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam sapiente exercitationem unde enim itaque, dolor molestias at suscipit non maiores excepturi a eaque aut nisi voluptate sunt sint incidunt! Vitae ipsum vel ipsa exercitationem voluptas corrupti, deserunt vero, in perspiciatis saepe numquam dignissimos rem iure similique? Tempore similique aliquid corporis deleniti sequi, optio quod, adipisci dignissimos eum fuga ut natus sint suscipit iusto, molestias nisi corrupti quasi. Perspiciatis, architecto, aliquam animi facere molestiae optio ab dicta quod dolor velit quam non debitis, unde sint sequi omnis sed iste voluptates. Excepturi laboriosam eos vero ab obcaecati corporis dicta atque velit magnam.</p>
                <HomeLink/>
                </div>
            </div>
        </div>
    </section>
  )
}
