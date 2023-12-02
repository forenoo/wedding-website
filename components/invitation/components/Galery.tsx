import React, { useEffect, useRef } from "react";
import { tangerine } from "@/fonts/font";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

const Galery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section className="px-[8%] py-20 md:py-28">
      <motion.h1
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 0,
            },
          },
          hidden: {
            opacity: 0,
            y: 100,
            scale: 0.5,
          },
        }}
        className={`${tangerine.className} text-center text-[80px] text-primary-600 md:text-[90px]`}
      >
        Gallery
      </motion.h1>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-5">
        {[...Array(10)].map((_, i) => {
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
            <motion.div
              key={i}
              className="h-15 relative aspect-[3/4] overflow-hidden rounded-lg bg-blue-400"
              animate={controls}
              initial="hidden"
              variants={defaultAnimation}
            >
              <div
                style={{
                  position: "relative",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Image
                  src={`/${i + 1}.webp`}
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                  sizes="100%"
                  alt="gallery image"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Galery;
