import { AiOutlineDiscord } from "react-icons/ai";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { SlSocialSkype } from "react-icons/sl";

const Footer = () => {
  return (
    <section className="text-base-content py-10 bg-[#F5F4FB]">
      <footer className="footer max-w-[1200px] mx-auto ">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover"> FACEBOOK PIXEL/CONVERSION API</a>
          <a className="link link-hover"> GOOGLE TAG MANAGER</a>
          <a className="link link-hover"> GOOGLE ANALYTICS 4/GA4</a>
          <a className="link link-hover">
            GOOGLE ADS CONVERSION TRACKING AND REMARKETING TAG
          </a>
          <a className="link link-hover">Pinterest Tag & Conversion API</a>
          <a className="link link-hover">
            Microsoft Advertising/Bing Ads Tracking
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Price</a>
          <a className="link link-hover">Reviews</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.linkedin.com/in/bivuti-vussion-mallik/"
              target="_blank"
            >
              <CiLinkedin className="text-black text-4xl" />
            </a>
            <a href="skype:live:.cid.b079b4dabb308aff?chat">
              <SlSocialSkype className="text-black text-4xl" />
            </a>
            <a href="https://www.facebook.com/bivutim" target="_blank">
              <CiFacebook className="text-black text-4xl" />
            </a>
            <a href=" https://discord.com/channels/@ads_bivuti" target="_blank">
              <AiOutlineDiscord className="text-black text-4xl" />
            </a>
            <link rel="stylesheet" href="" />
          </div>
        </nav>
      </footer>
      <div className="text-center text-base-content border-base-300  px-10 pt-10">
        <p className="border-t pt-2">
          @Copyright. All rights reserved by Bivuti Vussion Mallik.
        </p>
      </div>
    </section>
  );
};

export default Footer;
