import Navbar from "./Navbar";
import { useState } from "react";

const Technology = () => {
  const technologyItems = [
    {
      name: "Launch vehicle",
      image: "src/assets/image-launch-vehicle-portrait.jpg",
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      name: "spaceport",
      image: "src/assets/image-spaceport-portrait.jpg",
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      name: "space capsule",
      image: "src/assets/image-space-capsule-portrait.jpg",
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ];

  const [activeItem, setActiveItem] = useState(0);
  const currentItem = technologyItems[activeItem];

  return (
    <div className="bg-[url('src/assets/background-technology-mobile.jpg')] h-full bg-cover bg-center">
      <Navbar />

      <div className="flex flex-col items-center text-center justify-center place-content-center p-4 text-white">
        <p className="font-condensed tracking-widest uppercase p-4 text-gray-400">
          03 <span className="text-white">Space launch 101</span>
        </p>
      </div>

      <div className="flex flex-col items-center text-center justify-center place-content-center mb-6 text-white">
        <img
          className="w-100 h-50"
          src={currentItem.image}
          alt={currentItem.name}
        />
      </div>

      <nav className="flex space-x-4 justify-center font-condensed mb-6 tracking-widest uppercase text-white">
        <ul className="flex space-x-4 ">
          <li>
            <a
              className={`hover:bg-white focus:bg-white items-center text-center  place-content-center  border border-gray-400 inline-block w-8 h-8 rounded-full font-serif ${activeItem === 0 ? "bg-white text-gray-900" : "text-white"}`}
              href="#"
              onClick={() => setActiveItem(0)}
            >
            1 
            </a>
          </li>
          <li>
            <a
              className={`hover:bg-white focus:bg-white items-center text-center  place-content-center  border border-gray-400 inline-block w-8 h-8 rounded-full font-serif ${activeItem === 1 ? "bg-white text-gray-900" : "text-white"}`}
              href="#"
              onClick={() => setActiveItem(1)}
            >
              2
            </a>
          </li>
          <li>
            <a
              className={`hover:bg-white focus:bg-white items-center text-center  place-content-center  border border-gray-400 inline-block w-8 h-8 rounded-full font-serif ${activeItem === 2 ? "bg-white text-gray-900" : "text-white"}`}
              href="#"
              onClick={() => setActiveItem(2)}
            >
              3
            </a>
          </li>
        </ul>
      </nav>

      <p className="font-serif  text-center items-center text-lg uppercase p-4 text-gray-400 ">
        The terminology...
        <br />
        <span className="inline-block text-white text-xl tracking-widest mt-3">
          {currentItem.name}
        </span>
      </p>

      <div className="font-condensed tracking-wide text-center p-4 text-gray-400">
        <p>{currentItem.description}</p>
      </div>
    </div>
  );
};

export default Technology;
