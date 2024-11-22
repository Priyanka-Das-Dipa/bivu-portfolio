import { AiOutlineDiscord } from "react-icons/ai";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { SlSocialSkype } from "react-icons/sl";

const Contact = () => {
  return (
    <section className=" bg-contact min-h-screen ">
      <div className="  max-w-[1200px] mx-auto">
        <div className="flex justify-center items-center flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
          <div className="text-center lg:text-left text-white">
            <h1 className="text-xl uppercase text-center font-bold">
              Contact me now
            </h1>
            <h1 className="text-5xl uppercase font-bold text-center">
              Let&#39;s get in touch
            </h1>
            <p className="py-6 uppercase">Email : info@bivutimallik.com</p>
            <div className="flex gap-3 justify-center">
              <a
                href="https://www.linkedin.com/in/bivuti-vussion-mallik/"
                target="_blank"
              >
                <button className="p-3 bg-white rounded-full">
                  <CiLinkedin className="text-black text-4xl" />
                </button>
              </a>
              <a href="skype:live:.cid.b079b4dabb308aff?chat">
                <button className="p-3 bg-white rounded-full">
                  <SlSocialSkype className="text-black text-4xl" />
                </button>
              </a>
              <a href="https://www.facebook.com/bivutim" target="_blank">
                <button className="p-3 bg-white rounded-full">
                  <CiFacebook className="text-black text-4xl" />
                </button>
              </a>
              <a
                href=" https://discord.com/channels/@ads_bivuti"
                target="_blank"
              >
                <button className="p-3 bg-white rounded-full">
                  <AiOutlineDiscord className="text-black text-4xl" />
                </button>
              </a>
              <link rel="stylesheet" href="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
