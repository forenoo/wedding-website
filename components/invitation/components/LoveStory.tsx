import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaRegHeart } from "react-icons/fa";
import { tangerine, cormorant, parisienne } from "@/fonts/font";
import { MdArrowLeft } from "react-icons/md";

const cards = [
  {
    title: "First Meet",
    description:
      "Kami bertemu pertama kali di sebuah coffee shop dibantu berkenalan oleh teman kami.",
  },
  {
    title: "Relationship",
    description:
      "Setelah menjalani hubungan hampir 2 tahun, kita berkomitmen untuk masa depan hubungan kita.",
  },
  {
    title: "Engagement",
    description:
      "Pada tgl 01 Juni 2023 Oky memberanikan diri membawa keluarganya bersilaturahmi ke rumah saya, dan meminta saya untuk menikah dengannya.",
  },
];

const LoveStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section className="flex flex-col items-center justify-center gap-[50px] px-[8%] py-20 md:py-28">
      <div>
        <h1
          className={`${tangerine.className} text-center text-[80px] font-bold text-primary-700`}
        >
          Love Story
        </h1>
        <p
          className={`${cormorant.className} text-center text-[20px] font-semibold text-primary-600`}
        >
          Marriage is the golden ring in a chain whose beginning is a glance and
          whose ending is eternity
        </p>
      </div>
      <div className="flex items-center gap-[200px]">
        <div className="flex flex-col gap-4">
          {cards.map((card, i) => {
            const defaultAnimation = {
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 3,
                  delay: i * 0.2,
                },
              },
              hidden: {
                opacity: 0,
                scale: 0.5,
              },
            };

            return (
              <div
                key={i}
                className="flex items-center gap-[20px] xl:gap-[100px]"
              >
                <motion.div
                  key={i}
                  className="loveShadow flex min-h-[40px] min-w-[40px] justify-center rounded-full bg-primary-700 text-white"
                  ref={ref}
                  animate={controls}
                  initial="hidden"
                  variants={defaultAnimation}
                >
                  <FaRegHeart className="h-[20px] w-[20px] self-center" />
                </motion.div>
                <motion.div
                  className="relative max-w-[900px]"
                  ref={ref}
                  animate={controls}
                  initial="hidden"
                  variants={defaultAnimation}
                >
                  <MdArrowLeft className="absolute -left-[11px] top-1/2 h-[20px] w-[20px] -translate-y-1/2 text-primary-700" />
                  <div
                    style={{ flex: "1 0 auto" }}
                    key={i}
                    className="flex w-[200px] flex-col justify-center rounded-lg border-l-[2px] border-primary-700 bg-white p-4 shadow-lg sm:w-[450px] md:w-[650px] xl:w-[900px]"
                  >
                    <h1
                      className={`${parisienne.className} text-[32px] font-bold text-primary-600`}
                    >
                      {card.title}
                    </h1>
                    <p
                      className={`${cormorant.className} font-semibold text-primary-700`}
                    >
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LoveStory;
