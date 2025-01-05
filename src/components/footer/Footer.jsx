import { BiLogoLinkedin } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white pt-8">
      <div className="container mx-auto text-center">
        {/* Copyright and Credits Section */}
        <div className="mt-8  border-gray-700 pt-4">
          <p className="text-sm text-gray-400">
            &copy; {currentYear}{" "}
            <span>
              Designed and Developed by <br className="block sm:hidden" />
              <a
                href="https://www.linkedin.com/in/mdatikur-contact/"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Md Atikur Rahman
              </a>
            </span>
            . All rights reserved.
          </p>
        </div>
        <div className="flex justify-center pt-2 gap-3 text-3xl text-pink-600">
          <a href="https://github.com/mdatikur-contact " target="_blank">
            <FaGithub className="border-2 border-gray-700 rounded-full p-1 hover:bg-gray-700" />
          </a>
          <a
            href="https://www.linkedin.com/in/mdatikur-contact/"
            target="_blank"
          >
            <BiLogoLinkedin className="border-2 border-gray-700 rounded-full p-1 hover:bg-gray-700" />
          </a>
          <a href="https://leetcode.com/u/atikur45bd/" target="_blank">
            <TbBrandLeetcode className="border-2 border-gray-700 rounded-full p-1 hover:bg-gray-700" />
          </a>
          <a href="https://x.com/mdAtikurContact" target="_blank">
            <FaXTwitter className="border-2 border-gray-700 rounded-full p-1 hover:bg-gray-700" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
