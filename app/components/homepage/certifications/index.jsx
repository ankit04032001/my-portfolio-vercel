// @flow strict
import { certificationsData } from "@/utils/data/certifications";
import Link from "next/link";
import { FaGoogle, FaSalesforce } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";

function Certifications() {
  const getIcon = (issuer) => {
    switch(issuer) {
      case 'Google Cloud':
        return <FaGoogle size={28} className="text-blue-400" />;
      case 'Salesforce':
        return <FaSalesforce size={28} className="text-blue-500" />;
      default:
        return <BsCheck2Circle size={28} className="text-violet-500" />;
    }
  };

  return (
    <div id="certifications" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certifications
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
        {certificationsData.map((cert) => (
          <Link
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-40 h-auto flex flex-col items-center justify-center transition-all duration-500 rounded-lg group relative hover:scale-110 cursor-pointer">
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none group-hover:border-violet-500 transition-all duration-500 p-5 flex flex-col items-center justify-center gap-3">
                <div className="flex justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="flex items-center justify-center">
                    {getIcon(cert.issuer)}
                  </div>
                  <div className="text-center">
                    <p className="text-sm sm:text-base font-semibold text-white group-hover:text-violet-400 transition-all duration-300">
                      {cert.name}
                    </p>
                    <p className="text-xs text-[#16f2b3] mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
