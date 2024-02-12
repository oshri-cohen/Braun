import React from "react";
import braun5 from "../../assets/braun5.png"
import braun2 from "../../assets/braun2.png"

const carList = [
  {
    name: "Braun Classic",
    price: 2400,
    image: braun2,
    aosDelay: "0",
    information: "IPL"
  },
  {
    name: "Braun 5",
    price: 2599,
    image: braun5,
    aosDelay: "500",
    information: "IPL PRO 5"
  },

];

const CarList = () => {
  return (
    <div className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Products
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
        The device is sufficient for 400,000 flashes (about 22 years of treatments) - continuous pressing treatment: ideal for areas of the body with a surface area that does not require precision, - clinically tested, the treatments are gentle and almost painless - 
        dermatologically tested: suitable for daily use, even on Sensitive skin - quick treatment!
        </p>
        {/* Car listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data) => (
              // eslint-disable-next-line react/jsx-key
              <div
             data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{data.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>${data.price}/Day</p>
                    <a href="#">Details</a>
                  </div>
                </div>
                <p className="text-xl font-semibold absolute top-0 left-3">
                     {data.information}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* End of car listing */}
        <div className="grid place-items-center mt-8">
          <button data-aos="fade-up" className="button-outline">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
