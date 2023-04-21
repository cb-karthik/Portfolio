import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
import bootstrap from "../assets/bootstrap.png"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"

const Skills = () => {

const tech = [
 {   id:1,
    src:html,
    title:'HTML',
    style:'shadow-orange-500',
},
 {   id:2,
    src:css,
    title:'CSS',
    style:'shadow-blue-500',
},
 {   id:3,
    src:js,
    title:'JAVA SCRIPT',
    style:'shadow-yellow-500',
},
 {   id:4,
    src:bootstrap,
    title:'BOOTSTRAP',
    style:'shadow-purple-700',
},
 {   id:5,
    src:react,
    title:'REACT',
    style:'shadow-blue-600',
},
 {   id:1,
    src:tailwind,
    title:'TAILWIND',
    style:'shadow-sky-400',
},
]



  return (
    <div name="Skills" 
    className="bg-gradient-to-b from-gray-800 to-black w-full h-fit">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div>  
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Skills</p>
            <p className="py-6" >These are the Technologies I've worked with</p>
          
           </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm/;px-0">

            {
                tech.map(({id,src,title,style})=>(
                <div key={id} 
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`} >
                <img src={src} alt="" className="w-20 mx-auto"/>
                <p className="mt-4 text-white">{title}</p>
                </div>
                ))
            }
          
         </div>
    </div>
    </div>
  )
}

export default Skills