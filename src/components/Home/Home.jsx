import React from 'react';
import { FaSearch,FaRegBell,FaRegEnvelope } from "react-icons/fa";


const Home = () => {
    return (
        <div>
            <div className='flex justify-end'>
                <div className='h-14 flex gap-5 justify-end items-center'>
                    <div className='border-2 flex items-center gap-3 px-3'>
                        <div className='border-r-2 pr-3'>
                        <FaSearch/>
                        </div>
                        <input className='outline-none py-1 px-3 ' type="text" name="" id="" />
                    </div>
                    <div className='border p-1 inline-block'>
                        <FaRegBell size={26} className='text-[#7671FF]'/>
                    </div>
                    <div className='border p-1 inline-block'>
                        <FaRegEnvelope size={26} className='text-[#7671FF]'/>
                    </div>

                    <div>
                        <img src="./profile1.jpg" className='h-10 rounded-full' alt="" />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;