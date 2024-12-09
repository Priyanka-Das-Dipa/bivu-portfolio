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
  const data = [
    {
      name: "Sharma",
      country: "Netherlands",
      comment:
        "I am incredibly grateful for the work Bivuti has done for me. Where even Shopify experts couldn’t find a solution, he solved my issue completely in just one day! Thanks to his expertise, my conversion campaigns are finally working as they should, and I can confidently start running my campaigns. Orchona communicated clearly and understood exactly what was needed. He quickly and professionally made the technical adjustments, including activating the AddToCart event, which hadn’t been working previously due to a custom cart setup. In short, a true expert! I would definitely recommend Bivuti to anyone looking for fast and skilled Shopify assistance.",
      image: img1,
    },
    {
      name: "Rishadul Islam",
      country: "Bangladesh",
      comment:
        "I have recently hired Vibhuti Bhushan Malik for one of my project that includes setting up of -> JS coding to shopify store, Google tag managers, Advanced pixel setup, Server Config, Conversion API, Google analytics 4, Event match quality. And I am quite pleased with the outcome he was able to bring to the project I definitely consider working with him again on a future projects.",
      image: img2,
    },
    {
      name: "Max",
      country: "USA",
      comment: "Bivuti is professional, fast, and thorough.",
      image: img3,
    },
    {
      name: "Itamar Jon",
      country: "Italy",
      comment:
        "Thank you for the help, I appreciate the good customer service.",
      image: img4,
    },
    {
      name: "Adi Avram",
      country: "Romania",
      comment:
        "I am very appreciative of Bivuti's clear and professional communication, strategic insights, and partnership in our Facebook Pixel error. He went above and beyond in making the process comprehensive and moving us closer to our goals. I look forward to working together again!",
      image: img5,
    },
    {
      name: "Ortal",
      country: "Israel",
      comment:
        "Bivuti is great to work with—very professional, knowledgeable, and communicative. He answered all my questions and completed the work successfully. Thank you very much!",
      image: img6,
    },
    {
      name: "Mark",
      country: "USA",
      comment:
        "I thought Bivuti Vussion Mallik was excellent! We worked together to get the website working correctly. I’m pleased with the work he did and would like to work with him again.",
      image: img7,
    },
    {
      name: "David",
      country: "USA",
      comment:
        "Great work, connected my TikTok pixel to Google Tag Manager to monitor conversions. Fast and very professional. Will hire again.",
      image: img8,
    },
    {
      name: "CT Marketing Solutions",
      country: "UK",
      comment:
        "Excellent Data analytics person connected my TikTok account to my GTM. Bivuti is very professional and technically very good.",
      image: img9,
    },
    {
      name: "Mollins",
      country: "Spain",
      comment:
        "Bivuti was a great help regarding the Consent Mode V2 implementation & Google Analytics 4. He replied, acted, and delivered his job very fast with proven results. Communication was very good as well. I am very happy with his job. I will contact him every time I need conversion tracking support.",
      image: img10,
    },
  ];

  return (
    <section className="max-w-[1200px] mx-auto">
      <div className="py-10">
        <div className="flex items-center justify-start">
          <div className="bg-primary-gradient w-2 h-6 mr-2"></div>
          <h1 className="text-lg font-bold uppercase">Review</h1>
        </div>
        <p className="text-[25px] font-bold uppercase">
          From my satisfied clients
        </p>
      </div>
      <div className="carousel carousel-center rounded-box gap-10">
        {data.map((client, index) => (
          <div key={index} className="carousel-item">
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src={client.image}
                  alt={client.name}
                  className="object-cover w-[280px]"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-bold uppercase">
                  {client.name}
                </h2>
                <p>
                  from <span className="font-semibold">{client.country}</span>
                </p>
                <p className="text-justify text-sm leading-relaxed">
                  {client.comment}
                </p>
              </div>
            </div>
          </div>
        ))}
        {/* slider - 1 */}
        <div className="carousel-item">
          <div className="card card-side bg-base-100 shadow-xl ">
            <figure>
              <img src={img1} alt="Movie" className="object-cover w-[280px]" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-bold uppercase"> Sharma </h2>
              <p>
                {" "}
                from <span> Netherlands </span>
              </p>
              <p className="text-justify text-clip overflow-hidden  ">
                &quot; I am incredibly grateful for the work Bivuti has done for
                me. Where even Shopify experts couldn’t find a solution, he
                solved my issue completely in just one day! Thanks to his
                expertise, my conversion campaigns are finally working as they
                should, and I can confidently start running my campaigns.
                Orchona communicated clearly and understood exactly what was
                needed. He quickly and professionally made the technical
                adjustments, including activating the AddToCart event, which
                hadn’t been working previously due to a custom cart setup. In
                short, a true expert! I would definitely recommend Bivuti to
                anyone looking for fast and skilled Shopify assistance.&ldquo;
              </p>
            </div>
          </div>
        </div>
        {/* slider - 2 */}
        <div className="carousel-item">
          <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
