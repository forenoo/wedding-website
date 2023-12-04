import Image from "next/image";
import React, { useState } from "react";
import { cormorant, parisienne } from "@/fonts/font";
import AddComment from "./AddComment";
import ListComment from "./ListComment";

const Comment = () => {
  const [refresh, setRefresh] = useState(false);

  return (
    <section className="px-[8%] py-20 md:py-28">
      <div className="mb-[3rem] text-center">
        <Image
          src="/commenthead.png"
          className="mx-auto mb-[2rem]"
          width={400}
          height={400}
          alt="header"
        />
        <h1 className={`${parisienne.className} text-[3rem]`}>
          Wedding Message
        </h1>
        <p className={`${cormorant.className} text-[1rem] md:text-[1.5rem]`}>
          Kirimkan Doa & Pesan Kepada kedua Mempelai
        </p>
      </div>
      <div className="relative w-full bg-[url('/bgcomment.jpg')] px-[5%] py-[4%]">
        <AddComment refresh={refresh} setRefresh={setRefresh} />
        <ListComment refresh={refresh} />
      </div>
    </section>
  );
};

export default Comment;
