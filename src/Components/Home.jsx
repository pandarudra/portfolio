import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Contact from "./Contact";

const Home = () => {
  const [quote, setquote] = useState("Loading...");
  useEffect(() => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        setquote(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="w-full h-screen bg-black overflow-hidden flex flex-col gap-1">
        <div>
          <Navbar />
        </div>
        <div className="flex w-full gap-1 ">
          <div className="w-1/2  h-96 my-8 flex flex-col justify-center items-center">
            <div className="flex w-auto h-auto">
              <span className="text-4xl mx-5   text-white font-extrabold">
                Hello
              </span>
              <span className="hello text-4xl   text-purple-800 font-extrabold">
                Friends
              </span>
            </div>
            <br />
            <h2 className="text-3xl text-white font-bold">
              Welcome to Portfolio
            </h2>
            <p className="text-white text-xl py-4 my-4 text-center w-1/2 h-auto">
              "{quote}"
            </p>
            <div className="text-white text-xl py-4 my-4 text-center bg-blue-700 px-4 rounded-md font-black">
              <a
                href="https://drive.google.com/file/d/1onC2VrerHKD8HV57oHaE1PJfrRmLKHg6/view?usp=sharing"
                download
              >
                Resume
              </a>
            </div>
          </div>
          <div className="w-1/2  h-auto flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="home"
              className="w-3/4 h-3/4 object-cover"
            />
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Home;
