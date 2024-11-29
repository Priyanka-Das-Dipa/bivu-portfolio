import { FaLinkedin, FaSkype } from "react-icons/fa";
import img from "../assets/profile-img.png";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <section className="max-w-[1200px] mx-auto max-h-screen">
      <div className="flex">
        <div className="flex-1">
          <img src={img} alt="" />
          <div className="pt-5">
            <div className="flex justify-center items-center mb-3">
              <button className="btn px-12 bg-primary-gradient text-white transition-all duration-300 mr-5 text-base font-medium">
                Contact me
              </button>
            </div>
            <div className="flex gap-2 justify-center items-start -ml-5">
              <button className="p-3 bg-primary-gradient text-white rounded-full">
                <Link
                  to="https://www.linkedin.com/in/bivuti-vussion-mallik/"
                  target="_blank"
                >
                  <FaLinkedin className="text-2xl" />
                </Link>
              </button>
              <button className="p-3 bg-primary-gradient text-white rounded-full">
                <Link
                  to="skype:live:.cid.b079b4dabb308aff?chat"
                  target="_blank"
                >
                  <FaSkype className="text-2xl" />
                </Link>
              </button>
              <button className="p-3 bg-primary-gradient text-white rounded-full">
                <Link to="https://www.facebook.com/bivutim" target="_blank">
                  <MdEmail className="text-2xl" />
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <p className="text-xl font-semibold pb-2 text-justify">About Me</p>
          <h1 className="text-4xl font-bold uppercase pb-2 text-justify">
            Check out my best skills
          </h1>
          <p className="text-base font-medium pb-2 text-justify">
            Hi, This is Bivuti Vussion Mallik (Dip), a seasoned professional
            TOP-RATED Upwork Freelancer with over 5 years of hands-on
            experience. I have helped more than 190+ clients from various
            industries improve their tracking experiences.
          </p>
          <p className="text-base font-medium pb-2 text-justify">
            Working on Google Analytics 4 (GA4) & Enhanced Ecommerce Tracking,
            Google Tag Manager (GTM) Implementation, Facebook Conversion API
            Integration, Google Ads Conversion Tracking, Subdomain Tracking,
            Pinterest Tracking, TikTok Tracking, Thrivecart, Smart Cart
            Tracking, and Server-Side Google Analytics 4 (GA4) Tracking, and
            much more.
          </p>
          <p className="text-base font-medium pb-2 text-justify">
            I&apos;ve honed my expertise in a wide array of areas, ensuring your
            business stands out and succeeds in the digital landscape.
          </p>
          <p className="text-base font-medium pb-2 text-justify">
            By working with me, you can expect the best tracking and analytics
            experience. I am proficient in various platforms, including Shopify,
            WordPress, WooCommerce, Magento, Squarespace, Wix, ClickFunnels,
            Webflow, and custom PHP sites. Thank you for considering my
            services.
          </p>
          <p className="text-base font-medium pb-2 text-justify">
            I look forward to helping you optimize your campaigns with accurate
            tracking and insightful analytics reports.
          </p>
          <p className="text-base font-medium text-justify">
            Thanks, <br />
            Bivuti Vussion Mallik <br />
            Analytics & Conversion Tracking Pro
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
