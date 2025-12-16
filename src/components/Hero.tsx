import React from "react";
import Image from "next/image";

import { WindowsButton, LinuxButton } from "./DownloadButtons";

const heroDetails = {
  heading: "Self-custody made easy",
  subheading: "Zeus is a seedless easy-to-use EVM wallet designed to make wallet management easier than never before",
  centerImageSrc: "/images/zeus-main.png",
};

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto">
          {heroDetails.heading}
        </h1>
        <p className="mt-4 text-foreground max-w-lg mx-auto">{heroDetails.subheading}</p>
        <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto">
          <WindowsButton dark />
          <LinuxButton dark />
        </div>
        <Image
          src={heroDetails.centerImageSrc}
          width={800}
          height={800}
          quality={100}
          sizes="(max-width: 768px) 100vw, 384px"
          priority={true}
          unoptimized={true}
          alt="Download Zeus Wallet"
          className="relative mt-12 md:mt-16 mx-auto z-10 rounded-2xl shadow-2xl border border-gray-200/50 transform hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
};

export default Hero;
