import AOS from "aos";
import { useRef, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "aos/dist/aos.css";
import BackgroundVideo from "../assets/videos/backgroundvideoss.mp4";
import ImagesOnes from "../assets/Images/ao6y7-3mqio.svg";
import ImagesTwos from "../assets/Images/afkvm-1ugfd.svg";
import ImagesThrees from "../assets/Images/a600b-1p3vo.svg";
import ImagesFours from "../assets/Images/a8uyq-gyprd.svg";

function App() {
  const appRef = useRef<HTMLElement | null>(null);
  const windowHeightRef = useRef<number>(window.innerHeight);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const handleResize: () => void = () => {
      windowHeightRef.current = window.innerHeight;
    };

    const handleScroll: (event: Event) => void = () => {
      const scrollTop =
        appRef.current && appRef.current.scrollTop !== undefined
          ? appRef.current.scrollTop
          : window.scrollY || window.pageYOffset;

      if (scrollTop !== 0) {
        windowHeightRef.current = window.innerHeight - scrollTop;
      } else {
        windowHeightRef.current = window.innerHeight;
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleEmailClick = () => {
    window.location.href = "mailto:fikriamd12@gmail.com";
  };

  

  return (
    <Parallax
      pages={4}
      style={{
        backgroundColor: "white",
        height: `${window.innerHeight}px`,
      }}
    >
      <ParallaxLayer
        offset={0}
        speed={1}
        factor={3}
        style={{
          width: "100%",
          height: "70%",
          position: "relative",
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "10%",
            left: 0,
            transform: "translateY(-50%)",
            zIndex: -1,
          }}
        >
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="flex justify-start mt-10 sm:mt-80 ml-4 sm:ml-48 font-mono"
          style={{ zIndex: 1 }}
        >
          <div className="flex flex-col">
            <h1 className="text-white text-7xl">FIKRI AMANDA</h1>
            <div className="flex justify-center sm:justify-start md:justify-start space-x-3">
              <p className="text-white text-2xl">Front-End Engineer</p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="flex justify-start mt-10 sm:mt-56 ml-4 sm:ml-48 font-mono text-4xl text-white"
          style={{ zIndex: 1 }}
        >
          <p>Scroll Down</p>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={0.5}
        style={{
          backgroundColor: "white",
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-easing="ease-in"
            className="flex justify-center"
          >
            <h1 className="text-5xl mt-24 font-mono font-bold text-black">
              MY EXPERTISE
            </h1>
          </div>
          <div className="flex flex-wrap justify-center mt-5">
            <div className="card bg-transparent border border-black shadow-lg w-full sm:w-11/12 md:w-5/12 lg:w-3/12 h-80 mx-2 my-4 p-0">
              <div className="card-body p-4">
                <h2 className="card-title text-2xl text-black mx-auto">
                  Front-End Engineer
                </h2>
                <h1 className="text-black text-2xl font-bold">.</h1>
                <div className="h-full border-l-2 border-black">
                  <p className="ml-7 mt-3 text-black text-lg font-mono">
                    I am passionate about being a frontend engineer with 7
                    months of experience in development using HTML, JavaScript,
                    CSS, React, and TypeScript.
                  </p>
                </div>
                <h1 className="text-black text-2xl font-bold">.</h1>
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1.6} speed={0.5}>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-easing="ease-in"
          className="flex justify-center mt-20"
        >
          <h1 className="my-5 text-5xl font-mono font-bold text-black">
            MY PROJECT
          </h1>
        </div>
        <div className="card card-side">
          <div
            data-aos="fade-down-right"
            data-aos-duration="2000"
            data-aos-easing="ease-in"
            className="card-body mx-auto px-4 max-w-7xl sm:px-6 lg:px-8"
          >
            <div className="flex flex-col lg:flex-row">
              <img
                src={ImagesTwos}
                className="w-full lg:w-4/12 object-contain z-0"
                alt="Image Twos"
              />
              <img
                src={ImagesOnes}
                className="w-full lg:w-3/12 object-contain z-10 mt-4 lg:mt-0 ml-0 lg:ml-4"
                alt="Image Ones"
              />
              <div className="flex-1 mt-4 lg:mt-0 ml-0 lg:ml-4 break-words">
                <p className="text-lg font-mono text-center lg:text-start text-black">
                  MUSICLAB is an online web-app that is used by users to find
                  music teachers. There are many genres and instruments
                  available in this web-app. Users (students) can book a music
                  class based on their choice, and mentors can create their own
                  music classes after filling out the necessary details. In
                  order to ensure that our app works well and meets the
                  requirements, we, as backend engineers, have built efficient
                  and tested systems.
                </p>
              </div>
            </div>
            <div className="my-6 flex justify-end flex-row space-x-7">
              <h4 className="text-black text-xl font-mono font-semibold">
                The Team
              </h4>
              <div className="text-black font-mono text-sm mt-1">
                <p>
                  Front-End <span className="ml-3">Fikri Amanda</span>
                </p>
                <p>
                  Front-End <span className="ml-3">M. Gumilang Tamasakti</span>
                </p>
              </div>
              <div className="text-black font-mono text-sm mt-1">
                <p>
                  BackEnd <span className="ml-3">Kharisma Januar</span>
                </p>
                <p>
                  BackEnd <span className="ml-3">Alif Muhammad Hafidz</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.5}>
        <div className="card card-side mt-14">
          <div
            data-aos="fade-down-right"
            data-aos-duration="2000"
            data-aos-easing="ease-in"
            className="card-body mx-auto px-4 max-w-7xl sm:px-6 lg:px-8"
          >
            <div className="flex flex-col lg:flex-row-reverse">
              <img
                src={ImagesFours}
                className="w-full lg:w-4/12 object-contain z-0 mt-4 lg:mt-0 ml-0 lg:ml-4"
                alt="Image Ones"
              />
              <img
                src={ImagesThrees}
                className="w-full lg:w-3/12 object-contain z-10 mt-4 lg:mt-0 ml-0 lg:ml-4"
                alt="Image Twos"
              />
              <div className="flex-1 mt-4 lg:mt-0 ml-0 lg:ml-4 break-words">
                <p className="text-lg font-mono text-center lg:text-start text-black">
                  BookaBed is a network of peer-to-peer online marketplaces and
                  home lodgings that allow users to list or rent properties for
                  short-term use. The rental price is set by the property owner.
                  BookaBed receives a portion of the booking fee from guests and
                  hosts.
                </p>
              </div>
            </div>
            <div className="my-6 flex flex-row space-x-7">
              <h4 className="text-black text-xl font-mono font-semibold">
                The Team
              </h4>
              <div className="text-black font-mono text-sm mt-1">
                <p>
                  Front-End <span className="ml-3">Fikri Amanda</span>
                </p>
                <p>
                  Front-End <span className="ml-3">Priscila Dinda</span>
                </p>
              </div>
              <div className="text-black font-mono text-sm mt-1">
                <p>
                  BackEnd <span className="ml-3">Eka Cahya Saputra</span>
                </p>
                <p>
                  BackEnd <span className="ml-3">Rischi Yuda</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={3}
        speed={0.5}
        style={{
          background: "black",
        }}
      >
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="flex flex-col mt-60 mx-auto text-center px-4 lg:px-0 lg:w-4/12"
        >
          <div className="space-y-9">
            <p className="text-white font-mono text-xl">What's Next?</p>
            <p className="text-white font-mono text-7xl">Get In Touch</p>
            <p className="text-white font-mono text-xl">
              Although I am currently looking for opportunities, my inbox is
              always open. Whether you have questions or just want to say hello,
              I'll try my best to get in touch!
            </p>
            <button
              className="btn border-white hover:border-teal-400 bg-transparent"
              onClick={handleEmailClick}
            >
              Say Hello
            </button>
          </div>
          <div className="mt-8 space-x-5">
            <a
              href="https://github.com/fianda12"
              target="_blank"
              rel="noopener noreferrer"
              className="btn border-white hover:border-teal-400 bg-transparent mr-4"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/fianda/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn border-white hover:border-teal-400 bg-transparent"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}

export default App;
