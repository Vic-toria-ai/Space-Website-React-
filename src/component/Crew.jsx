import React, { useState } from "react";
import Navbar from "./Navbar";

const Crew = () => {
  const crewMembers = [
    {
      name: "Douglas Hurley",
      role: "Commander",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      image: "/src/assets/image-douglas-hurley.webp",
    },

    {
      name: "Anousheh Ansari",
      role: "Flight Engineer",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      image: "/src/assets/image-anousheh-ansari.webp",
    },

    {
      name: "Victor Glover",
      role: "Pilot",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the international Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
      image: "/src/assets/image-victor-glover.webp",
    },
    {
      name: "Mark Shuttleworth",
      role: "Mission Specialist",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist. ",
      image: "/src/assets/image-mark-shuttleworth.webp",
    },
  ];
  const [members, setMembers] = useState(0);
  const currentMember = crewMembers[members];

  return (
    <div className="bg-[url('/src/assets/background-crew-mobile.jpg')] h-full bg-cover bg-center ">
      <Navbar />
      <div className="flex flex-col items-center text-center justify-center place-content-center p-4 text-white">
        <p className="font-condensed tracking-widest uppercase p-4 text-gray-400">
          02 <span className="text-white">Meet your crew</span>
        </p>
      </div>

      <div>
        <p className=" font-serif text-center items-center uppercase p-4 text-gray-400">
          {currentMember.role} <br />
          <span className="text-white">{currentMember.name}</span>
        </p>

        <p className="font-condensed text-center p-4 text-gray-400">
          {currentMember.bio}
        </p>
        <nav className="flex space-x-4 justify-center font-condensed mb-6 tracking-widest uppercase text-gray-400">
          <ul className="flex space-x-4 ">
            <li>
              <a
                href="#"
                className="hover:bg-white focus:bg-white inline-block w-2 h-2 bg-gray-500 rounded-full transition duration-300 ease-in-out"
                onClick={() => setMembers(0)}
              ></a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-white focus:bg-white inline-block w-2 h-2 bg-gray-500 rounded-full transition duration-300 ease-in-out"
                onClick={() => setMembers(1)}
              ></a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-white focus:bg-white inline-block w-2 h-2 bg-gray-500 rounded-full transition duration-300 ease-in-out"
                onClick={() => setMembers(2)}
              ></a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-white focus:bg-white inline-block w-2 h-2 bg-gray-500 rounded-full transition duration-300 ease-in-out"
                onClick={() => setMembers(3)}
              ></a>
            </li>
          </ul>
        </nav>
        <img
          src={currentMember.image}
          alt={currentMember.name}
          className="mx-auto w-50 h-50 p-4"
        />
      </div>
    </div>
  );
};

export default Crew;
