import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import HadiahPopUp from "./HadiahPopUp";
import { cormorant, inter, tangerine, sairaExtraCondensed } from "@/fonts/font";
import Image from "next/image";
import { FaRegCopy } from "react-icons/fa";

const cardData = [
  {
    bankLogo: "/BRI_logo.png",
    accountNumber: "7096-01-009780-53-0",
    accountName: "SHENDY SWASTIKA SARI",
  },
  {
    bankLogo: "/MANDIRI_logo.png",
    accountNumber: "1440 0226 60747",
    accountName: "SHENDY SWASTIKA SARI",
  },
  // Add more card data here...
];

const Hadiah = () => {
  const [showPopUpHadiah, setShowPopUpHadiah] = useState(false);
  const ref = useRef(null);
  const [isCopying, setIsCopying] = useState(
    Array(cardData.length).fill(false),
  );
  return (
    <>
      <section className="px-[8%] py-20 md:py-28">
        <div className="flex flex-col justify-center gap-5">
          <h1
            className={`${tangerine.className} text-center text-[60px] text-primary-600 md:text-[90px]`}
          >
            Wedding Gift
          </h1>
          <p
            className={`${cormorant.className} text-center text-[18px] font-bold italic text-primary-800`}
          >
            Tanpa Mengurangi Rasa Hormat, Bagi Anda Yang Ingin Memberikan Tanda
            Kasih Untuk Mempelai, Dapat Melalui Virtual Account / E-Wallet
          </p>
        </div>
        {cardData.map((card, index) => (
          <div
            key={index}
            className="mx-auto mt-[3rem] h-auto w-[80%] rounded-xl p-3 shadow-lg xl:w-[60%]"
          >
            <Image
              src={card.bankLogo}
              width={100}
              height={100}
              alt="Bank Logo"
            />
            <div className="my-[16px] h-[1px] w-full bg-black bg-opacity-20"></div>
            <div className="flex flex-col justify-end">
              <button
                ref={ref}
                onClick={() => {
                  const newIsCopying = [...isCopying];
                  newIsCopying[index] = true;
                  setIsCopying(newIsCopying);
                  navigator.clipboard.writeText(card.accountNumber);
                  setTimeout(() => {
                    setIsCopying((prevIsCopying) => {
                      const updatedIsCopying = [...prevIsCopying];
                      updatedIsCopying[index] = false;
                      return updatedIsCopying;
                    });
                  }, 2000);
                }}
                className={`${sairaExtraCondensed.className} flex items-center gap-3 self-end text-[14px] tracking-[0.3em] text-primary-950 md:text-[20px]`}
              >
                {isCopying[index] ? (
                  "COPY SUCSESS"
                ) : (
                  <>
                    <FaRegCopy /> {card.accountNumber}
                  </>
                )}
              </button>
              <h6
                className={`${sairaExtraCondensed.className} mt-[5px] text-right text-[14px] tracking-[0.3em] md:text-[20px]`}
              >
                {card.accountName}
              </h6>
            </div>
          </div>
        ))}
        <p
          onClick={() => setShowPopUpHadiah(!showPopUpHadiah)}
          className={`${inter.style} mt-[5rem] cursor-pointer text-center text-[14px] font-semibold italic text-primary-950 underline`}
        >
          Klik disini untuk konfirmasi mengirim hadiah
        </p>

        {showPopUpHadiah && (
          <HadiahPopUp
            setShowPopUp={setShowPopUpHadiah}
            showPopUp={showPopUpHadiah}
          />
        )}
      </section>
    </>
  );
};

export default Hadiah;
