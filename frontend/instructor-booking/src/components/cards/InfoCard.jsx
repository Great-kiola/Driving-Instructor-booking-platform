import React from 'react'

const InfoCard = ({icon, label, value, color}) => {
  return (
    <div className='flex items-center gap-3'>
        <div className={`w-2 md:w-2 h-3 md:h-5 ${color} rounded-full`} />

        <p className='text-xs md:text-[14px] '></p>

    </div>
  )
}

export default InfoCard



2:36:04 