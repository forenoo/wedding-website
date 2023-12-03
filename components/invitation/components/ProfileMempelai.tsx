import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cormorant, tangerine } from "@/fonts/font";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

const ProfileMempelai = () => {
  const headerRef = useRef(null);
  const shendyRef = useRef(null);
  const shendySubHeaderRef = useRef(null);
  const shendyButtonRef = useRef(null);
  const okyRef = useRef(null);
  const okySubHeaderRef = useRef(null);
  const okyButtonRef = useRef(null);

  const headerControls = useAnimation();
  const shendyControls = useAnimation();
  const shendySubHeaderControls = useAnimation();
  const shendyButtonControls = useAnimation();
  const okyControls = useAnimation();
  const okySubHeaderControls = useAnimation();
  const okyButtonControls = useAnimation();

  const headerInView = useInView(headerRef, { once: true });
  const shendyInView = useInView(shendyRef, { once: true });
  const shendySubHeaderView = useInView(shendySubHeaderRef, { once: true });
  const shendyButtonView = useInView(shendyButtonRef, { once: true });
  const okyInView = useInView(okyRef, { once: true });
  const okySubHeaderView = useInView(okySubHeaderRef, { once: true });
  const okyButtonView = useInView(okyButtonRef, { once: true });

  const headerAnimation = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
  };

  const subHeaderAnimation = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5,
        duration: 1.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
  };

  const profileAnimation = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
  };

  useEffect(() => {
    if (headerInView) {
      headerControls.start("visible");
    }
    if (shendyInView) {
      shendyControls.start("visible");
    }
    if (shendySubHeaderView) {
      shendySubHeaderControls.start("visible");
    }
    if (shendyButtonView) {
      shendyButtonControls.start("visible");
    }
    if (okyInView) {
      okyControls.start("visible");
    }
    if (okySubHeaderView) {
      okySubHeaderControls.start("visible");
    }
    if (okyButtonView) {
      okyButtonControls.start("visible");
    }
  }, [
    headerInView,
    shendyInView,
    shendySubHeaderView,
    shendyButtonView,
    okyInView,
    okySubHeaderView,
    okyButtonView,
    headerControls,
    shendyControls,
    shendySubHeaderControls,
    shendyButtonControls,
    okyControls,
    okySubHeaderControls,
    okyButtonControls,
  ]);

  return (
    <section className={`${cormorant.className} px-[8%] py-20 md:py-28`}>
      <motion.h1
        ref={headerRef}
        variants={headerAnimation}
        initial="hidden"
        animate={headerControls}
        className="mx-auto max-w-[500px] text-center text-[20px] font-semibold text-primary-800 md:text-[32px]"
      >
        By the grace of God, we are pleased to announce our wedding to you, our
        family and friends:
      </motion.h1>
      <div className="relative mt-[30px]">
        <motion.div
          ref={shendyRef}
          variants={profileAnimation}
          initial="hidden"
          animate={shendyControls}
          className="relative"
        >
          <Image
            src="/shendysendiri.webp"
            width={250}
            height={250}
            alt="profile-wanita"
            className="mx-auto w-[250px]"
          />
        </motion.div>
        <div className="my-[2rem] h-[2px] w-full bg-gray-200"></div>
        <div className="flex flex-col gap-[5px]">
          <motion.h1
            ref={shendySubHeaderRef}
            variants={subHeaderAnimation}
            initial="hidden"
            animate={shendySubHeaderControls}
            className={`${tangerine.className} text-center text-[82px] text-primary-700`}
          >
            Shendy
          </motion.h1>
          <motion.div
            ref={shendyButtonRef}
            variants={subHeaderAnimation}
            initial="hidden"
            animate={shendyButtonControls}
            className="flex flex-col gap-[5px]"
          >
            <h2 className="text-center text-[24px] text-gray-700">
              Shendy Swastika Sari, S.AB
            </h2>
            <p className="text-center text-[20px] italic text-gray-900">
              Putri Sulung Dari
            </p>
            <p className="text-center text-[18px] text-gray-900">
              Bapak Sunaryo & Ibu Eka Watik
            </p>
            <a
              className="mx-auto"
              href="https://www.instagram.com/shendyswastika/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.button
                ref={shendyButtonRef}
                variants={subHeaderAnimation}
                initial="hidden"
                animate={shendyButtonControls}
                className="mt-[5px] flex items-center gap-[10px] rounded-[5px] bg-primary-600 px-[10px] py-[2px] font-semibold text-white"
              >
                <FaInstagram /> shendyswastika
              </motion.button>
            </a>
          </motion.div>
        </div>
        <h1 className="text-center text-[100px] text-primary-500 opacity-25">
          &
        </h1>
        <div>
          <motion.div
            ref={okyRef}
            variants={profileAnimation}
            initial="hidden"
            animate={okyControls}
          >
            <Image
              src="/okysendiri.webp"
              width={250}
              height={250}
              alt="profile-wanita"
              className="mx-auto w-[250px]"
            />
          </motion.div>
          <div className="my-[2rem] h-[2px] w-full bg-gray-200"></div>
          <motion.div
            ref={okySubHeaderRef}
            variants={subHeaderAnimation}
            initial="hidden"
            animate={okySubHeaderControls}
            className="flex flex-col gap-[5px]"
          >
            <h1
              className={`${tangerine.className} text-center text-[82px] text-primary-700`}
            >
              Oky
            </h1>
            <h2 className="text-center text-[24px] text-gray-700">
              Oky Dwi Alamsyah, S.Pd
            </h2>
            <p className="text-center text-[20px] italic text-gray-900">
              Putra Bungsu Dari
            </p>
            <p className="text-center text-[18px] text-gray-900">
              Bapak Mariono & Ibu Sumini
            </p>
            <a
              className="mx-auto"
              href="https://www.instagram.com/okyalamsyah/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.button
                ref={okyButtonRef}
                variants={subHeaderAnimation}
                initial="hidden"
                animate={okyButtonControls}
                className="mt-[5px] flex items-center gap-[10px] rounded-[5px] bg-primary-600 px-[10px] py-[2px] font-semibold text-white"
              >
                <FaInstagram /> okyalamsyah
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfileMempelai;
