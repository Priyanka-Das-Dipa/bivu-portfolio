import img from "../assets/profile-img.png";
import { MdOutlineWavingHand } from "react-icons/md";
import { RxArrowTopRight } from "react-icons/rx";
const Banner = () => {
  return (
    // <section className=" min-h-screen max-w-[1200px] mx-auto">
    //   <div className="lg:h-[70vh] md:mt-[7.5rem] mb-20 lg:px-0 px-12">
    //     <div className="flex flex-col lg:flex-row justify-evenly items-center gap-16">
    //       <div className="flex-1 space-y-2">
    //         <h1 className="text-3xl md:text-5xl font-bold space-y-2">
    //           Elevate Your{" "}
    //           <span className="bg-gradient-to-r from-[#6a0dad] to-[#3951f2] bg-clip-text text-transparent ">
    //             Business{" "}
    //           </span>
    //           With
    //           <br /> Data-Driven Marketing <br /> and Decisions.
    //         </h1>

    //         <p className="">
    //           <div className="flex items-center gap-3 pt-3">
    //             <span>Hi, I am Bivuti Vussion</span>
    //             <span>
    //               <MdOutlineWavingHand className="text-2xl animate-bounceUpDown" />
    //             </span>
    //           </div>
    //           <span>
    //             I specialize in tracking for Google Ads, Facebook Ads, and
    //             integrated solutions across platforms. Over the past five years,
    //             my expertise has focused on implementing tracking systems that
    //             not only enhance ad performance but also deliver actionable
    //             insights. While many can complete a basic setup, the real
    //             challenge lies in diagnosing and resolving issues when things go
    //             wrong—and that&apos;s where I excel. I’ve spent 90% of my career
    //             working directly with clients to solve complex tracking
    //             problems, ensuring their campaigns run smoothly and efficiently.
    //           </span>
    //         </p>

    //         <div className="mt-5 flex items-center gap-1">
    //           <button className="btn rounded-3xl px-6 text-white bg-primary-gradient transition-all duration-300 mr-5 text-base font-medium">
    //             Hire me
    //           </button>
    //           <button className="flex items-center justify-center gap-1 rounded-full  text-base font-medium px-6 py-3 border-primary-gradient border-2 hover:bg-primary-gradient hover:text-white">
    //             Previous work
    //             <RxArrowTopRight className="font-bold text-lg" />
    //           </button>
    //         </div>
    //       </div>
    //       <div className="relative flex-[1/3]">
    //         <div className="bg-base-300 rounded-full border-4 border-[#9642a7] border-t-[#ffffff] border-b-[#3951f2] border-l-[#ffffff] border-r-[#3951f2] overflow-hidden">
    //           <img
    //             src={img}
    //             width={200}
    //             height={250}
    //             alt="_dip_image_loading"
    //             className="object-cover w-full h-full rounded-full"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className="min-h-screen max-w-[1200px] mx-auto">
      <div className="lg:h-[70vh] md:mt-[7.5rem] mb-20 lg:px-0 px-12">
        <div className="flex flex-col lg:flex-row justify-evenly items-center gap-10 lg:gap-16">
          {/* Image Section */}
          <div className="relative flex-[1/3] order-1 lg:order-2">
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
          {/* Text Section */}
          <div className="flex-1 space-y-2 order-2 lg:order-1">
            <h1 className="text-3xl md:text-5xl font-bold space-y-2">
              Elevate Your{" "}
              <span className="bg-gradient-to-r from-[#6a0dad] to-[#3951f2] bg-clip-text text-transparent ">
                Business{" "}
              </span>
              With
              <br /> Data-Driven Marketing <br /> and Decisions.
            </h1>

            <p className="">
              <div className="flex items-center gap-3 pt-3">
                <span>Hi, I am Bivuti Vussion</span>
                <span>
                  <MdOutlineWavingHand className="text-2xl animate-bounceUpDown" />
                </span>
              </div>
              <span>
                I specialize in tracking for Google Ads, Facebook Ads, and
                integrated solutions across platforms. Over the past five years,
                my expertise has focused on implementing tracking systems that
                not only enhance ad performance but also deliver actionable
                insights. While many can complete a basic setup, the real
                challenge lies in diagnosing and resolving issues when things go
                wrong—and that&apos;s where I excel. I’ve spent 90% of my career
                working directly with clients to solve complex tracking
                problems, ensuring their campaigns run smoothly and efficiently.
              </span>
            </p>

            <div className="mt-5 flex flex-col md:flex-row items-start lg:items-center gap-3 lg:gap-1">
              <button className="btn rounded-3xl px-8 text-white bg-primary-gradient transition-all duration-300 mr-5 text-base font-medium">
                Hire me
              </button>
              <button className="flex items-center justify-center gap-1 rounded-full text-base font-medium px-6 py-3 border-primary-gradient border-2 hover:bg-primary-gradient hover:text-white">
                Previous work
                <RxArrowTopRight className="font-bold text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
