// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { MdAlternateEmail } from "react-icons/md";
import Chatbot from './chatbot';

function ContactSection() {
  return (
    <div id="contact" className="my-8 lg:my-12 relative mt-20 text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-20 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-1.5 px-4 text-lg rounded-md">
          CONTACT
        </span>
        <span className="h-28 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
        <Chatbot />
        <div className="lg:w-3/4 ">
          <div className="flex flex-col gap-4 lg:gap-6">
            <p className="text-sm md:text-lg flex items-center gap-3">
              <MdAlternateEmail
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={32}
              />
              <span>{personalData.email}</span>
            </p>
            <p className="text-sm md:text-lg flex items-center gap-3">
              <IoMdCall
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={32}
              />
              <span>
                {personalData.phone}
              </span>
            </p>
            <p className="text-sm md:text-lg flex items-center gap-3">
              <CiLocationOn
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={32}
              />
              <span>
                {personalData.address}
              </span>
            </p>
          </div>
          <div className="mt-6 lg:mt-10 flex items-center gap-4 lg:gap-6">
            <Link target="_blank" href={personalData.github}>
              <IoLogoGithub
                className="bg-[#8b98a5] p-2.5 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={40}
              />
            </Link>
            <Link target="_blank" href={personalData.linkedIn}>
              <BiLogoLinkedin
                className="bg-[#8b98a5] p-2.5 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={40}
              />
            </Link>
            <Link target="_blank" href={personalData.leetcode}>
              <SiLeetcode
                className="bg-[#8b98a5] p-2.5 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={40}
              />
            </Link>
            <Link target="_blank" href={personalData.geeksforgeeks}>
              <SiGeeksforgeeks
                className="bg-[#8b98a5] p-2.5 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={40}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;