import { AiOutlineGlobal } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { LuFileBadge } from "react-icons/lu";
import { RiProjectorFill } from "react-icons/ri";

const BannerCard = () => {
  return (
    <section className="max-w-[1200px] mx-auto ">
      <div className="rounded-lg px-10 py-8 bg-slate-100 animate-float">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex gap-2">
            {/* <img
              loading="lazy"
              decoding="async"
              width="48"
              height="42"
              src="https://shahriarmehedi.com/wp-content/uploads/2024/05/pp_counter_icon_1.png"
              className="attachment-large size-large wp-image-200 size-12"
              alt=""
            /> */}
            <LuFileBadge className="text-3xl" />
            <div>
              <p className="text-[40px] font-bold">5 +</p>

              <h1 className="text-[15px] text-[#54595f] font-semibold uppercase">
                Years Experience
              </h1>
            </div>
          </div>
          <div className="flex gap-2">
            {/* <img
              loading="lazy"
              decoding="async"
              width="46"
              height="42"
              src="https://shahriarmehedi.com/wp-content/uploads/2024/05/pp_counter_icon_2.png"
              className="attachment-large size-large wp-image-202 size-12"
              alt=""
            /> */}
            <RiProjectorFill className="text-3xl" />
            <div>
              <p className="text-[40px] font-bold">380 +</p>
              <h1 className="text-[15px] text-[#54595f] font-semibold uppercase">
                {" "}
                Completed Projects
              </h1>
            </div>
          </div>
          <div className="flex gap-2">
            {/* <img
              loading="lazy"
              decoding="async"
              width="46"
              height="42"
              src="https://shahriarmehedi.com/wp-content/uploads/2024/05/pp_counter_icon_3.png"
              className="attachment-large size-large wp-image-204 size-12"
              alt=""
            /> */}
            <FaUser className="text-3xl" />
            <div>
              <p className="text-[40px] font-bold">190 +</p>
              <h1 className="text-[15px] text-[#54595f] font-semibold uppercase">
                {" "}
                Satisfied Clients{" "}
              </h1>
            </div>
          </div>
          <div className="flex justify-start items-start gap-2">
            {/* <img
              loading="lazy"
              decoding="async"
              width="46"
              height="42"
              src="https://shahriarmehedi.com/wp-content/uploads/2024/05/pp_counter_icon_4.png"
              className="attachment-large size-large wp-image-206 size-12"
              alt=""
            /> */}
            <AiOutlineGlobal className="text-3xl" />
            <div>
              <p className="text-[40px] font-bold">20+</p>
              <h1 className="text-[15px] text-[#54595f] font-semibold uppercase">
                Countries
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerCard;
