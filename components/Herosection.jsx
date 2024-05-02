import Image from "next/image";
import React from "react";

const Herosection = () => {
  return (
    <section className="flex justify-center items-center  max-sm:flex-col gap-8 pt-10">
     
      <div className="flex w-[400px] flex-col gap-3 max-sm:w-[300px]" >
        <h1 className="text-4xl font-extrabold sm:text-2xl">Hey , This is Komal paul i build things for web </h1>
        <p className="text-2xl border-black sm:text-sm">
          I am web developer , focused on building (and occassionally designing
          ) exceptional digital expericience . Currently I’m focused on building
          accessible , human -centered products .
        </p>
        <div className=" flex gap-3">

        <button type="button" className="bg-black text-white p-2 rounded-md ">Check project</button>
        <button type="button" className="bg-black text-white p-2 rounded-md ">Check Resume</button>
        </div>

      </div>
      <div className="ml-5">
        <Image src={"images/mypicture.svg"} alt="my photgraph" width={324} height={528} />
      </div>
    </section>
  );
};

export default Herosection;
