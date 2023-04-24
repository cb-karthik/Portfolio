import React from "react";
import linkedin from "../assets/linkedin.png";
import netflix from "../assets/netflix.png";
import newsapp from "../assets/newsapp.png";
import quickmap from "../assets/quickmap.png";
import todo from "../assets/todo.png";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: linkedin,
      demo: "https://linkedin-clone-ract.netlify.app/",
      code: "https://github.com/cb-karthik/Linkedin-clone",
      appName: "Linkedin-Clone",
    },
    {
      id: 2,
      src: netflix,
      demo: "https://nc-nine.vercel.app/",
      code: "https://github.com/cb-karthik/Netflix-Clone",
      appName: "Netflix-Clone",
    },
    {
      id: 3,
      src: newsapp,
      demo: "https://github.com/cb-karthik/FingerTip-NewsApp/",
      code: "https://github.com/cb-karthik/FingerTip-NewsApp",
      appName: "FingerTip-News",
    },
    {
      id: 4,
      src: quickmap,
      demo: "https://quick-route-google-map-clone.vercel.app/",
      code: "https://github.com/cb-karthik/Quick-Route-Google-Map-Clone",
      appName: "QuickRoute",
    },
    {
      id: 5,
      src: todo,
      demo: "https://todo-dun-seven.vercel.app/",
      code: "https://github.com/cb-karthik/TODO",
      appName: "ToDo",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-fit "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-2 mt-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here!</p>
        </div>

        <div className="grid sm:grid-cols-3 md:grid-col-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, appName, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-110"
              />
              <div className=" justfiy-center text-center text-lime-200 font-bold pt-2 duration-300  hover:scale-110">
                {appName}
              </div>
              <div className="flex items-center justfiy-center">
                <a href={demo} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-0 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={code} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-0 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
