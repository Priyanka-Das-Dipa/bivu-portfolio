import { AiOutlineDiscord } from "react-icons/ai";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { SlSocialSkype } from "react-icons/sl";

const Contact = () => {
  return (
    <section
      id="contact"
      className=" bg-contact min-h-screen flex items-center px-5 py-16 "
    >
      <div className="  max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center ">
          <div className="text-center lg:text-left text-white ">
            <h1 className="text-sm md:text-xl uppercase text-center font-bold pb-2">
              Contact me now
            </h1>
            <h1 className="text-2xl md:text-5xl uppercase font-bold text-center">
              Let&#39;s get in touch
            </h1>
            <hr className="w-32 border-2 border-white mx-auto mt-3" />

            <p className="py-6 uppercase text-center">
              Email : info@bivutimallik.com
            </p>
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
          <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="flex flex-col lg:flex-row gap-5">
                <div className="form-control flex-1">
                  <input
                    type="first_name"
                    placeholder="First Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control flex-1">
                  <input
                    type="last_name"
                    placeholder="Last Name"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary uppercase">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
