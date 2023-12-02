"use client";

import React from "react";
import { cormorant, tangerine } from "@/fonts/font";
import Text from "./Text";
import { motion } from "framer-motion";
import Image from "next/image";

interface GreetingTextProps {
  isHidden: boolean;
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function GreetingText({
  isHidden,
  setIsHidden,
}: GreetingTextProps) {
  let guest;
  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search);
    guest = urlParams.get("to");
  }

  return (
    <div
      className={`${cormorant.className} }} absolute left-1/2 top-1/2 flex w-[90%] max-w-[800px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-[30px] rounded-[20px] bg-white bg-opacity-80 px-[50px] py-[30px] leading-tight
      backdrop-blur-sm`}
    >
      <h1
        className={`${tangerine.className} text-[36px] text-primary-950 sm:text-[42px]`}
      >
        Wedding Invitation
      </h1>
      <motion.div
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          width={200}
          height={200}
          alt="kembang"
          src="/kembang.png"
          className="sm:w-[300px]"
        />
      </motion.div>
      <Text className="text-center text-[40px] italic leading-none text-primary-800">
        Shendy & Oky
      </Text>
      <div className="flex flex-col">
        <h1 className="text-center text-[24px] italic text-primary-950">
          dear
        </h1>
        <motion.p
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center text-[28px] text-primary-800"
        >
          {guest || "Bapak/Ibu/Saudara/i"}
        </motion.p>
        <button
          onClick={() => setIsHidden(!isHidden)}
          className="mt-[10px] rounded-[6px] border border-primary-800 px-[20px] py-[5px] font-bold text-primary-950"
        >
          OPEN INVITATION
        </button>
      </div>
    </div>
  );
}
