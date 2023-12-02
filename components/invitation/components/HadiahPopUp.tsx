import { cormorant, inter, parisienne } from "@/fonts/font";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

interface HadiahPopUpProps {
  setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  showPopUp: boolean;
}

const HadiahPopUp = ({ showPopUp, setShowPopUp }: HadiahPopUpProps) => {
  const [username, setUsername] = useState("");
  const [tipeHadiah, setTipeHadiah] = useState("");
  const [nominal, setNominal] = useState("");
  const [pesan, setPesan] = useState("");

  return (
    <div
      className={`${cormorant.className} fixed inset-0 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50 md:px-[8%]`}
    >
      <div className="relative h-[auto] w-full max-w-[700px] bg-white p-[20px]">
        <button
          className="absolute right-0 top-0 mr-2 mt-2"
          onClick={() => setShowPopUp(!showPopUp)}
        >
          <RxCross2 className="h-[20px] w-[20px]" />
        </button>
        <h1 className={`text-center text-[40px] uppercase text-primary-900`}>
          Konfirmasi Hadiah
        </h1>
        <p className="mt-[6px] text-center text-[18px] font-semibold text-primary-800">
          Konfirmasi kiriman anda untuk memudahkan <br /> mempelai dalam
          melakukan pendataan
        </p>
        <form
          className={`${inter.className} mt-[1rem] flex flex-col gap-5 rounded-lg bg-white p-4 shadow-lg`}
        >
          <div>
            <label htmlFor="nama" className="block">
              Nama
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              required={true}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-lg border-2 border-primary-700 p-2 outline-none"
            />
          </div>
          <div>
            <label htmlFor="Nominal" className="block">
              Nominal
            </label>
            <input
              type="text"
              id="nominal"
              name="nominal"
              required={true}
              onChange={(e) => setNominal(e.target.value)}
              className="w-full rounded-lg border-2 border-primary-700 p-2 outline-none"
            />
          </div>
          <div>
            <label htmlFor="pesan">Pesan</label>
            <textarea
              name="pesan"
              id="pesan"
              required={false}
              className="min-h-[80px] w-full rounded-lg border-2 border-primary-700 p-2 outline-none"
              onChange={(e) => setPesan(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label htmlFor="konfirmasi">Konfirmasi</label>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="tipeHadiah"
                required={true}
                id="transferuang"
                className="h-4 w-4"
                onChange={() => setTipeHadiah("Transfer Uang")}
              />
              <label htmlFor="transferuang">Transfer Uang</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="tipeHadiah"
                id="kirimhadiah"
                required={true}
                className="h-4 w-4"
                onChange={() => setTipeHadiah("Kiriman Hadiah")}
              />
              <label htmlFor="kirimhadiah">Kirim Hadiah</label>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary-700 p-2 text-white outline-none"
              onClick={(e) => {
                console.log(username, tipeHadiah, nominal, pesan);
                let whatsappNumber = "6289523821061";
                let name = username;
                let nominalHadiah = nominal;
                let tipe = tipeHadiah;
                let pesanHadiah = pesan;

                let url = `https://wa.me/${whatsappNumber}?text=Halo,%20saya%20%2A${name}%2A%20ingin%20konfirmasi%20memberikan hadiah%20berupa%20${tipe}%20dengan%20nominal%20${nominalHadiah}%20dengan%20pesan%0a%2A_${
                  pesanHadiah || "Tidak ada pesan yang disampaikan"
                }._%2A%20Terima%20Kasih.`;

                window.open(url, "_blank")?.focus();
                e.preventDefault();
              }}
            >
              Kirim Konfirmasi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HadiahPopUp;
