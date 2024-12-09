import img1 from "../../src/assets/img1.jpg";
import img2 from "../../src/assets/img2.jpg";
import img3 from "../../src/assets/img3.jpg";
import img4 from "../../src/assets/img4.jpg";
import img5 from "../../src/assets/img5.jpg";
import img6 from "../../src/assets/img6.jpg";
import img7 from "../../src/assets/img7.jpg";
import img8 from "../../src/assets/img8.jpg";
import img9 from "../../src/assets/img9.jpg";
import img10 from "../../src/assets/img10.jpg";

const ClientReview = () => {
  return (
    <section id="reviews" className="max-w-[1200px] mx-auto">
      <div className="py-10">
        <div className="flex items-center justify-start">
          <div className="bg-primary-gradient w-2 h-6 mr-2"></div>
          <h1 className="text-lg font-bold uppercase">Review</h1>
        </div>
        <p className="text-[25px] font-bold uppercase">
          From my satisfied clients
        </p>
      </div>
      <div className="carousel carousel-center rounded-box">
        {/* card 1 */}
        <div className="carousel-item">
          <div className="card card-side bg-base-100 shadow-xl ">
            <figure>
              <img src={img1}  alt="image_loading" className="object-contain" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-bold uppercase">Sharma</h2>
              <p className="text-justify text-sm leading-relaxed break-words">
                I am incredibly grateful for the work Bivuti has done for me.
                Where even Shopify experts couldn’t find a solution, he solved
                my issue completely <br /> in just one day! Thanks to his
                expertise, my conversion campaigns are finally working as they
                should, and I can confidently start running
                <br /> my campaigns. Orchona communicated clearly and understood
                exactly what was needed. He quickly and professionally made the
                technical <br /> adjustments, including activating the AddToCart
                event, which hadn’t been working previously due to a custom cart
                setup. In short, a true expert! <br />I would definitely
                recommend Bivuti to anyone looking for fast and skilled Shopify
                assistance.
              </p>
              <p>
                - <span className="font-semibold">Netherlands</span>
              </p>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="carousel-item ">
          <div className="card card-side bg-base-100 shadow-xl ">
            <figure>
              <img src={img2} alt="image_loading" className="object-contain" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-bold uppercase">Rishadul Islam</h2>
              <p className="text-justify text-sm leading-relaxed break-words">
                I have recently hired Vibhuti Bhushan Malik for one of my
                project that includes setting up of -> JS coding to shopify
                store, Google tag <br /> managers, Advanced pixel setup, Server
                Config, Conversion API, Google analytics 4, Event match quality.
                And I am quite pleased with the <br /> outcome he was able to
                bring to the project I definitely consider working with him
                again on a future projects.
              </p>
              <p>
                - <span className="font-semibold">Bangladesh</span>
              </p>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="carousel-item">
          <div className="card card-side bg-base-100 shadow-xl ">
            <figure>
              <img src={img3} alt="image_loading" className="object-contain" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-bold uppercase">Max</h2>
              <p className="text-justify text-sm leading-relaxed break-words">
                Bivuti is professional, fast, and thorough.
              </p>
              <p>
                - <span className="font-semibold">USA</span>
              </p>
            </div>
          </div>
        </div>
        {/* card 4 */}
        <div className="carousel-item">
          <div className="card card-side bg-base-100 shadow-xl ">
            <figure>
              <img src={img4} alt="image_loading" className="object-contain" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-bold uppercase">Itamar Jon</h2>
              <p className="text-justify text-sm leading-relaxed break-words">
                Thank you for the help, I appreciate the good customer service.
              </p>
              <p>
                - <span className="font-semibold">Italy</span>
              </p>
            </div>
          </div>
        </div>
        {/* card 5 */}
        <div className="carousel-item">
          <div className="card card-side bg-base-100 shadow-xl ">
            <figure>
              <img src={img5} alt="image_loading" className="object-contain" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-bold uppercase">Adi Avram</h2>
              <p className="text-justify text-sm leading-relaxed break-words">
                I am very appreciative of Bivuti's clear and professional
                communication, strategic insights, and partnership in our <br />{" "}
                Facebook Pixel error. He went above and beyond in making the
                process comprehensive and moving us closer to <br /> our goals.
                I look forward to working together again!
              </p>
              <p>
                - <span className="font-semibold">Romania</span>
              </p>
            </div>
          </div>
        </div>
        {/* card 6 */}
        <div className="carousel-item">
          <div className="card card-side bg-base-100 shadow-xl ">
            <figure>
              <img src={img6} alt="image_loading" className="object-contain" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-bold uppercase">Ortal</h2>
              <p className="text-justify text-sm leading-relaxed break-words">
                Bivuti is great to work with—very professional, knowledgeable,
                and communicative. He answered all my questions and completed
                the work successfully. <br />
                Thank you very much!
              </p>
              <p>
                - <span className="font-semibold">Israel</span>
              </p>
            </div>
          </div>
        </div>
        {/* card 7 */}
        <div className="carousel-item">
          <div className="card card-side bg-base-100 shadow-xl ">
            <figure>
              <img src={img7} alt="image_loading" className="object-contain" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-bold uppercase">Mark</h2>
              <p className="text-justify text-sm leading-relaxed break-words">
                I thought Bivuti Vussion Mallik was excellent! We worked
                together to get the website working correctly. I am pleased{" "}
                <br /> with the work he did and would like to work with him
                again.
              </p>
              <p>
                - <span className="font-semibold">USA</span>
              </p>
            </div>
          </div>
        </div>
        {/* card 8 */}
        {/* <div className="carousel-item">
          <div className="card card-side bg-base-100 shadow-xl ">
            <figure>
              <img src={img8} alt="image_loading" className="object-contain" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-bold uppercase">David</h2>
              <p className="text-justify text-sm leading-relaxed break-words">
              Great work, connected my tiktok pixel to google tag manager to monitor conversions. Fast and very professional. Will hire again.

              </p>
              <p>
                - <span className="font-semibold">USA</span>
              </p>
            </div>
          </div>
        </div> */}
        {/* card 9 */}
        {/* <div className="carousel-item">
          <div className="card card-side bg-base-100 shadow-xl ">
            <figure>
              <img src={img9} alt="image_loading" className="object-contain" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-bold uppercase"> CT Marketing Solutions</h2>
              <p className="text-justify text-sm leading-relaxed break-words">
              Excellent Data analytics person connected my TikTok account to my GTM. Bivuti is very professional and technically very good.
              </p>
              <p>
                - <span className="font-semibold">UK</span>
              </p>
            </div>
          </div>
        </div> */}
        {/* card 10 */}
        {/* <div className="carousel-item">
          <div className="card card-side bg-base-100 shadow-xl ">
            <figure>
              <img src={img10} alt="image_loading" className="object-contain" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-bold uppercase">Mollins</h2>
              <p className="text-justify text-sm leading-relaxed break-words">
              Bivuti was a great help regarding the Consent Mode V2 implementation & Google Analytics 4. He replied, <br />act and delivered his job very fast with proven results. Communication was very goood as well. I am very happy <br /> with his job. I will contact him everytime I need conversion tracking support.
              </p>
              <p>
                - <span className="font-semibold">Spain</span>
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ClientReview;
