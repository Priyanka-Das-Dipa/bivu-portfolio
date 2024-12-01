import { PiCaretCircleRightLight } from "react-icons/pi";
import Modal from "./modal";
import { useState } from "react";

const Price = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  return (
    <section className="max-w-[1200px] mx-auto mb-24">
      <div className="py-10">
        <div className="flex items-center justify-start">
          <div className="bg-primary-gradient w-2 h-6 mr-2"></div>
          <h1 className="text-lg font-bold uppercase">Pricing</h1>
        </div>
        <p className="text-[25px] font-bold uppercase">
          FInd the best package for you
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* card-1 */}
        <div className="card bg-base-100 w-full shadow-xl  border-2 border-yellow-500">
          <h1 className="bg-primary-gradient text-center text-white uppercase font-bold text-lg py-5 rounded-t-2xl">
            Gad Conversion Tracking
          </h1>
          <div className="flex justify-center items-center py-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              viewBox="0 -13 256 256"
              preserveAspectRatio="xMidYMid"
            >
              <g>
                <path
                  d="M5.888,166.405103 L90.88,20.9 C101.676138,27.2558621 156.115862,57.3844138 164.908138,63.1135172 L79.9161379,208.627448 C70.6206897,220.906621 -5.888,185.040138 5.888,166.396276 L5.888,166.405103 Z"
                  fill="#FBBC04"
                ></path>
                <path
                  d="M250.084224,166.401789 L165.092224,20.9055131 C153.210293,1.13172 127.619121,-6.05393517 106.600638,5.62496138 C85.582155,17.3038579 79.182155,42.4624786 91.0640861,63.1190303 L176.056086,208.632961 C187.938017,228.397927 213.52919,235.583582 234.547672,223.904686 C254.648086,212.225789 261.966155,186.175582 250.084224,166.419444 L250.084224,166.401789 Z"
                  fill="#4285F4"
                ></path>
                <ellipse
                  fill="#34A853"
                  cx="42.6637241"
                  cy="187.924414"
                  rx="42.6637241"
                  ry="41.6044138"
                ></ellipse>
              </g>
            </svg>
          </div>
          <div className="card-body">
            <div className="space-y-3">
              <ul className="flex justify-start items-center gap-3">
                <PiCaretCircleRightLight className="text-2xl text-yellow-500" />{" "}
                Create GAd Conversion Tracking Tag
              </ul>
              <hr className="text-yellow-500" />
              <ul className="flex justify-start items-center gap-3">
                <PiCaretCircleRightLight className="text-2xl text-yellow-500" />{" "}
                Implement GAd Conversion Tracking
              </ul>
              <hr className="text-yellow-500" />
              <ul className="flex justify-start items-center gap-3">
                <PiCaretCircleRightLight className="text-2xl text-yellow-500" />{" "}
                E-Commerce Events Tracking
              </ul>
              <hr className="text-yellow-500" />
              <ul className="flex justify-start items-center gap-3">
                <PiCaretCircleRightLight className="text-2xl text-yellow-500" />{" "}
                Dynamic Purchase Value Tracking
              </ul>
              <hr className="text-yellow-500" />
              <ul className="flex justify-start items-center gap-3">
                <PiCaretCircleRightLight className="text-2xl text-yellow-500" />{" "}
                Button, Form Submission Tracking
              </ul>
              <hr className="text-yellow-500" />
              <ul className="flex justify-start items-center gap-3">
                <PiCaretCircleRightLight className="text-2xl text-yellow-500" />{" "}
                Lead Form Submission Tracking
              </ul>
              <hr className="text-yellow-500" />
              <ul className="flex justify-start items-center gap-3">
                <PiCaretCircleRightLight className="text-2xl text-yellow-500" />{" "}
                Enhanced Conversion Tracking Setup
              </ul>
              <hr className="text-yellow-500" />
              <ul className="flex justify-start items-center gap-3">
                <PiCaretCircleRightLight className="text-2xl text-yellow-500" />{" "}
                Advanced Matching
              </ul>
              <hr className="text-yellow-500" />
              <ul className="flex justify-start items-center gap-3">
                <PiCaretCircleRightLight className="text-2xl text-yellow-500" />{" "}
                Server Side Tracking
              </ul>
              <hr className="text-yellow-500" />
              <ul className="flex justify-start items-center gap-3">
                <PiCaretCircleRightLight className="text-2xl text-yellow-500" />{" "}
                Audit & Bug Fixing
              </ul>
              <hr className="text-yellow-500" />
              <ul className="flex justify-start items-center gap-3">
                <PiCaretCircleRightLight className="text-2xl text-yellow-500" />{" "}
                Fix and Diagnostics error
              </ul>
            </div>

            <div className="card-actions justify-center mt-5">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn bg-blue-600"
              >
                Request a Quote
              </button>
              {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
            </div>
          </div>
        </div>
        {/* card -2 */}
        <div className="card bg-base-100 w-full  shadow-xl  border-2 border-yellow-500">
          <h1 className="bg-primary-gradient text-center text-white uppercase font-bold text-lg py-5 rounded-t-2xl">
            Google Tag Manager
          </h1>
          <div className="flex justify-center items-center py-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              viewBox="0 0 256 256"
              preserveAspectRatio="xMidYMid"
            >
              <g>
                <polygon
                  fill="#8AB4F8"
                  points="150.261818 245.516364 105.825455 202.185455 201.258182 104.730909 247.265455 149.821818"
                ></polygon>
                <path
                  d="M150.450909,53.9381818 L106.174545,8.73090909 L9.36,104.629091 C-3.12,117.109091 -3.12,137.341818 9.36,149.836364 L104.72,245.821818 L149.810909,203.64 L77.1563636,127.232727 L150.450909,53.9381818 Z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M246.625455,105.370909 L150.625455,9.37090909 C138.130909,-3.12363636 117.869091,-3.12363636 105.374545,9.37090909 C92.88,21.8654545 92.88,42.1272727 105.374545,54.6218182 L201.374545,150.621818 C213.869091,163.116364 234.130909,163.116364 246.625455,150.621818 C259.12,138.127273 259.12,117.865455 246.625455,105.370909 Z"
                  fill="#8AB4F8"
                ></path>
                <circle
                  fill="#246FDB"
                  cx="127.265455"
                  cy="224.730909"
                  r="31.2727273"
                ></circle>
              </g>
            </svg>
          </div>
          <div className="card-body">
            <div className="space-y-3">
              <ul className="flex justify-start items-center gap-3">
                <PiCaretCircleRightLight className="text-2xl text-yellow-500" />{" "}
                Google Tag Manager Setup
              </ul>
              <hr className="text-yellow-500" />
              <ul className="flex justify-start items-center gap-3">
                <PiCaretCircleRightLight className="text-2xl text-yellow-500" />{" "}
                Create Web and Server Container
              </ul>
              <hr className="text-yellow-500" />
              <ul className="flex justify-start items-center gap-3">
                <PiCaretCircleRightLight className="text-2xl text-yellow-500" />{" "}
                Phone Call, Email Button Tracking
              </ul>
              <hr className="text-yellow-500" />
              <ul className="flex justify-start items-center gap-3">
                <PiCaretCircleRightLight className="text-2xl text-yellow-500" />{" "}
                Button, Form Submission Tracking
              </ul>
              <hr className="text-yellow-500" />
              <ul className="flex justify-start items-center gap-3">
                <PiCaretCircleRightLight className="text-2xl text-yellow-500" />{" "}
                PDF, Word & File Download Tracking
              </ul>
              <hr className="text-yellow-500" />
              <ul className="flex justify-start items-center gap-3">
                <PiCaretCircleRightLight className="text-2xl text-yellow-500" />{" "}
                Video, Page Scrolling Tracking
              </ul>
              <hr className="text-yellow-500" />
              <ul className="flex justify-start items-center gap-3">
                <PiCaretCircleRightLight className="text-2xl text-yellow-500" />{" "}
                Facebook Pixel Conversion Api
              </ul>
              <hr className="text-yellow-500" />
              <ul className="flex justify-start items-center gap-3">
                <PiCaretCircleRightLight className="text-2xl text-yellow-500" />{" "}
                First-Party Domain Tracking
              </ul>
              <hr className="text-yellow-500" />
              <ul className="flex justify-start items-center gap-3">
                <PiCaretCircleRightLight className="text-2xl text-yellow-500" />{" "}
                GTM Server-Side Tracking
              </ul>
              <hr className="text-yellow-500" />
              <ul className="flex justify-start items-center gap-3">
                <PiCaretCircleRightLight className="text-2xl text-yellow-500" />{" "}
                TikTok Pixel Conversion API
              </ul>
              <hr className="text-yellow-500" />
              <ul className="flex justify-start items-center gap-3">
                <PiCaretCircleRightLight className="text-2xl text-yellow-500" />{" "}
                Twitter, Reddit, Snapchat Pixel
              </ul>
            </div>

            <div className="card-actions justify-center mt-5">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn bg-blue-600"
              >
                Request a Quote
              </button>
              {isModalOpen2 && <Modal onClose={() => setIsModalOpen2(false)} />}
            </div>
          </div>
        </div>
        {/* card -3 */}
        <div className="card bg-base-100 w-full shadow-xl  border-2 border-yellow-500">
          <h1 className="bg-primary-gradient text-center text-white uppercase font-bold text-lg py-5 rounded-t-2xl">
            Google Analytics 4
          </h1>
          <div className="flex justify-center items-center py-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="64"
              viewBox="0 0 55.273 64"
            >
              <g transform="matrix(.363638 0 0 .363636 -7.272763 -2.909091)">
                <path
                  d="M130 29v132c0 14.77 10.2 23 21 23 10 0 21-7 21-23V30c0-13.54-10-22-21-22s-21 9.33-21 21z"
                  fill="#f9ab00"
                ></path>
                <g fill="#e37400">
                  <path d="M75 96v65c0 14.77 10.2 23 21 23 10 0 21-7 21-23V97c0-13.54-10-22-21-22s-21 9.33-21 21z"></path>
                  <circle cx="41" cy="163" r="21"></circle>
                </g>
              </g>
            </svg>
          </div>
          <div className="card-body">
            <div className="space-y-3">
              <ul className="flex justify-start items-center gap-3">
                <PiCaretCircleRightLight className="text-2xl text-yellow-500" />{" "}
                Create Google Analytics 4 Property
              </ul>
              <hr className="text-yellow-500" />
              <ul className="flex justify-start items-center gap-3">
                <PiCaretCircleRightLight className="text-2xl text-yellow-500" />{" "}
                Setup Data Streams & Enable Signal
              </ul>
              <hr className="text-yellow-500" />
              <ul className="flex justify-start items-center gap-3">
                <PiCaretCircleRightLight className="text-2xl text-yellow-500" />{" "}
                Install Google Analytics 4 on Website
              </ul>
              <hr className="text-yellow-500" />
              <ul className="flex justify-start items-center gap-3">
                <PiCaretCircleRightLight className="text-2xl text-yellow-500" />{" "}
                Button, Form Submission Tracking
              </ul>
              <hr className="text-yellow-500" />
              <ul className="flex justify-start items-center gap-3">
                <PiCaretCircleRightLight className="text-2xl text-yellow-500" />{" "}
                Phone Call, Email Button Tracking
              </ul>
              <hr className="text-yellow-500" />
              <ul className="flex justify-start items-center gap-3">
                <PiCaretCircleRightLight className="text-2xl text-yellow-500" />{" "}
                PDF, Word & File Download
              </ul>
              <hr className="text-yellow-500" />
              <ul className="flex justify-start items-center gap-3">
                <PiCaretCircleRightLight className="text-2xl text-yellow-500" />{" "}
                Cross-Domain Tracking
              </ul>
              <hr className="text-yellow-500" />
              <ul className="flex justify-start items-center gap-3">
                <PiCaretCircleRightLight className="text-2xl text-yellow-500" />{" "}
                Enhanced e-Commerce Tracking
              </ul>
              <hr className="text-yellow-500" />
              <ul className="flex justify-start items-center gap-3">
                <PiCaretCircleRightLight className="text-2xl text-yellow-500" />{" "}
                Google Analytics Event
              </ul>
              <hr className="text-yellow-500" />
              <ul className="flex justify-start items-center gap-3">
                <PiCaretCircleRightLight className="text-2xl text-yellow-500" />{" "}
                GA4 Dashboard and Reports
              </ul>
              <hr className="text-yellow-500" />
              <ul className="flex justify-start items-center gap-3">
                <PiCaretCircleRightLight className="text-2xl text-yellow-500" />{" "}
                Audience for Google Ads
              </ul>
            </div>

            <div className="card-actions justify-center mt-5">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn bg-blue-600"
              >
                Request a Quote
              </button>
              {isModalOpen3 && <Modal onClose={() => setIsModalOpen3(false)} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
