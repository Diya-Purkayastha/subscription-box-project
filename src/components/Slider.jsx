import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../components/css/slider.css'

const Slider = () => {
    return (
        <div className="w-full h-[80vh] group relative">
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="h-full"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="flex flex-col md:flex-row items-center justify-between h-full w-full overflow-hidden px-8 md:px-16">
                        {/* Left Text Content */}
                        <div className="md:w-1/2 text-center md:text-left py-12 space-y-6">
                            <h1 className="text-4xl md:text-6xl font-light text-gray-800 leading-tight">
                                Coffee Crate <br />
                                <span className="font-bold">Subscriptions</span>
                            </h1>
                            <p className="text-gray-700 text-lg">
                                New: Coffee Experiences All Over The World
                            </p>
                            <ul className="space-y-2 text-gray-800 text-base">
                                <li>☕ 100% Satisfaction Guarantee</li>
                                <li>☕ World-Class Selected Coffee's</li>
                                <li>☕ Get Your Monthly Coffee Crates Now</li>
                            </ul>
                            <button className="bg-gray-800 text-white px-6 py-3 mt-4 hover:bg-gray-900">
                                START TASTING
                            </button>
                        </div>

                        {/* Right Image */}
                        <div className="md:w-1/2 py-8 relative">
                            <img
                                src="https://i.ibb.co/Hf12qL7r/2.jpg"
                                alt="coffee beans"
                                className="w-full h-full object-cover z-10 relative"
                            />
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="flex flex-col md:flex-row items-center justify-between h-full w-full overflow-hidden px-8 md:px-16">
                        <div className="md:w-1/2 text-center md:text-left py-12 space-y-6">
                            <h1 className="text-4xl md:text-6xl font-light text-gray-800 leading-tight">
                                Coffee Crate <br />
                                <span className="font-bold">Subscriptions</span>
                            </h1>
                            <p className="text-gray-700 text-lg">
                                New: Coffee Experiences All Over The World
                            </p>
                            <ul className="space-y-2 text-gray-800 text-base">
                                <li>☕ 100% Satisfaction Guarantee</li>
                                <li>☕ World-Class Selected Coffee's</li>
                                <li>☕ Get Your Monthly Coffee Crates Now</li>
                            </ul>
                            <button className="bg-gray-800 text-white px-6 py-3 mt-4 hover:bg-gray-900">
                                START TASTING
                            </button>
                        </div>

                        <div className="md:w-1/2 py-8 relative">
                            <img
                                src="https://i.ibb.co/V0kxN9Mn/3.png"
                                alt="coffee beans"
                                className="w-full h-full object-cover z-10 relative"
                            />
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="flex flex-col md:flex-row items-center justify-between h-full w-full overflow-hidden px-8 md:px-16">
                        <div className="md:w-1/2 text-center md:text-left py-12 space-y-6">
                            <h1 className="text-4xl md:text-6xl font-light text-gray-800 leading-tight">
                                Coffee Crate <br />
                                <span className="font-bold">Subscriptions</span>
                            </h1>
                            <p className="text-gray-700 text-lg">
                                New: Coffee Experiences All Over The World
                            </p>
                            <ul className="space-y-2 text-gray-800 text-base">
                                <li>☕ 100% Satisfaction Guarantee</li>
                                <li>☕ World-Class Selected Coffee's</li>
                                <li>☕ Get Your Monthly Coffee Crates Now</li>
                            </ul>
                            <button className="bg-gray-800 text-white px-6 py-3 mt-4 hover:bg-gray-900">
                                START TASTING
                            </button>
                        </div>

                        <div className="md:w-1/2 py-8 relative">
                            <img
                                src="https://i.ibb.co.com/pvQh3W7T/4.png"
                                alt="coffee beans"
                                className="w-full h-full object-cover z-10 relative"
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
