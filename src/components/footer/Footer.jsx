import { BiLogoLinkedin } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white py-1 mt-7 bg-gray-800">
      <div className="container mx-auto text-center">
        {/* Copyright and Credits Section */}
        <div className="  border-gray-700 py-4">
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
        
      </div>
    </footer>
  );
};

export default Footer;
