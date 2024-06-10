"use client";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";

const Home = () => {
 return(
  <div className="bg-custom-bg bg-no-repeat min-w-full bg-cover min-h-[700px] pl-32 pt-64">
    <h1 className="text-6xl w-96 font-bold">A Digital Heart Doctor</h1>
    <div className="mt-8">
      <Link className="text-white rounded-md hover:bg-blue-600 font-bold text-xl px-24 py-3 bg-blue-400" href={'/predict'}>Let's Start</Link>
    </div>
  </div>
 )
};

export default Home;
