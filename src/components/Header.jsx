import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import { motion } from "framer-motion"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext)
  const navigate = useNavigate()

  const onClickHandler = () => {
    if (user) {
      navigate('/result')
    } else {
      setShowLogin(true)
    }
  }

  return (
    <motion.div 
      className='flex flex-col justify-center items-center text-center p-12 mt-10'
      initial={{ opacity: 0, y: 100 }} 
      transition={{ duration: 1 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }}>

      <motion.h1 
        className='text-4xl sm:text-6xl text-white font-bold mt-8 max-w-[90%] sm:max-w-[650px] mx-auto'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 2 }}>
        Transform words into <span className='text-yellow-300'>visuals</span>
      </motion.h1>

      <motion.p 
        className='text-white text-sm sm:text-lg mt-5 max-w-[90%] sm:max-w-xl mx-auto'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}>
        Unleash your creativity with AI. Turn your imagination into visual art in seconds and watch the magic happen.
      </motion.p>

      <motion.button 
        onClick={onClickHandler} 
        className=' font-medium text-lg bg-yellow-300 mt-8 px-12 py-3 flex items-center gap-3 rounded-full hover:bg-yellow-400 active:scale-95 border-4 border-gray-100'
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }} 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8, duration: 1 } }}>
        Generate Images
        <img className='h-8 rounded-lg' src={assets.star} alt="Icon" />
      </motion.button>

      <motion.div 
        className='flex flex-wrap justify-center mt-12 gap-6'
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1, duration: 1 }}>
        {Array(6).fill('').map((item, index) => (
          <motion.img 
            key={index}
            whileHover={{ scale: 1.1 }} 
            className='rounded-lg cursor-pointer shadow-lg hover:scale-105 transition-all duration-300'
            src={index % 2 === 0 ? assets.cat : assets.img1} 
            alt={`sample ${index}`} 
            width={50} />
        ))}
      </motion.div>

      <motion.p 
        className='mt-4 text-gray-200'
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1.2, duration: 0.8 }}>
        Generated images from VisionaryAI
      </motion.p>
    </motion.div>
  )
}

export default Header
