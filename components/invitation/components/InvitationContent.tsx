import React from "react";
import { motion } from "framer-motion";
import { cormorant, tangerine } from "@/fonts/font";
import Image from "next/image";

const InvitationContent = () => {
  return (
    <div className={`${cormorant.className} z-[999]`}>
      <motion.h1
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 3.25, ease: "easeInOut" }}
        className="text-center text-3xl text-primary-500 xl:text-4xl"
      >
        The Wedding Of
      </motion.h1>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, delay: 3.5, ease: "easeInOut" }}
      >
        <Image
          src="/wedding-unsplash.webp"
          width={350}
          height={350}
          alt="photo"
          priority={true}
          className="my-5 w-[250px] max-w-[350px] rounded-full md:w-[350px]"
        />
      </motion.div>
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, delay: 3.75, ease: "easeInOut" }}
        className={`${tangerine.className} -mt-[30px] text-center text-[60px] font-bold text-primary-900`}
      >
        Shendy & Oky
      </motion.h1>
      <motion.p
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, delay: 3.75, ease: "easeInOut" }}
        className="-mt-[20px] text-center text-[30px] italic text-primary-800"
      >
        10.12.2023
      </motion.p>
    </div>
  );
};

export default InvitationContent;
