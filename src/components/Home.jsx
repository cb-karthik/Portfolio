import React from "react";
// import ProfileImage from "../assets/1.ProfilePic.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white mt-11">
            Hi        &nbsp;I'm a Front-End Developer
          </h2>
          <p className=" text-lg text-gray-500 py-4 max-w-md text-justify">
            I have <strong>One year of experience </strong>in designing and building web apps using
            React, also have hands-on experience in Front-end development technologies.
          </p>

          <div>
            <Link
              to="Portfolio"
              smooth
              duration={500}
              className=" group  text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer  "
            >
              Portfolio
              <span className=" group-hover:rotate-90 duration-300 ">
                <MdOutlineKeyboardArrowRight size={25} className="ml-" />
              </span>
            </Link>
          </div>
        </div>
        {/* <div>
          <img className="rounded-xl mx-0 w-2/1 md:w-full " src={ProfileImage} alt="Profile pic" />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
