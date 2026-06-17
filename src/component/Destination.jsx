import React, { useState } from "react";
import Navbar from "./Navbar";

const Destination = () => {
  const destinations = [
    {
      name: "Moon",
      image: "/src/assets/image-moon.webp",
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travelTime: "3 days",
    },
    {
      name: "Mars",
      image: "/src/assets/image-mars.webp",
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
      travelTime: "9 months",
    },
    {
      name: "Europa",
      image: "/src/assets/image-europa.webp",
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 mil. km",
      travelTime: "6 years",
    },
    {
      name: "Titan",
      image: "/src/assets/image-titan.webp",
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      travelTime: "7 years",
    },
  ];

  const [activeTab, setActiveTab] = useState(0); // to change the active tab and show the corresponding destination details.
  const currentDestination = destinations[activeTab];  // it targets the current destination based on the active tab index.

  let hoverClass =
    "underline underline-offset-[6px] decoration-white decoration-3";

  return (
    <div className="bg-[url(/src/assets/background-destination-mobile.jpg)] bg-no-repeat text-white bg-cover bg-fixed bg-center">
      <Navbar />
      <div className=" flex flex-col items-center text-center justify-center place-content-center p-4 ">
        <p className="font-condensed tracking-widest uppercase p-4 text-gray-400">
          01 Pick your destination.
        </p>
        <img
          className="mt-4 w-50 h-50 flex "
          src={currentDestination.image}
          alt="Destination"
        />
        <div>
          <nav className="flex space-x-4 justify-center mt-5 font-condensed tracking-widest uppercase text-gray-400">
            <ul className="flex space-x-4">
              <li>
                <a
                  className={`transition-all duration-300 ${activeTab === 0 ? hoverClass : ""}`}
                  href="#"
                  onClick={() => setActiveTab(0)} // destination[0] = Moon
                >
                  Moon
                </a>
              </li>
              <li>
                <a
                  className={`transition-all duration-300 ${activeTab === 1 ? hoverClass : ""}`}
                  href="#"
                  onClick={() => setActiveTab(1)} // destination[1] = Mars
                >
                  Mars
                </a>
              </li>
              <li>
                <a
                  className={`transition-all duration-300 ${activeTab === 2 ? hoverClass : ""}`}
                  href="#"
                  onClick={() => setActiveTab(2)} // destination[2] = Europa
                >
                  Europa
                </a>
              </li>
              <li>
                <a
                  className={`transition-all duration-300 ${activeTab === 3 ? hoverClass : ""}`}
                  href="#"
                  onClick={() => setActiveTab(3)}
                >
                  Titan
                </a>
              </li>
            </ul>
          </nav>
          <h1 className="font-serif text-6xl uppercase mt-8">
            {currentDestination.name}
          </h1>
          <p className="mt-4 text-gray-400 max-w-md mx-auto">
            {currentDestination.description}
          </p>
          <hr className="my-8 border-gray-600" />
          <p className="text-gray-400 text-sm uppercase tracking-widest">
            Avg. distance
          </p>
          <p className=" font-serif text-3xl uppercase mt-2">
            {currentDestination.distance}
          </p>
          <p className="text-gray-400 text-sm uppercase tracking-widest mt-4">
            Est. travel time
          </p>
          <p className=" font-serif text-3xl uppercase mt-2">
            {currentDestination.travelTime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Destination;
