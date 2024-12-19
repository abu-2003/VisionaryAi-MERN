import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
const Navbar = () => {
    const { user, setShowLogin, logout, credit } = useContext(AppContext)

    const navigate = useNavigate()
    return (
        <div className='flex items-center justify-between py-4'>
            <Link to='/'>
                <div className='flex items-center'>
                    <img src={assets.logo} alt="" className='w-14 sm:w-18 lg:w-20 p-2' />
                    <span className="font-semibold text-xl sm:text-2xl text-white">VisionaryAI</span>
                </div>
            </Link>

            <div>
                {
                    user ?
                        <div className='flex items-center gap-2 sm:gap-3' >
                            <button onClick={() => navigate('/buy')} className='flex items-center gap-2 bg-cyan-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
                                <img src={assets.circle_star} className='w-5' alt="" />
                                <p className='text-xs sm:text-sm font-medium text-gray-600'>Credits left : {credit}</p></button>
                            <p className='text-gray-100 max-sm:hidden pl-4'>Hi, {user.name}</p>
                            <div className='relative group'>
                                <img src={assets.user} className='w-5 drop-shadow' alt="" />

                                <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                                    <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm '>
                                        <li onClick={logout} className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='flex items-center gap-2 sm:gap-5 text-slate-50'>
                            <p onClick={() => navigate('/buy')} className='cursor-pointer'>Pricing</p>
                            <button onClick={() => setShowLogin(true)} className='bg-gray-900 text-white px-7 py-2 sm:px-10 text-sm rounded-full '>Login</button>
                        </div>
                }



            </div>
        </div>
    )
}

export default Navbar
