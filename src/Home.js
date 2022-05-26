import React, { useEffect, useState } from 'react';
import Data from './Data';

const Home = () => {
    const [data, setData] = useState([])


    useEffect(() => {
        fetch("https://aimless00.github.io/jsonsapi/data.json")
            .then(res => res.json())
            .then(result => setData(result))
    }, [])
    return (
        <div>
            <div className='flex items-center'>
                <img src="https://i.ibb.co/P99RB61/icon.png" className='w-12 mt-4' alt="" />
                <h1 className='text-4xl font-bold'>Build a solution <span className='text-xl font-bold mt-4 text-blue-700 '>info</span></h1>
            </div>
            <p className='ml-4 mt-10 text-gray-600 font-semibold'>Start building with simple wizards and automated workflows.</p>
            <div className=' ml-4 mt-10 md:grid md:grid-cols-2 gap-4'>
                {
                    data.map(dt => <Data
                        key={dt.id}
                        dt={dt}
                    />)
                }
            </div>
        </div>
    )
}

export default Home