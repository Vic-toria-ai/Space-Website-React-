import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="bg-[url(/src/assets/background-home-mobile.jpg)] bg-no-repeat text-white bg-cover bg-fixed bg-center">
      <Navbar />
      <main className="flex flex-col items-center text-center p-4">
        <p className="font-condensed tracking-widest uppercase p-4 text-gray-400">
          So, you want to travel to
        </p>
        <h1 className="font-serif text-8xl uppercase  my-2">Space</h1>
        <div className="flex flex-col items-center">
          <p className="font-sans text-sm leading-6 mb-20 text-gray-400">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
          <p className="font-serif text-sm uppercase tracking-widest bg-white text-black p-4 mb-8 rounded-full w-40 h-40 flex justify-center place-items-center mx-auto">
            Explore
          </p>
        </div>
      </main>
    </div>
  );
};
export default Home;
