// @flow strict
import { educations } from "@/utils/data/educations";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import lottieFile from '../../../assets/lottie/education.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Education() {
  return (
    <div id="education" className="relative z-50 border-t my-8 lg:my-16 border-[#25213b]">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-4 lg:py-6">
        <div className="flex  items-center">
          <span className="w-20 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-1.5 px-4 text-lg rounded-md">
            Educations
          </span>
          <span className="w-20 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-4">
              {
                educations.map(education => (
                  <GlowCard key={education.id} identifier={`education-${education.id}`}>
                    <div className="p-2 relative text-white">
                      <div className="flex justify-center">
                        <p className="text-xs text-[#16f2b3]">
                          {education.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-4 px-2 py-3">
                        <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={28} />
                        </div>
                        <div>
                          <p className="text-sm sm:text-lg mb-1 font-medium uppercase">
                            {education.title}
                          </p>
                          <p className="text-xs sm:text-sm">{education.institution}</p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;