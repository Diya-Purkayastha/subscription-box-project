import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';

const testimonials = [
    {
        name: "Sarah Khan",
        review: "SubS.boX is a great service! I love how easy it is to use. The monthly deliveries are always on time and the quality of the items has never disappointed me. It feels like getting a gift every month.",
        rating: 5,
        photo: "https://i.pravatar.cc/150?img=32",
      },
      {
        name: "Ravi Patel",
        review: "Good customer support and the products are really nice! I had an issue with one of my boxes and they sorted it out quickly. Definitely worth the subscription for anyone who likes surprises and value.",
        rating: 5,
        photo: "https://i.pravatar.cc/150?img=12",
      },
      {
        name: "Meena Roy",
        review: "I got my first box on time. Everything was smooth. The items were packed nicely, and I could tell a lot of thought went into curating the contents. Can’t wait for my next one!",
        rating: 5,
        photo: "https://i.pravatar.cc/150?img=45",
      },
];

const TestimonialWithImage = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center my-10 px-4 lg:px-10 gap-8 mb-10 md:mb-40">
        
   
      <div className="w-full  lg:w-1/2" data-aos = "fade-up" data-aos-delay='300' >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center lg:text-left text-gray-800">What Our Users Say</h2>
        <Swiper
                modules={[ Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
               
            >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 md:h-[250px] rounded-xl shadow-md border-2 border-secondary">
                <div className="flex items-center mb-4">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <div className="text-yellow-500 text-lg">
                      {"★".repeat(item.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-lg">"{item.review}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full lg:w-1/2" data-aos = "fade-up" >
        <img
          src="https://i.ibb.co.com/nN0Cf8vK/undraw-reviews-ukai.png"
          alt="Happy Customers"
          className="w-full h-full object-cover rounded-xl shadow-md"
        />
      </div>
    </div>
  );
};

export default TestimonialWithImage;
