import data from "../data/data.json";

const Services = () => {
  return (
    <section id="services" className="max-w-[1200px] mx-auto mb-24">
      <div className="py-10">
        <div className="flex items-center justify-start">
          <div className="bg-primary-gradient w-2 h-6 mr-2"></div>
          <h1 className="text-lg font-bold uppercase">Services</h1>
        </div>
        <p className="text-[25px] font-bold uppercase">
          What I Do for My Clients
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="card bg-base-100 w-full md:w-96 md:h-[450px] shadow-2xl py-10 animate-float"
          >
            <div className="flex justify-center items-center">
              <div
                dangerouslySetInnerHTML={{ __html: item.svg }}
                className="bg-primary-gradient p-5 rounded-full"
              />
            </div>
            <div className="card-body items-center text-center space-y-1">
              <h2 className="card-title text-[25px] uppercase font-bold">
                {item.title}
              </h2>
              <p className="text-[14px] font-medium text-[#54595f]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
