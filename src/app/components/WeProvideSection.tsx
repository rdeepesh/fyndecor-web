import React from 'react'
import Image from 'next/image'
import freeMeasurement from '../assets/icons/free-measurement.svg'
import noInstallationCharges from '../assets/icons/no-installation-charges.svg'
import yearOfExpertise from '../assets/icons/year-of-expertise.svg'

const WeProvideSection = () => {
  return (
    <section className='we__provide__section'>
      <div className='our__services'>
        <Image src={freeMeasurement} alt=''/>
        <div className='content'>
            <h5>Free measurement</h5>
            <p>Free measurement at your location</p>
        </div>
      </div>
      <div className='our__services'>
        <Image src={noInstallationCharges} alt=''/>
        <div className='content'>
            <h5>No Installation charges</h5>
            <p>Enjoy free installation</p>
        </div>
      </div>
      <div className='our__services'>
        <Image src={yearOfExpertise} alt=''/>
        <div className='content'>
            <h5>25+ year of expertise</h5>
            <p>25+ years of experience in this line</p>
        </div>
      </div>
    </section>
  )
}

export default WeProvideSection
