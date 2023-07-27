import React from 'react'
import ProfileIcon from './ProfileIcon'

function HomeHeader() {
  return (
    <header className='flex items-center h-16 justify-between md:justify-end gap-4 px-5'>
        <div className='flex gap-4'>
            <span className='text-black/[0.87] text-[13px] line-height cursor-pointer hover:underline '>gmail</span>
            <span className='text-black/[0.87] text-[13px] line-height cursor-pointer hover:underline '>Images</span>
        </div>
         <ProfileIcon/>
    </header>
  )
}

export default HomeHeader