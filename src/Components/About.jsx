import React from "react";
import Navbar from "./Navbar";
import Skillset from "./Skillset";

const About = () => {
  return (
    <>
      <div className="w-full h-screen overflow-hidden bg-black flex flex-col items-center gap-1">
        <div className="w-full">
          <Navbar />
        </div>
        <div className=" w-full h-auto flex flex-col gap-1 ">
          <div className="w-full h-auto ">
            <span className="text-white text-3xl font-semibold p-4">
              Education -
            </span>
            <div className="w-1/3 mx-4 h-auto flex flex-col gap-1 bg-zinc-800 shadow-lg shadow-white">
              <span className="text-white text-lg font-medium p-4">
                Odisha University Of Technology And Research (Formerly CET)
              </span>
              <span className="text-white text-lg font-medium p-4">
                {" "}
                Bachelor of Technology, Information Technology
              </span>
            </div>
          </div>
        </div>

        <div className="w-full h-96 flex justify-center items-center">
          <Skillset />
        </div>
      </div>
    </>
  );
};

export default About;
