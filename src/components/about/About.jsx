import React from "react";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";

const About = ({ onClose }) => {
  return (
    <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-gray-900 shadow-lg text-gray-300 overflow-y-auto z-50 transition-transform duration-300">
      {/* Close Button */}
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold text-indigo-400">About</h1>
        <button
          onClick={onClose}
          className="text-white hover:text-red-500 text-2xl font-bold"
        >
          ×
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-6">
        {/* About the App */}
        <div className="justify-around">
          <h2 className="text-lg font-bold mb-2">PUB Cover Page Generator</h2>
          <p className="justify-around">
            The <strong>Cover Page Generator</strong> is a dynamic web tool
            designed for <strong>Pundra University students</strong> to create
            professional cover pages for <strong>assignments</strong> and{" "}
            <strong>lab reports</strong>. It ensures consistency, saves time,
            and delivers high-quality results tailored to academic standards.
          </p>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-lg font-bold mb-2">Key Features</h2>
          <ul className="list-disc pl-4 space-y-1 ">
            <li>
              <strong>Customizable Templates:</strong> Personalize with course,
              name, and more.
            </li>
            <li>
              <strong>User-Friendly Interface:</strong> Quick and intuitive
              design.
            </li>
            <li>
              <strong>PDF Export:</strong> Download professional-quality PDFs.
            </li>
            <li>
              <strong>Responsive Design:</strong> Seamless across all devices.
            </li>
            <li>
              <strong>University Branding:</strong> Aligns with institutional
              standards.
            </li>
          </ul>
        </div>

        {/* Developer Info */}
        <div>
          <h2 className="text-lg font-bold mb-2">About the Developer</h2>
          <p className="justify-around">
            My name is <strong>Md Atikur Rahman</strong>, a passionate{" "}
            <strong>web developer</strong> and a <strong>CSE student</strong> of
            the 22nd batch at Pundra University of Science and Technology. I
            specialize in building innovative and efficient web solutions that
            address real-world challenges.
          </p>
        </div>

        {/* GitHub Source Code */}
        <div>
          <h2 className="text-lg font-bold mb-2">Source Code</h2>
          <p>
            Explore the complete source code of the{" "}
            <strong>Cover Page Generator</strong> on GitHub:
          </p>
          <a
            href="https://github.com/mdatikur-contact/pub-cover-page-generator"
            target="_blank"
            className="text-indigo-400 hover:underline"
          >
            View Source Code on GitHub
          </a>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold mb-2 text-indigo-400">
            Get in Touch
          </h2>
          <p className="text-sm text-gray-300">
            Feel free to connect with me on social media or reach out via email.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-5 text-xl text-pink-600">
            <a
              href="https://github.com/mdatikur-contact"
              target="_blank"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mdatikur-contact/"
              target="_blank"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <BiLogoLinkedin />
            </a>
            <a
              href="https://leetcode.com/u/atikur45bd/"
              target="_blank"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <TbBrandLeetcode />
            </a>
            <a
              href="https://x.com/mdAtikurContact"
              target="_blank"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <FaXTwitter />
            </a>
          </div>

          {/* Email Section */}
          <div className="flex justify-center mt-4">
            <p className="text-sm text-gray-300">
              <strong>Email: </strong>
              <a
                href="mailto:mdatikur.contact@gmail.com"
                className="text-indigo-400 hover:underline"
              >
                mdatikur.contact@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
