// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div id="skills" className="relative z-50 border-t my-8 lg:my-16 border-[#25213b]">
      <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-4 lg:py-6">
        <div className="flex  items-center">
          <span className="w-20 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-1.5 px-4 text-lg rounded-md">
            Skills
          </span>
          <span className="w-20 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-8">
        <Marquee
          gradient={false}
          speed={150}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div className="w-32 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-2 sm:m-4 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}>
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 p-4">
                  <div className="h-7 sm:h-8">
                    <Image
                      src={skillsImage(skill)?.src}
                      alt={skill}
                      width={32}
                      height={32}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-white text-xs sm:text-sm">
                    {skill}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;