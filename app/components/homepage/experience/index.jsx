// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import experience from '../../../assets/lottie/serverError.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-8 lg:my-16 border-[#25213b]">
      <div className="flex justify-center my-4 lg:py-6">
        <div className="flex  items-center">
          <span className="w-20 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-1.5 px-4 text-lg rounded-md">
            Experiences
          </span>
          <span className="w-20 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-4">
              {
                experiences.map(experience => (
                  <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                    <div className="p-2 relative">
                      <div className="flex justify-center">
                        <p className="text-xs text-[#16f2b3]">
                          {experience.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-4 px-2 py-3">
                        <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={28} />
                        </div>
                        <div>
                          <p className="text-sm sm:text-lg mb-1 font-medium uppercase">
                            {experience.title}
                          </p>
                          <p className="text-xs sm:text-sm">
                            {experience.company}
                          </p>
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

export default Experience;