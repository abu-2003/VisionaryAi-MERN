import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div className='  py-6 mt-20'>
      <div className='max-w-7xl mx-auto px-6 flex items-center justify-between'>
        {/* Logo */}
        <img src={assets.logo} alt="Visionai Logo" width={50} className="object-contain mr-5" />

        {/* Copyright Text */}
        <p className='text-sm text-gray-300 flex-1 border-l border-gray-600 pl-6 hidden sm:block'>
          Copyright @Visionai.dev | All rights reserved.
        </p>

        {/* Social Icons */}
        <div className='flex gap-4'>

          <img src={assets.facebook_icon} alt="Facebook" width={25} className="hover:opacity-75 transition-opacity" />
          <img src={assets.instagram_icon} alt="Twitter" width={25} className="hover:opacity-75 transition-opacity" />
          <img src={assets.twitter_icon}  alt="linkedin" width={25} className="hover:opacity-75 transition-opacity " />
        </div>
      </div>
    </div>
  )
}

export default Footer;
