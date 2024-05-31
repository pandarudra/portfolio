import React from "react";

const Contact = () => {
  return (
    <>
      <div className="w-96 h-24 bg-zinc-800 flex justify-center shadow-lg z-10 shadow-white items-center flex-col">
        <h2 className="text-2xl text-white font-bold">Contact With Me</h2>
        <ul className="flex w-auto h-auto gap-2 items-center">
          <li>
            <a
              href="https://www.linkedin.com/in/rudra-panda-a45487229/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/color/48/000000/linkedin.png"
                alt="linkedin"
              />
            </a>
          </li>
          <li>
            <a href="https://x.com/rudra_826">
              <img
                src="https://img.icons8.com/color/48/000000/twitter.png"
                alt="twitter"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/pandarudra">
              <img
                src="https://img.icons8.com/color/48/000000/github--v1.png"
                alt="github"
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/wd_rudra/">
              <img
                src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"
                alt="instagram"
              />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Contact;
