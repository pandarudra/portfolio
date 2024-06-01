import React from "react";
import Navbar from "./Navbar";

const Project = () => {
  return (
    <>
      <div className="w-full h-screen overflow-auto bg-black flex flex-col md:overflow-hidden gap-1">
        <div>
          <Navbar />
        </div>
        <div className="w-full h-full flex flex-col gap-1">
          <div className="w-full h-96 flex flex-col md:flex-row gap-2 py-2">
            <div className="w-full md:w-1/2 h-auto flex flex-col gap-1">
              <h1 className="text-white text-3xl font-semibold p-4">
                SHOPKART🛍️ - Ecommerce Website
              </h1>
              <p className="text-white text-lg font-medium p-4">
                • Technology Stack: MERN (MongoDB, Express.js, React, Node.js),
                Tailwind CSS, DaisyUI
              </p>
              <p className="text-white text-lg font-medium p-4">
                • Frontend Deployment: Deployed on Vercel for efficient and
                scalable hosting
              </p>
              <p className="text-white text-lg font-medium p-4">
                • Backend Deployment: Deployed on Render for reliable
                server-side processing
              </p>
              <p className="text-white text-lg font-medium p-4">
                • User Authentication: Integrated Gmail API for user
                authentication and email notifications
              </p>
              <p className="text-white text-lg font-medium p-4">
                • Design: Created a responsive and visually appealing design
                using Tailwind CSS and DaisyUI
              </p>
            </div>
            <div className="w-full md:w-1/2 h-full my-6 flex justify-center items-center flex-col">
              <iframe
                className="w-full h-96"
                src="https://www.youtube.com/embed/oKUMsl3JCnc?si=PmCyIqw1w14Izgju"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <div>
                <a
                  className="text-sky-400"
                  href="https://shopkart01.vercel.app/"
                >
                  Click To Check
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
