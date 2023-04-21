import React from 'react'
import Portfolio1 from '../assets/2.Portfolio1.png'
import Portfolio2 from '../assets/3.Portfolio2.png'
import Portfolio3 from '../assets/4.Portfolio3.png'
import Portfolio4 from '../assets/5.Portfolio4.png'
import Portfolio5 from '../assets/6.Portfolio5.png'
import Portfolio6 from '../assets/7.Portfolio6.png'
const Portfolio = () => {

    const portfolios =  [
        {
            id:1,
            src:Portfolio1,
           

        },
        {
            id:2,
            src:Portfolio2,
        },
        {
            id:3,
            src:Portfolio3,
        },
        {
            id:4,
            src:Portfolio4,
        },
        {
            id:5,
            src:Portfolio5,
        },
        {
            id:6,
            src:Portfolio6,
        },
    ]



  return (

       <div name="Portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-fit">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-2">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className="py-6">Check out some of my work here!</p>
            </div>
           
            

            <div className="grid sm:grid-cols-3 md:grid-col-3 gap-8 px-12 sm:px-0">


            {portfolios.map(({ id, src,demo}) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
                <div className="flex items-center justfiy-center">
                    <button  className="w-1/2 px-6 py-0 m-4 duration-200 hover:scale-105">Demo</button>
                    <button className="w-1/2 px-6 py-0 m-4 duration-200 hover:scale-105">Code</button>
                </div>
            </div>      
            ))
            }


                
            </div>
             
        </div>
    </div>
  )
}

export default Portfolio