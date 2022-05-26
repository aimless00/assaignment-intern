import React from 'react'

const Data = ({ dt }) => {
    const { title, description, img } = dt
    return (
        <div className='flex items-center my-4'>
            <img src={img} className="w-10" alt="" />
            <div className='ml-4'>
                <h1 className='text-xl text-blue-700 text-semibold'>{title}</h1>
                <p className='text-sm text-gray-500'>{description}</p>
            </div>
        </div>
    )
}

export default Data