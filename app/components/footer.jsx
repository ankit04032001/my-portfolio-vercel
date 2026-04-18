// @flow strict
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";
import { personalData } from '@/utils/data/personal-data';

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            Ankit Kumar Shaw — 2026<br />
            <span className="text-xs text-gray-400">Inspired by Abu Said</span>
          </p>
          <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href={personalData.githubRepo}
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
              title="View Source Code"
            >
              <FaGithub size={20} />
              <span>Source Code</span>
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;