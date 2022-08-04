import React from "react";
import GithubImg from "../images/github2.png";
import InstaImg from "../images/instagram.png";
import TwitterImg from "../images/twitter.png";
import LinkedinImg from "../images/linkedin.png";
import CallImg from '../images/call.svg'

export default function Social() {
  return (
    <section className="flex justify-between ">
      <div className="flex justify-center w-full sm:w-1/12 sm:block sm:fixed sm:left-12 bottom-0 ">
      <div className="mb-6 sm:mb-4 opacity-60 sm:w-5/6 smicon">
          <a
             href="tel:+91 8674837292">
            <img  src={CallImg} alt="github" className="pr-10 sm:pr-0 callimg" />
          </a>
        </div>
        <div className="mb-6 sm:mb-4 opacity-60 sm:w-5/6 smicon">
          <a
            href="https://github.com/adarshraj2720"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GithubImg} alt="github" className="pr-10 sm:pr-0" />
          </a>
        </div>
        <div className="mb-4 opacity-60 sm:w-5/6 smicon">
          <a
            href="https://www.instagram.com/adarsh_raj2720/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={InstaImg} alt="instagram" className="pr-10 sm:pr-0" />
          </a>
        </div>
        <div className="mb-4 opacity-60 sm:w-5/6 smicon">
          <a
            href="https://twitter.com/adarshraj2720"
            target="_blank"
            rel="noreferrer"
          >
            <img src={TwitterImg} alt="twitter" className="pr-10 sm:pr-0" />
          </a>
        </div>
        <div className="mb-4 opacity-60 sm:w-5/6 smicon">
          <a
            href="https://www.linkedin.com/in/adarshraj2720/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedinImg} alt="linkedin" className="pr-2 sm:pr-0" />
          </a>
        </div>
        <div className="hidden sm:block border-l-2 border-black h-24 w-1 ml-3 opacity-60  "></div>
      </div>
      <div className="hidden sm:block sm:fixed right-12 bottom-0  ">
        <div>
          <a
            href="mailto:adarshraj2721@gmail.com"
            className="mail mb-4 pt-1 font-mono opacity-60  text-sm smicon"
          >
            adarshraj2721@gmail.com
          </a>
        </div>
        <div className=" border-l-2 border-black h-24 w-1 ml-3  opacity-60 "></div>
      </div>
    </section>
  );
}
