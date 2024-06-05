import React, { useEffect, useState } from 'react'
import './about.css'
import axios from 'axios'
import AboutSlider from '../components/AboutSlider'

export default function AboutUs() {
  const [aboutData, setAboutData] = useState('')

  useEffect(() => {
    axios.get('https://fratelli.kz/api/aboutpage/getimages').then(data => {
      setAboutData(data.data)
    })
  }, [])

  return (
    <section className="about">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-right">
            <div className="about-right about-slider-container">
              {aboutData?.aboutImagePath?.length > 0 && <AboutSlider aboutImages={aboutData?.aboutImagePath} />}
              <p>{aboutData.aboutSliderText}</p>
            </div>
            {aboutData?.aboutTitle && <h3>{aboutData?.aboutTitle}</h3>}
            {aboutData?.aboutText && <pre>{aboutData?.aboutText}</pre>}
          </div>
        </div>
      </div>
    </section>
  )
}
