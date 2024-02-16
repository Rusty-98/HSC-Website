import { GrInstagram } from "react-icons/gr";
import { IoCall } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css'

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

const Home = () => {
    const [isDesktopOrLaptop, setIsDesktopOrLaptop] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 768px)");
        setIsDesktopOrLaptop(mediaQuery.matches);

        const handler = (event) => setIsDesktopOrLaptop(event.matches);
        mediaQuery.addListener(handler);

        return () => mediaQuery.removeListener(handler);
    }, []);


    return (
        <div className='w-full pt-4 overflow-hidden'>
            {data.map((item, index) => (
                <div key={index} className={`back min-h-[100vh] pt-10 ${item.head}`}>
                    <h1 className="text-center text-[#F3DFC1] text-6xl md:text-9xl font-serif font-bold" data-aos="flip-right" data-aos-duration="1000">{item.head}</h1>
                    <div className="flex flex-col md:flex-row px-4 md:px-16 gap-4 h-[100vh] md:h-[70vh] mt-10 md:mt-20 relative z-10">
                        {isDesktopOrLaptop ? (
                            (index % 2 === 0 ? (
                                <>
                                    <div className="w-[90%] h-64 md:w-1/3 md:h-[85%] md:mt-auto md:mb-auto ml-auto mr-auto md:ml-0 md:mr-0 rounded-[70px] overflow-hidden border-2 border-[#ddbea8]">
                                        <img src={item.pic} alt="" className="object-fill w-full h-full hover:scale-[1.03] transition-all ease-linear" />
                                    </div>
                                    <div className="relative w-[95%] md:w-2/3">
                                        <p className="h-1/2 pt-10 md:pt-20 px-6 text-[#ddbea8] text-2xl md:text-3xl text-center" data-aos="fade-up-left">{item.desc}</p>
                                        <div className="absolute -bottom-24 md:bottom-10 h-16 text-6xl w-full flex justify-center gap-10">
                                            <GrInstagram className="cursor-pointer text-[#ddbea8] hover:scale-[1.05]" />
                                            <IoCall className="cursor-pointer text-[#ddbea8] hover:scale-[1.05]" />
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="relative w-[95%] md:w-2/3">
                                        <p className="h-1/2 pt-10 md:pt-20 px-6 text-[#ddbea8] text-2xl md:text-3xl text-center" data-aos="fade-up-right">{item.desc}</p>
                                        <div className="absolute -bottom-24 md:bottom-10 h-16 text-6xl w-full flex justify-center gap-10">
                                            <GrInstagram className="cursor-pointer text-[#ddbea8] hover:scale-[1.05]" />
                                            <IoCall className="cursor-pointer text-[#ddbea8] hover:scale-[1.05]" />
                                        </div>
                                    </div>
                                    <div className="w-[90%] h-64 md:w-1/3 md:h-[85%] md:mt-auto md:mb-auto ml-auto mr-auto md:ml-0 md:mr-0 rounded-[70px] overflow-hidden border-2 border-[#ddbea8]">
                                        <img src={item.pic} alt="" className="object-fill w-full h-full hover:scale-[1.03] transition-all ease-linear" />
                                    </div>
                                </>
                            ))
                        ) : (
                            <>
                                <div className="w-[90%] h-64 md:w-1/3 md:h-[85%] md:mt-auto md:mb-auto ml-auto mr-auto md:ml-0 md:mr-0 rounded-[70px] overflow-hidden border-2 border-[#ddbea8]">
                                    <img src={item.pic} alt="" className="object-fill w-full h-full hover:scale-[1.03] transition-all ease-linear" />
                                </div>
                                <div className="relative w-[95%] md:w-2/3">
                                    <p className="h-1/2 pt-10 md:pt-20 px-6 text-[#ddbea8] text-2xl md:text-3xl text-center" data-aos="fade-up">{item.desc}</p>
                                    <div className="absolute -bottom-24 md:bottom-10 h-16 text-6xl w-full flex justify-center gap-10">
                                        <GrInstagram className="cursor-pointer text-[#ddbea8] hover:scale-[1.05]" />
                                        <IoCall className="cursor-pointer text-[#ddbea8] hover:scale-[1.05]" />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )

}

export default Home

const data = [
    {
        head: "DC",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat cumque nemo temporibus reiciendis quaerat quae error soluta molestiae excepturi ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolorem? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, corporis?",
        pic: "https://plus.unsplash.com/premium_photo-1675448891119-bda089d46450?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
        bg: './DC.jpg'
    },
    {
        head: "GRUV",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat cumque nemo temporibus reiciendis,quaerat quae error soluta molestiae excepturi ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolorem? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, corporis?",
        pic: "https://plus.unsplash.com/premium_photo-1675448891094-0f3acc556fdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
        bg: './groove.jpg'
    },
    {
        head: "OCTAVE",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat cumque nemo temporibus reiciendis quaerat quae error soluta molestiae excepturi ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolorem? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, corporis?",
        pic: "https://plus.unsplash.com/premium_photo-1675448891119-bda089d46450?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
        bg: './oct.png'
    },
    {
        head: "KALAKASH",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat cumque nemo temporibus reiciendis,quaerat quae error soluta molestiae excepturi ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolorem? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, corporis?",
        pic: "https://plus.unsplash.com/premium_photo-1675448891094-0f3acc556fdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D"
    },
]
