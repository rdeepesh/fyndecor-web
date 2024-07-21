import React from 'react'
import Image from 'next/image'
import desktopImg from '../assets/images/about-us-banner-desktop.png'
import mobileImg from '../assets/images/about-us-banner-mobile.png'
import { modalOpen } from '../lib/features/modalSlice'
import { useAppDispatch } from '../lib/hooks'

const PageBanner = () => {
  const dispatch = useAppDispatch();

  return (
    <div className='page__banner about'>
        <div className="desktop__img">
            <Image src={desktopImg} alt="" />
        </div>
        <div className="mobile__img">
            <Image src={mobileImg} alt="" />
        </div>
        <div className="banner__content">
            <h2 className='banner__heading'>Build your own <span>Customize</span> Fabric Curtain for homes</h2>
            <button className='btn' onClick={()=>dispatch(modalOpen({open: true}))}>Enquire Now</button>
        </div>
    </div>
  )
}

export default PageBanner
