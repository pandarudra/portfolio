import React from "react";

const Skillset = () => {
  return (
    <>
      <div className="w-10/12 h-64 bg-zinc-900">
        <span className="text-white text-3xl font-semibold p-4">
          Skillset -
        </span>
        <div className="w-full h-auto flex-col ">
          <div className="w-full h-auto flex">
            <span className="text-white text-lg font-medium p-4">
              Languages -
            </span>
            <img
              className="w-auto h-auto"
              src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
            />
            <img
              className="w-auto h-auto"
              src="https://img.icons8.com/color/48/000000/python.png"
            />

            <img
              className="w-auto h-auto"
              src="https://img.icons8.com/color/48/000000/c-programming.png"
            />
          </div>
          <div className="w-full h-auto flex">
            <span className="text-white text-lg font-medium p-4">
              Frontend -
            </span>
            <img
              className="w-auto h-auto"
              src="https://img.icons8.com/color/48/000000/html-5--v1.png"
            />
            <img
              className="w-auto h-auto"
              src="https://img.icons8.com/color/48/000000/css3.png"
            />
            <img
              className="w-auto h-auto"
              src="https://img.icons8.com/color/48/000000/javascript--v1.png"
            />
            <img
              className="w-auto h-auto"
              src="https://img.icons8.com/color/48/000000/react-native.png"
            />
          </div>
          <div className="w-full h-auto flex">
            <span className="text-white text-lg font-medium p-4">
              Backend -
            </span>
            <img
              className="w-auto h-auto"
              src="https://img.icons8.com/color/48/000000/nodejs.png"
            />
            <img
              className="w-auto h-auto"
              src="https://img.icons8.com/color/48/000000/mongodb.png"
            />
            <img
              className="w-14 h-14"
              src="https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skillset;
