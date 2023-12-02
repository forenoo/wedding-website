import { cormorant, parisienne, tangerine } from "@/fonts/font";
import { Inter } from "next/font/google";
import React, { useEffect, useState, useRef, useMemo } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";

const inter = Inter({ subsets: ["latin"] });

const cards = [
  {
    title: "Akad Nikah",
    tanggal: "10/12/2023",
    description: `
      PUKUL: 10.00 WIB S/D SELESAI
      JL. SULFAT N0. 4A, PANDANWANGI, KOTA MALANG.
    `,
    location: "BERTEMPAT DI TERAS BUMBU SULFAT,",
    googleMapsUrl: "https://maps.app.goo.gl/owCkRYTKGUUxxzff8",
  },
  {
    title: "Resepsi Nikah",
    tanggal: "10/12/2023",
    description: `
      PUKUL: 13.00 S/D 16.00 WIB
      JL. SULFAT N0. 4A, PANDANWANGI, KOTA MALANG.
    `,
    location: "BERTEMPAT DI TERAS BUMBU SULFAT,",
    googleMapsUrl: "https://maps.app.goo.gl/owCkRYTKGUUxxzff8",
  },
];

interface SaveTheDateProps {
  targetDate: any;
}

const SaveThedate = ({ targetDate }: SaveTheDateProps) => {
  const calculateTimeLeft = () => {
    const currentDate = new Date();
    const targetDateTime = new Date(targetDate).getTime();
    const difference = targetDateTime - currentDate.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  const ref = useRef(null);
  const refDua = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInViewDua = useInView(refDua, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  useEffect(() => {
    if (isInViewDua) {
      controls.start("visible");
    }
  }, [controls, isInViewDua]);

  const ChildAnimation = useMemo(() => {
    return (delay: number) => ({
      hidden: {
        opacity: 0,
        scale: 0.5,
        y: 100,
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          delay: delay,
          duration: 1.5,
        },
      },
    });
  }, []);

  return (
    <section
      className={`${cormorant.className} savethedateBg relative min-h-screen w-full px-[8%] py-20 md:py-28`}
    >
      <div className="mx-auto my-auto grid max-w-[900px] grid-cols-2 gap-2 text-center font-bold text-primary-800 md:gap-7">
        <motion.div
          variants={ChildAnimation(0.2 * 0.2)}
          ref={ref}
          initial="hidden"
          animate={controls}
          className={`${inter.className} col-span-2 rounded-lg bg-primary-500 bg-opacity-50 px-[50px] py-[20px] text-center font-bold uppercase text-white`}
        >
          Save The Date
        </motion.div>
        {Object.entries(timeLeft).map(([key, value], i) => (
          <motion.div
            key={key}
            variants={ChildAnimation(i * 0.2)} // Add delay based on index
            ref={ref}
            initial="hidden"
            animate={controls}
            className="rounded-md bg-white p-4"
          >
            <h5
              className={`${inter.className} text-[24px] text-primary-500 md:text-[28px]`}
            >
              {value}
            </h5>
            <p className={`text-[18px] md:text-[20px]`}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {cards.map((card, index) => (
          <div className="mx-auto mt-[6rem]" key={index}>
            <motion.div
              variants={ChildAnimation(index * 0.5)}
              ref={refDua}
              initial="hidden"
              animate={controls}
              className="flex h-auto max-w-[400px] flex-col gap-[10px] rounded-t-full border border-primary-200 bg-[url('/savethedatecard.jpg')] bg-cover bg-center bg-no-repeat px-[50px] pb-[100px] pt-[250px] text-center shadow-lg"
            >
              <h3
                className={`${parisienne.className} text-[50px] text-primary-900`}
              >
                {card.title}
              </h3>
              <p className="text-2xl font-extrabold text-primary-600">
                {card.tanggal}
              </p>
              <p className="font-bold text-primary-700">{card.location}</p>
              <p
                className={`${inter.className} font-semibold text-primary-800`}
              >
                {card.description}
              </p>
              <a href={card.googleMapsUrl}>
                <button className="mx-auto flex items-center gap-[7px] rounded-[7px] bg-primary-700 px-[20px] py-[3px] font-bold text-white">
                  <FaLocationDot /> Google Map
                </button>
              </a>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SaveThedate;
