"use client";

import Image from "next/image";
import Button from "./Button";
import { scrollUp } from "@/utils/helper";

export default function Hero() {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book or rend a car - quickly and easily
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <Button
          title="Explore Cars"
          onClick={scrollUp}
          className="mt-10 text-white rounded-full bg-primary-blue"
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="Hero section car"
            fill
            className="object-contain"
          />
          <div className="hero__image-overlay"></div>
        </div>
      </div>
    </div>
  );
}
