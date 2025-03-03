import React, { useState } from 'react';

const About = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="w-full min-h-[50vh] flex flex-wrap items-center justify-center py-16 px-4 bg-gradient-to-br from-[#73766B] to-[#5A5D52]">
            <div className="max-w-5xl w-full flex flex-col md:flex-row gap-8 items-center p-8">
                {/* Image Section */}
                <div className="w-full md:w-1/3 flex justify-center">
                    <div className="relative group">
                        <img 
                            src="./image/do-nhu-Rz6gNjm03S4-unsplash.jpg" 
                            alt="About Us" 
                            className="w-72 h-72 object-cover rounded shadow-lg transform group-hover:scale-105 transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                </div>

                {/* Text Section */}
                <div className="w-full md:w-2/3 text-white">
                    <h1 className="text-xl md:text-2xl font-bold text-[#F9D3A2] mb-6 text-center md:text-left tracking-tight animate-fade-in">
                        About Our Journey
                    </h1>
                    <p className="text-gray-100 text-lg leading-relaxed mb-4 transition-all duration-300">
                        Our story began in 2010 with a simple idea: to bring the best coffee to everyone. 
                        We started in our hometown of Seattle, where we mastered the art of roasting beans 
                        and brewing the perfect cup.
                    </p>
                    
                    {/* Expandable Section */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                        <p className="text-gray-100 text-lg leading-relaxed">
                            Now, with over 100 locations worldwide, our passion for quality remains unwavering. 
                            We source our beans from sustainable farms and work with expert baristas to ensure 
                            every cup meets our high standards. Join us in our mission to make every day better 
                            with the perfect coffee experience.
                        </p>
                    </div>

                    {/* Interactive Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <button 
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="px-4 py-2 bg-[#F9D3A2] text-[#73766B] rounded-full font-medium
                            hover:bg-[#F9D3A2]/80 transition-all duration-300
                            focus:ring-4 focus:ring-[#F9D3A2]/50"
                        >
                            {isExpanded ? 'Show Less' : 'Learn More'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;