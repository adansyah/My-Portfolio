import React from 'react'

const Footer = () => {
  return (
    <div className='mt-32 py-4 flex md:flex-row flex-col md:gap-0 gap-6 justify-between items-center'>
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <div className='flex gap-7'>
            <a href="#beranda">Beranda</a>
            <a href="#about">Tentang</a>
            <a href="#proyek">Proyek</a>
        </div>
        <div className='flex items-center gap-3'>
            <a href="">
                <i className='ri-github-fill ri-2x'></i>
                <i className='ri-instagram-fill ri-2x'></i>
                <i className='ri-tiktok-fill ri-2x'></i>
                <i className='ri-youtube-fill ri-2x'></i>
            </a>
        </div>
    </div>
  )
}

export default Footer