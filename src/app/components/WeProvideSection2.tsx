import React from 'react'
import Image from 'next/image'
import customizeCurtain from '../assets/icons/customize-curtain.svg'
import freeSample from '../assets/icons/free-sample.svg'
import yearOfExpertise from '../assets/icons/year-of-expertise.svg'

const WeProvideSection2 = () => {
  return (
    <section className='we__provide__section'>
      <div className='our__services'>
        <Image src={customizeCurtain} alt=''/>
        <div className='content'>
            <h5>Customize Curtain</h5>
            <p>Free measurement at your home</p>
        </div>
      </div>
      <div className='our__services'>
        <Image src={freeSample} alt=''/>
        <div className='content'>
            <h5>Free Sample</h5>
            <p>Free measurement at your home</p>
        </div>
      </div>
      <div className='our__services'>
        <Image src={yearOfExpertise} alt=''/>
        <div className='content'>
            <h5>25+ year of expertise</h5>
            <p>Free measurement at your home</p>
        </div>
      </div>
    </section>
  )
}

export default WeProvideSection2
