import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        src="https://images.unsplash.com/photo-1642942552673-dfa90248b189?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2003&q=80"
        className="w-full h-screen object-cover scale-x-[-1]"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/30">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-cetner">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Yuan Wu
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I am a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Software Engineer",
                2000, 
                "UX Designer",
                2000,
                "Coder",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200] w-[50%]">
            <FaInstagram size={25} className="cursor-pointer" />
            <a
              href="https://www.linkedin.com/in/yuanfwu"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FaLinkedinIn size={25} />
            </a>
            <a
              href="https://www.github.com/yuanwuu"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FaGithub size={25} className="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
