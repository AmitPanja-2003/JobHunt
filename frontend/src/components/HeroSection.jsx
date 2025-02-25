// import React, { useState } from 'react'
// import { Button } from './ui/button'
// import { Search } from 'lucide-react'
// import { useDispatch } from 'react-redux';
// import { setSearchedQuery } from '@/redux/jobSlice';
// import { useNavigate } from 'react-router-dom';

// const HeroSection = () => {
//     const [query, setQuery] = useState("");
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const searchJobHandler = () => {
//         dispatch(setSearchedQuery(query));
//         navigate("/browse");
//     }

//     return (
//         <div className='text-center'>
//             <div className='flex flex-col gap-5 my-10'>
//                 <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>Hunt for the job of your dreams</span>
//                 <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur temporibus nihil tempora dolor!</p>
//                 <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
//                     <input
//                         type="text"
//                         placeholder='Find your dream jobs'
//                         onChange={(e) => setQuery(e.target.value)}
//                         className='outline-none border-none w-full'

//                     />
//                     <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
//                         <Search className='h-5 w-5' />
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default HeroSection

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Search, Briefcase, Star, Users } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    };

    return (
        <div className='text-center bg-gradient-to-b from-purple-500 to-indigo-600 text-white py-20 px-6'>
            <div className='max-w-3xl mx-auto flex flex-col gap-6'>
                <span className='mx-auto px-6 py-2 rounded-full bg-white text-purple-600 font-semibold shadow-md'>
                    Your Dream Job Awaits
                </span>
                <h1 className='text-6xl font-extrabold leading-tight'>Find & Secure <br /> Your <span className='text-yellow-300'>Perfect Job</span></h1>
                <p className='text-lg opacity-90'>Discover opportunities that match your skills and aspirations. Start your career journey today!</p>
                <div className='flex w-full md:w-[60%] shadow-xl border border-white bg-white rounded-full items-center gap-4 mx-auto p-2'>
                    <input
                        type='text'
                        placeholder='Search for your ideal job...'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full text-gray-700 px-4 py-2 rounded-l-full'
                    />
                    <Button onClick={searchJobHandler} className='rounded-full bg-yellow-400 text-gray-900 px-5 py-3 hover:bg-yellow-500 transition'>
                        <Search className='h-6 w-6' />
                    </Button>
                </div>
            </div>
            <div className='mt-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
                <div className='p-6 bg-white text-gray-800 rounded-lg shadow-lg'>
                    <Briefcase className='h-12 w-12 mx-auto text-purple-500' />
                    <h3 className='text-xl font-bold mt-4'>Top Companies</h3>
                    <p className='text-gray-600 mt-2'>Find opportunities from the world's leading companies.</p>
                </div>
                <div className='p-6 bg-white text-gray-800 rounded-lg shadow-lg'>
                    <Star className='h-12 w-12 mx-auto text-yellow-500' />
                    <h3 className='text-xl font-bold mt-4'>Best Career Paths</h3>
                    <p className='text-gray-600 mt-2'>Explore career paths tailored to your skills and interests.</p>
                </div>
                <div className='p-6 bg-white text-gray-800 rounded-lg shadow-lg'>
                    <Users className='h-12 w-12 mx-auto text-blue-500' />
                    <h3 className='text-xl font-bold mt-4'>Join a Community</h3>
                    <p className='text-gray-600 mt-2'>Connect with professionals and grow your network.</p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;