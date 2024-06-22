import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="bg-white min-h-screen text-black w-full ">
      <div className="text-center w-full mx-auto pt-20 mb-16">
        <h1 className="text-black text-4xl font-bold">
          AI Heart Attack Predictor
        </h1>
      </div>
      <div className="mx-auto w-full flex justify-center items-center gap-8 ">
        <Link
          href={"/predict"}
          className="flex flex-col items-center justify-center gap-4 shadow-lg p-8"
        >
          <Image
            src={"/home-page/predictor.jpeg"}
            alt="predictor"
            height={250}
            width={250}
            className="rounded-full h-56 w-56"
          />
          <h3 className="text-black text-2xl font-bold hover:text-blue-600 ">
            Predict Now
          </h3>
        </Link>
        <Link
          href={"/patients"}
          className="flex flex-col items-center justify-center gap-4 shadow-lg p-8"
        >
          <Image
            src={"/home-page/patients.jpeg"}
            alt="predictor"
            height={250}
            width={250}
            className="rounded-full h-56 w-56"
          />
          <h3 className="text-black text-2xl font-bold hover:text-blue-600 ">
            Predict Now
          </h3>
        </Link>
        <Link
          href={"/guidlines"}
          className="flex flex-col items-center justify-center gap-4 shadow-lg p-8"
        >
          <Image
            src={"/home-page/guidlines.jpeg"}
            alt="predictor"
            height={250}
            width={250}
            className="rounded-full h-56 w-56"
          />
          <h3 className="text-black text-2xl font-bold hover:text-blue-600 ">
            Guide lines
          </h3>
        </Link>
      </div>
    </div>
  );
}
