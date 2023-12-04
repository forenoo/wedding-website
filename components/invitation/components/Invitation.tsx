"use client";

import React, { useEffect, useState } from "react";
import { cormorant, tangerine } from "@/fonts/font";
import { motion } from "framer-motion";
import InvitationContent from "./InvitationContent";
import { FaPlay, FaPause } from "react-icons/fa";
import ArRum from "./ArRum";
import ProfileMempelai from "./ProfileMempelai";
import SaveThedate from "./SaveThedate";
import Galery from "./Galery";
import LoveStory from "./LoveStory";
import Konfirmasihadir from "./Konfirmasihadir";
import Hadiah from "./Hadiah";
import Image from "next/image";
import Watermark from "./Watermark";
import Comment from "./Comment";

type InvitationProps = {
  isHidden: boolean;
};

export default function Invitation({ isHidden }: InvitationProps) {
  const [isPlay, setIsPlay] = useState(true);

  useEffect(() => {
    const audio = new Audio("/bgmusic.mp3");
    if (audio) {
      audio.volume = 0.5;

      if (isHidden && isPlay) {
        audio.play();
        audio.loop = true;
      } else {
        audio.pause();
      }
    }

    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, [isHidden, isPlay]);

  const targetDate = "2023-12-10 10:00:00";

  return (
    <>
      {isHidden && (
        <main>
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 1.5 }}
            className="inviteBg flex min-h-screen w-full items-center justify-center"
          >
            <button
              onClick={() => setIsPlay(!isPlay)}
              className="fixed bottom-5 left-5 z-[999] rounded-full border-2 border-primary-600 bg-white bg-opacity-60 p-2"
            >
              {isPlay ? (
                <FaPlay className="h-auto w-[10px] text-primary-600 md:w-[20px]" />
              ) : (
                <FaPause className="h-auto w-[10px] text-primary-600 md:w-[20px]" />
              )}
            </button>
            <div className="overlay absolute z-[10] min-h-screen w-full"></div>
            <Image
              className="absolute bottom-0 right-0 w-[1000px]"
              alt="image"
              width={1000}
              height={1000}
              priority={true}
              src="/bg-peacock-transparent.png"
            />
            <Image
              className="absolute -left-2 -top-2 w-[100px] md:w-[200px]"
              alt="image"
              width={200}
              height={200}
              priority={true}
              src="/blueflower.png"
            />
            <InvitationContent />
          </motion.section>
          <ArRum />
          <ProfileMempelai />
          <Galery />
          <SaveThedate targetDate={targetDate} />
          <LoveStory />
          <Comment />
          <Konfirmasihadir />
          <Hadiah />
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 1.5 }}
            className="inviteBg flex min-h-screen w-full items-center justify-center"
          >
            <div className="overlay absolute z-[10] min-h-screen w-full"></div>
            <Image
              className="absolute bottom-0 right-0 w-[1000px]"
              alt="image"
              width={1000}
              height={1000}
              priority={true}
              src="/bg-peacock-transparent.png"
            />
            <Image
              className="absolute -left-2 -top-2 w-[100px] md:w-[200px]"
              alt="image"
              width={200}
              height={200}
              priority={true}
              src="/blueflower.png"
            />
            <div className={`${cormorant.className} z-[20]`}>
              <h1 className="text-center text-3xl text-primary-500 xl:text-4xl">
                The Wedding Of
              </h1>
              <Image
                src="/wedding-unsplash.webp"
                width={350}
                height={350}
                alt="photo"
                priority={true}
                className="my-5 w-[250px] max-w-[350px] rounded-full md:w-[350px]"
              />
              <h1
                className={`${tangerine.className} -mt-[30px] text-center text-[60px] font-bold text-primary-900`}
              >
                Shendy & Oky
              </h1>
              <p className="-mt-[20px] text-center text-[30px] font-medium italic text-primary-700">
                thank you
              </p>
            </div>
          </motion.section>
          <Watermark />
        </main>
      )}
    </>
  );
}
