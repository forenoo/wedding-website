import React, { useState, useRef, useEffect } from "react";
import { tangerine, cormorant, parisienne, inter } from "@/fonts/font";
import { useInView, motion, useAnimation } from "framer-motion";

const defaultAnimation = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 3,
      delay: 0,
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
};

const Konfirmasihadir = () => {
  const [jumlah, setJumlah] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    const data = new FormData(e.target);
    const action = e.target.action;
    try {
      await fetch(action, {
        method: "POST",
        body: data,
      });
      alert("Konfirmasi Terkirim, Terima Kasih!");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="h-[1000px] w-full bg-[url('/rsvpbg.jpg')] bg-cover bg-center px-[8%] py-20 md:h-[800px] md:py-28">
      <motion.h1
        ref={ref}
        variants={defaultAnimation}
        animate={controls}
        initial="hidden"
        className={`${tangerine.className} text-center text-[50px] text-primary-700 md:text-[80px]`}
      >
        Konfirmasi Kehadiran
      </motion.h1>
      <motion.p
        ref={ref}
        variants={defaultAnimation}
        animate={controls}
        initial="hidden"
        className={`${cormorant.className} mx-auto max-w-[900px] text-center text-[20px] font-semibold text-primary-600`}
      >
        Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga apabila
        Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada
        kedua mempelai atas kehadiran serta doa restu, kami ucapkan terimakasih
      </motion.p>
      <motion.form
        ref={ref}
        variants={defaultAnimation}
        animate={controls}
        initial="hidden"
        onSubmit={handleSubmit}
        action="https://script.google.com/macros/s/AKfycbylY1O1SCIII9xZFVtUFExk2sPCP-gzu56Pim-7IaHH2JUFxNs9S82fryj7RE8CTWxU/exec"
        method="POST"
        id="my-form"
        className={`${cormorant.className} font-medium`}
      >
        <div className="mx-auto mt-10 grid max-w-[700px] grid-cols-1 gap-4">
          <div className="grid grid-cols-1 gap-[10px] xl:grid-cols-3">
            <div>
              <label htmlFor="nama" className="block">
                Nama
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                required={true}
                className="w-full rounded-md px-2 py-1 outline-primary-300"
              />
            </div>
            <div>
              <label htmlFor="jumlah" className="block">
                Jumlah Orang
              </label>
              <input
                type="number"
                id="jumlah"
                name="jumlah"
                min={1}
                max={2}
                value={jumlah}
                onChange={(e) => setJumlah(parseInt(e.target.value))}
                className={`${inter.className} w-full rounded-md px-2 py-1 outline-primary-300`}
              />
            </div>
            <div>
              <label htmlFor="konfirmasi" className="block">
                Konfirmasi
              </label>
              <select
                name="status"
                id="konfirmasi"
                className="w-full rounded-md px-2 py-1 outline-primary-300"
              >
                <option value="hadir">Hadir</option>
                <option value="tidak hadir">Tidak Hadir</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="pesan" className="block">
              Pesan
            </label>
            <textarea
              name="pesan"
              id="pesan"
              cols={30}
              rows={5}
              className="min-h-[150px] w-full rounded-md px-2 py-1 outline-primary-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="rounded-md bg-primary-700 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-60"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Loading..." : "Kirim"}
          </button>
        </div>
      </motion.form>
    </section>
  );
};

export default Konfirmasihadir;
