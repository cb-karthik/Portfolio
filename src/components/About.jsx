import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b  from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-2">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>
        <p className="text-xl mt-15 text-justify">
          Hi there! I am a <strong> Junior front end React developer,</strong>{" "}
          who is deeply passionate about creating, engaging and intuitive user
          experiences through clean and effective code. My journey in web
          development began during my college years, where I pursued Computer
          Science. As I delved into the world of web development, I became
          enamored with the challenge of creating functional and aesthetically
          pleasing websites. As a developer, I take pride in my ability to
          create responsive websites that seamlessly adapt to different devices.
          My <strong>skills extend to HTML, CSS, and JavaScript,</strong> and I
          am proficient in using tools like{" "}
          <strong> BootStrap and Tailwind.</strong> <br />{" "}
        </p>

        <p className="text-xl mt-15 text-justify mt-4">
          I enjoy working with designers and other developers to bring their
          vision to life. Besides being good at technical stuff, I take pride in
          my ability to effectively communicate and collaborate with my peers. I
          am comfortable working in Agile environments and enjoy participating
          in code reviews and brainstorming sessions to improve the overall
          quality of the product. In my free time, I enjoy attending tech
          meetups and{" "}
          <strong>exploring new programming languages and frameworks.</strong> I
          am excited to continue learning and growing as a developer and to{" "}
          <strong> contribute my skills to your team.</strong>
        </p>
        <br />
        <p className="text-xl text-justify mb-12">
          I hold strong Academic records;{" "}
          <strong>Gold medallist in MSc Geoinformatics. </strong> and have
          specilized skills in preparing Maps and interpreting them using Remote
          sensing and GIS software such as ArcGIS, ERDAS etc. I'am also very
          much{" "}
          <strong>
            {" "}
            passionate about Web GIS development and posses primary knowledge
            and experience in{" "}
            <strong>Leafleat, Open Layers and Mapbox JS libraries.</strong>{" "}
          </strong>{" "}
          <br />
        </p>
      </div>
    </div>
  );
};

export default About;
