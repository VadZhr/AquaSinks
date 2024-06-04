import React, { useEffect, useState } from 'react'
import './about.css'
import aboutBg_1 from '../assets/images/aboutus_1.jpg'
import axios from 'axios'
import AboutSlider from '../components/AboutSlider'

export default function AboutUs() {
  const [aboutData, setAboutData] = useState('')

  useEffect(() => {
    axios.get('https://fratelli.kz/api/aboutpage/getimages').then(data => {
      setAboutData(data.data)
    })
  }, [])

  console.log(aboutData);
  return (
    <section className="about">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-right">
            {/* <img src={aboutBg_1} alt="background right" /> */}
            <div className="about-right about-slider-container">
              {aboutData?.aboutImagePath?.length > 0 && <AboutSlider aboutImages={aboutData?.aboutImagePath} />}
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam deleniti adipisci nulla consectetur asperiores vero odit quasi ex recusandae optio.</p>
            </div>
            {aboutData?.aboutTitle && <h3>{aboutData?.aboutTitle}</h3>}

            {aboutData?.aboutText && <pre>{aboutData?.aboutText}</pre>}
          </div>
        </div>
      </div>
    </section>
  )
}
