import { useRef, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "aos/dist/aos.css";
// import Background from "../assets/background.jpg";
import BackgroundVideo from "../assets/videos/backgroundvideoss.mp4";
import ImagesOnes from "../assets/Images/ProjectOne.png";
import ImagesTwos from "../assets/Images/Detail.png";
import ImagesThrees from "../assets/Images/BokabedOne.png";
import ImagesFours from "../assets/Images/BokabedTwo.png";

function App() {
  const appRef = useRef<HTMLElement | null>(null);
  const windowHeightRef = useRef<number>(window.innerHeight);

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

  return (
    <Parallax
      pages={3}
      style={{
        backgroundColor: "white",
        height: `${window.innerHeight}px`,
      }}
    >
      <ParallaxLayer
        offset={0}
        speed={0}
        factor={3}
        style={{
          // backgroundImage: `linear-gradient( 90deg, rgba(0,0,0,1), rgba(0, 0, 0, 0) ), url(${Background})`,
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          // background: `linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))`,
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
            top: "10%", // Atur posisi vertikal video ke tengah
            left: 0,
            transform: "translateY(-50%)", // Geser video ke atas sebesar setengah tinggi video
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
          style={{ zIndex: 1 }} // Atur z-index menjadi 1 untuk teks
        >
          <div className="flex flex-col">
            <h1 className="text-white text-7xl">FIKRI AMANDA</h1>
            <div className="flex justify-center sm:justify-start md:justify-center space-x-3">
              <p className="text-white text-2xl">Front-End Engineer</p>
              <p className="text-white text-2xl">&</p>
              <p className="text-white text-2xl">Web Development</p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="flex justify-start mt-10 sm:mt-56 ml-4 sm:ml-48 font-mono text-4xl"
          style={{ zIndex: 1 }} // Atur z-index menjadi 1 untuk teks
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
        <div className="card card-side">
          <div
            data-aos="fade-up-right"
            data-aos-duration="2000"
            data-aos-easing="ease-in"
            data-aos-anchor-placement="center-center"
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
          </div>
        </div>
        <div className="card card-side">
          <div
            data-aos="fade-up-right"
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
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={2.5}>
        <p>Parallax 3</p>
      </ParallaxLayer>
    </Parallax>
  );
}

export default App;
