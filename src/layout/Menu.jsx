import React from "react";

const Menu = () => {
    return (
        <div className="w-full min-h-[50vh] flex items-center justify-center py-12 px-6 bg-[#4a503b]">
            <div className="max-w-6xl w-full flex flex-col gap-10 items-center p-8">
                <h1 className="text-xl md:text-2xl font-bold text-[#F9D3A2] mb-8 text-center tracking-wide">
                    Our Exquisite Menu
                </h1>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
                    {/* Menu Item */}
                    {["./image/latte.jpg", "./image/1.png", "./image/americano.jpg", "./image/waffle.png", "./image/4.jpg", "./image/pancake.png", "./image/5.png", "./image/palm-sugar.png"].map((img, index) => (
                        <div key={index} className="relative w-full h-64 bg-gray-800 rounded-xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">
                            <img 
                                src={img} 
                                alt="Menu Item" 
                                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition duration-300" 
                            />
                            {/* <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/40 to-transparent">
                                <h2 className="text-lg font-semibold text-white">Menu Item {index + 1}</h2>
                                <p className="text-sm text-gray-300">$12.99</p>
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;
