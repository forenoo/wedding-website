import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cormorant, parisienne } from "@/fonts/font";
import Image from "next/image";

const ArRum = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  const defaultAnimation = {
    visible: {
      opacity: 1,
      scale: 1,
    },
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
  };

  console.log(isInView);
  return (
    <section className="px-[8%] py-20 md:py-28">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-[30px] rounded-[10px] bg-gray-50 px-[30px] py-[30px] shadow-xl md:flex-row">
        <motion.div
          ref={ref}
          variants={defaultAnimation}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 1, delay: 0 }}
        >
          <Image
            src="/peacock.png"
            alt="pikok"
            className="max-w-[300px]"
            width={300}
            height={300}
          />
        </motion.div>
        <div className="flex flex-col gap-[20px] md:gap-[30px]">
          <motion.p
            ref={ref}
            variants={defaultAnimation}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, delay: 0.5 }}
            className={`${cormorant.className} text-center text-[16px] md:text-[20px]`}
          >
            Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang. Sungguh, pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
          </motion.p>
          <motion.h1
            ref={ref}
            variants={defaultAnimation}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, delay: 0.5 }}
            className={`${parisienne.className} text-center text-[32px] xl:text-[50px]`}
          >
            Ar-Rum Ayat 21
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default ArRum;
