import React from "react";

const Hero = () => {
    return(
        <section className="w-full flex items-start justify-center relative -z-10">
            <div className="w-full h-full relative bg-amber-500">
                <img src="./image/pexels-fotios-photos-1089570.jpg" className="w-full max-h-[500px] object-cover" alt="" />
                <div class="absolute inset-0 bg-black/40"></div>
                <div class="absolute inset-0 flex flex-col items-center justify-center px-2 pt-0">
                    <span className="text-xl font-bold hidden md:block">More Than Coffee,</span>
                    <h1 className="font-bold text-2xl md:text-4xl text-center">Brewed to Perfection.</h1>
                    <span className="text-sm md:text-md">Awaken Your Senses, One Sip at a Time.</span>
                </div>
            </div>
        </section>
    )
}

export default Hero;