import img from "../assets/profile-img.png";
import { MdOutlineWavingHand } from "react-icons/md";
const Banner = () => {
  return (
    <div className="lg:h-[70vh] md:mt-[7.5rem] mb-7 lg:px-0 px-12">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
        <div className="">
          <h1 className="text-3xl md:text-5xl font-bold space-y-2">
            Elevate Your <span className="">Business</span>
            With <br /> Data-Driven Marketing <br /> and Decisions.
          </h1>
          <p className=" ">
            <div className="flex items-center gap-3 pt-3">
              <span>Hi, I am Bivuti Vussion</span>
              <span>
                <MdOutlineWavingHand className="text-2xl animate-bounceUpDown" />
              </span>
            </div>
            <span>
              For the last five years, I have been working on tracking parts of
              web analysis, including meta-pixel tracking,
              <br className="hidden lg:inline" /> meta-pixel conversation API,
              G-ads dynamic conversion tracking, GA4 server-side tracking, and
              more.
            </span>
          </p>
        </div>
        <div className="relative">
          <div className="bg-base-300 rounded-full border-4 border-[#9642a7] border-t-[#ffffff] border-b-[#3951f2] border-l-[#ffffff] border-r-[#3951f2] overflow-hidden">
            <img
              src={img}
              width={350}
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
