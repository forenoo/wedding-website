// AddComment.tsx
import React, { useState } from "react";
import { cormorant } from "@/fonts/font";
import { useRouter } from "next/navigation";

interface AddCommentProps {
  refresh: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddComment = ({ refresh, setRefresh }: AddCommentProps) => {
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    setIsSubmitting(true);
    e.preventDefault();

    try {
      const res = await fetch("https://www.shendyoky.me/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, comment }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit comment");
      }

      setTimeout(() => {
        setUser("");
        setComment("");
        setRefresh(!refresh);
        setIsSubmitting(false);
      }, 2000);
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  return (
    <form className={`${cormorant.className}`} onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center gap-5">
        <input
          type="text"
          id="nama"
          name="nama"
          placeholder="Nama"
          required={true}
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="w-full rounded-[5px] border border-gray-300 p-2 outline-none"
        />
        <textarea
          id="pesan"
          name="pesan"
          placeholder="Tuliskan Pesanmu"
          required={true}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="min-h-[120px] w-full rounded-[5px] border border-gray-300 p-2 outline-none"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full rounded-lg bg-primary-700 p-2 font-semibold text-white shadow-lg disabled:cursor-not-allowed disabled:bg-opacity-60`}
        >
          {isSubmitting ? "Mengirim..." : "Kirim"}
        </button>
      </div>
    </form>
  );
};

export default AddComment;
