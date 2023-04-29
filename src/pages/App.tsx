import React, { useEffect, useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import "aos/dist/aos.css";
import Background from "../assets/background.jpg";
import ImagesOnes from "../assets/Images/ProjectOne.png";
import ImagesTwos from "../assets/Images/Detail.png";
import ImagesThrees from "../assets/Images/BokabedOne.png";
import ImagesFours from "../assets/Images/BokabedTwo.png";

function App() {
  const parallax = useRef<IParallax>(null);

  return (
    <Parallax
      pages={3}
      ref={parallax}
      style={{
        backgroundColor: "white",
      }}
    >
      <ParallaxLayer
        offset={0}
        speed={0}
        factor={3}
        style={{
          backgroundImage: `linear-gradient( 90deg,
            rgba(0,0,0,1),
            rgba(0, 0, 0, 0)
          ), url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "40%",
        }}
      >
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="flex justify-start mt-80 ml-48 font-mono"
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
          className="flex justify-start mt-56 ml-48 font-mono text-4xl"
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
            className="card-body ml-36"
          >
            <div className="flex flex-row">
              <img
                src={ImagesTwos}
                className="w-4/12 object-contain z-0"
                alt="Image Twos"
              />
              <img
                src={ImagesOnes}
                className="w-3/12 object-contain z-10 ml-20 fixed top-60 left-80"
                alt="Image Ones"
              />
              <div className="flex-1 ml-96 break-words">
                <p className="text-lg font-mono text-end mt-32 text-black w-72">
                  MUSICLAB is an online web-app that used by user to find music
                  teacher. There are many genres and instruments that will be
                  available in this web-app. In this web-app User(Student) can
                  book a music class depend on their choice and the Mentor can
                  make their own music class after fill the credential. In order
                  to make sure our app works well and following the
                  requirements. We as a backend engineer build efficient and
                  tested our systems.
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
          className="card-body mr-28">
            <div className="flex flex-row-reverse">
              <img
                src={ImagesFours}
                className="w-4/12 object-contain z-0 ml-44 top-60 right-96"
                alt="Image Ones"
              />
              <img
                src={ImagesThrees}
                className="w-3/12 object-contain z-10 ml-12 fixed mt-48 mr-32"
                alt="Image Twos"
              />
              <div className="flex-1 ml-44 break-words">
                <p className="text-lg font-mono text-start mt-32 text-black w-72">
                  BookaBed is a network of peer-to-peer online marketplaces and
                  home lodgings that allow users to list or rent properties for
                  short-term use. The rental price is set by the property owner
                  . BookaBed receives a portion of the bookkeeping fee from
                  guests and hosts.
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
