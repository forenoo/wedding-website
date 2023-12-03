import { inter } from "@/fonts/font";
import Image from "next/image";
import React from "react";

const Watermark = () => {
  return (
    <section className="mt-[4rem] px-[8%] py-12">
      <div>
        <h1
          className={`${inter.className} text-center text-[16px] uppercase tracking-[0.7em]`}
        >
          create with love by
        </h1>
        <div>
          <Image
            src="/shensbagundanganlogo.png"
            width={350}
            height={350}
            className="mx-auto -mt-20"
            alt="logoshensbag"
          />
        </div>
      </div>
    </section>
  );
};

export default Watermark;
