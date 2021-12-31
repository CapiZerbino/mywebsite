import React from "react";
import Typewriter from "typewriter-effect";
import SocialIcon from "../UI/SocialIcon";

const HeroContent = {
  name: "NGHIA TIEU",
  job: ["Front-End Developer", "Designer"],
  description:
    "I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.",
};

function HeroSection() {
  return (
    <div className="w-full flex gap-10 md:flex-row flex-col-reverse md:justify-between md:items-start items-center my-14 py-10 border-b-2 border-black">
      <div className="md:w-2/3 w-full px-5 flex-col flex  ">
        <div className="flex-col flex gap-8 text-gray-400">
          <p className="text-xl tracking-wider">WELCOME TO MY WORLD</p>
          <h1 className="text-5xl font-bold tracking-wider text-white">
            Hi, I’m <span className="text-red-500">{HeroContent.name}</span>
          </h1>
          {/* <h2 className="text-5xl font-bold tracking-wider text-white"> a {HeroContent.job[0]}</h2> */}
          <div className="text-5xl font-bold tracking-wider text-white">
            <Typewriter
              options={{
                  loop: true
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(HeroContent.job[0])
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(HeroContent.job[1])
                  .pauseFor(1000)
                  .start();
              }}
            />
          </div>
          <p className="text-xl tracking-wider font-light">
            {HeroContent.description}{" "}
          </p>
        </div>
        <div className="w-full gap-5 flex md:flex-row flex-col justify-start md:items-center items-start my-10">
          <div className="flex flex-col gap-4 justify-start items-start">
            <span className="text-base text-gray-400 tracking-wider">
              FIND WITH ME
            </span>
            <div className="flex-row gap-5 flex justify-start md:items-center items-start md:mr-10">
              <SocialIcon type="facebook"></SocialIcon>
              <SocialIcon type="instagram"></SocialIcon>
              <SocialIcon type="linkedln"></SocialIcon>
            </div>
          </div>

          <div className="flex flex-col gap-4 justify-start items-start">
            <span className="text-base text-gray-400 tracking-wider">
              FIND WITH ME
            </span>
            <div className="flex-row gap-5 flex justify-start md:items-center items-start md:mr-10">
              <SocialIcon type="facebook"></SocialIcon>
              <SocialIcon type="instagram"></SocialIcon>
              <SocialIcon type="linkedln"></SocialIcon>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/3 w-full flex justify-center items-center">
        <div className="bg-[url('/src/assets/images/avatarNT.JPG')] bg-cover bg-center md:h-96 md:w-72 h-72 w-full rounded-sm ring-2 ring-offset-2 ring-offset-slate-400 ring-white"></div>
      </div>
    </div>
  );
}

export default HeroSection;
