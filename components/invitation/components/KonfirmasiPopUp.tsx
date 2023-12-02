import React, { useRef, useState } from "react";
import { cormorant, inter, sairaExtraCondensed } from "@/fonts/font";
import Image from "next/image";
import { FaRegCopy } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoQrCodeOutline } from "react-icons/io5";

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

interface PopUpWeddingProps {
  setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  showPopUp: boolean;
}

const PopupWedding = ({ setShowPopUp, showPopUp }: PopUpWeddingProps) => {
  const ref = useRef(null);
  const [isCopying, setIsCopying] = useState(
    Array(cardData.length).fill(false),
  );
  const [showQR, setShowQR] = useState(false);

  return (
    <>
      <div className="fixed inset-0 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50 md:px-[8%]">
        <div className="relative h-[auto] w-full max-w-[700px] bg-white p-[20px] text-center">
          <button
            className="absolute right-0 top-0 mr-2 mt-2"
            onClick={() => setShowPopUp(!showPopUp)}
          >
            <RxCross2 className="h-[20px] w-[20px]" />
          </button>
          <h1
            className={`${cormorant.className} text-[40px] uppercase text-primary-900`}
          >
            Konfirmasi Hadiah
          </h1>
          <p
            className={`${inter.style.fontStyle} mt-[6px] text-[14px] italic text-primary-800`}
          >
            Konfirmasi kiriman anda untuk memudahkan <br /> mempelai dalam
            melakukan pendataan
          </p>
        </div>
      </div>
    </>
  );
};

export default PopupWedding;
