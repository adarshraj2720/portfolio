import React from "react";

import Picture from '../images/adarshraj.jpg'

export default function About() {
  return (
    <div id="about">
      <h2 className="mt-10 mb-10 text-center font-semibold sheading text-3xl sm:text-5xl ">
        About me
      </h2>
      <div className="sm:flex justify-between flex">
        <div className="sm:w-3/6 text-gray-700">
          <p className="mb-4 pt-1">
            I am Pursuing BCA(3rd Year)  and am a full-stack
            Web Developer (MERN).
          </p>
          <p className="mb-4 pt-1">
            A web developer with user-friendly experiences and a strong interest in
            projects that require both conceptual and analytical thinking.
            I'm always eager to learn from anyone and everyone
          </p>
          <p className="mb-4">
            I am seeking a role in a company where I can contribute my ideas and be
            mentored towards a successful career.
            {/* <span className="text-gray-900 italic">the web</span> . */}
          </p>

        </div>

        <img
          src={Picture}
          alt="profilep/ic"
          className="w-7/12  sm:w-2/6 border-solid border border-gray-500 rounded-md profilepic"
        />
      </div>
    </div>
  );
}
