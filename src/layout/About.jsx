import React, { useState } from 'react';

const About = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="relative w-full min-h-[50vh] flex flex-wrap items-center justify-center py-8 px-4 bg-white">
        {/* <svg className="absolute top-0 -mt-4 sm:-mt-10 lg:-mt-16" id="wave" style={{ transform: "rotate(0deg)", transition: "0.3s" }} viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop stopColor="white" offset="0%" />
                <stop stopColor="white" offset="100%" />
                </linearGradient>
            </defs>
            <path
                style={{ transform: "translate(0, 0px)", opacity: 1 }}
                fill="url(#sw-gradient-0)"
                d="M0,80L10,68.3C20,57,40,33,60,33.3C80,33,100,57,120,70C140,83,160,87,180,73.3C200,60,220,30,240,28.3C260,27,280,53,300,58.3C320,63,340,47,360,36.7C380,27,400,23,420,23.3C440,23,460,27,480,33.3C500,40,520,50,540,60C560,70,580,80,600,76.7C620,73,640,57,660,50C680,43,700,47,720,41.7C740,37,760,23,780,28.3C800,33,820,57,840,66.7C860,77,880,73,900,70C920,67,940,63,960,66.7C980,70,1000,80,1020,70C1040,60,1060,30,1080,26.7C1100,23,1120,47,1140,60C1160,73,1180,77,1200,70C1220,63,1240,47,1260,40C1280,33,1300,37,1320,31.7C1340,27,1360,13,1380,15C1400,17,1420,33,1430,41.7L1440,50L1440,100L1430,100C1420,100,1400,100,1380,100C1360,100,1340,100,1320,100C1300,100,1280,100,1260,100C1240,100,1220,100,1200,100C1180,100,1160,100,1140,100C1120,100,1100,100,1080,100C1060,100,1040,100,1020,100C1000,100,980,100,960,100C940,100,920,100,900,100C880,100,860,100,840,100C820,100,800,100,780,100C760,100,740,100,720,100C700,100,680,100,660,100C640,100,620,100,600,100C580,100,560,100,540,100C520,100,500,100,480,100C460,100,440,100,420,100C400,100,380,100,360,100C340,100,320,100,300,100C280,100,260,100,240,100C220,100,200,100,180,100C160,100,140,100,120,100C100,100,80,100,60,100C40,100,20,100,10,100L0,100Z"></path>
            </svg> */}

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
                    <p className="text-[#696C61] leading-relaxed mb-4 transition-all duration-300">
                        Our story began in 2010 with a simple idea: to bring the best coffee to everyone. 
                        We started in our hometown of Seattle, where we mastered the art of roasting beans 
                        and brewing the perfect cup.
                    </p>
                    
                    {/* Expandable Section */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                        <p className="text-[#696C61] leading-relaxed">
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