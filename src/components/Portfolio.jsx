// import image from "../assets/Google-Ads-portfolio-Long-image.png";
const Portfolio = () => {
  return (
    <section className="max-w-[1200px] mx-auto">
      <div className="py-10">
        <div className="flex items-center justify-start">
          <div className="bg-primary-gradient w-2 h-6 mr-2"></div>
          <h1 className="text-lg font-bold uppercase">portfolio</h1>
        </div>
        <p className="text-[25px] font-bold uppercase">Explore my works</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="card card-compact bg-base-100 w-96 h-[600px] shadow-xl group overflow-hidden">
          <div className="box1"></div>
          <div className="card-body bg-slate-200 py-5">
            <p className="uppercase font-bold text-xl text-center">
              G. Ads Conversion Tracking?
            </p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 w-96 h-[600px] shadow-xl group overflow-hidden">
          <div className="box1"></div>
          <div className="card-body bg-slate-200 py-5">
            <p className="uppercase font-bold text-xl text-center">
              Google Ads Lead Tracking
            </p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 w-96 h-[600px] shadow-xl group overflow-hidden">
          <div className="box1"></div>
          <div className="card-body bg-slate-200 py-5">
            <p className="uppercase font-bold text-xl text-center">
              Facebook Pixel Conversion Api
            </p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 w-96 h-[600px] shadow-xl group overflow-hidden">
          <div className="box1"></div>
          <div className="card-body bg-slate-200 py-5">
            <p className="uppercase font-bold text-xl text-center">
              Facebook Pixel Lead Tracking
            </p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 w-96 h-[600px] shadow-xl group overflow-hidden">
          <div className="box1"></div>
          <div className="card-body bg-slate-200 py-5">
            <p className="uppercase font-bold text-xl text-center">
              Google Analytics 4 Tracking
            </p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 w-96 h-[600px] shadow-xl group overflow-hidden">
          <div className="box1"></div>
          <div className="card-body bg-slate-200 py-5">
            <p className="uppercase font-bold text-xl text-center">
              Tiktok Pixel Tracking Setup
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
