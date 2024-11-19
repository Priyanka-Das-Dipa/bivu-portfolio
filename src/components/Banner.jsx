import img from "../assets/profile-img.png";
import { MdOutlineWavingHand } from "react-icons/md";
const Banner = () => {
  return (
    <div className="lg:h-[70vh] md:mt-[7.5rem] mb-7 lg:px-0 px-12">
      <div className="flex flex-col lg:flex-row justify-evenly items-center gap-16">
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl font-bold space-y-2">
            Elevate Your <span className="text-[#3951f2]">Business</span> With
            <br /> Data-Driven Marketing <br /> and Decisions.
          </h1>
          <p className=" ">
            <div className="flex items-center gap-3 pt-3">
              <span>Hi, I am Bivuti Vussion</span>
              <span>
                <MdOutlineWavingHand className="text-2xl animate-bounceUpDown" />
              </span>
            </div>
            <span>
              I specialize in tracking for Google Ads, Facebook Ads, and
              integrated solutions across platforms. Over the past five years,
              my expertise has focused on implementing tracking systems that not
              only enhance ad performance but also deliver actionable insights.
              While many can complete a basic setup, the real challenge lies in
              diagnosing and resolving issues when things go wrong—and
              that&apos;s where I excel. I’ve spent 90% of my career working
              directly with clients to solve complex tracking problems, ensuring
              their campaigns run smoothly and efficiently.
            </span>
          </p>
        </div>
        <div className="relative flex-[1/3]">
          <div className="bg-base-300 rounded-full border-4 border-[#9642a7] border-t-[#ffffff] border-b-[#3951f2] border-l-[#ffffff] border-r-[#3951f2] overflow-hidden">
            <img
              src={img}
              width={200}
              height={250}
              alt="_dip_image_loading"
              className="object-cover w-full h-full rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
