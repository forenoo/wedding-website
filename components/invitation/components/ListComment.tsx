import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdArrowLeft } from "react-icons/md";
import { cormorant, parisienne, inter } from "@/fonts/font";

interface ListCommentProps {
  refresh: boolean;
}

const getCommentList = async () => {
  try {
    const res = await fetch("https://www.shendyoky.me/api/comments", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to get comment list");
    }

    return res.json();
  } catch (error) {
    console.log("Error Loading comment list: " + error);
  }
};

const ListComment = ({ refresh }: ListCommentProps) => {
  const [comments, setComments] = useState<any>(null);

  useEffect(() => {
    const fetchComments = async () => {
      const commentList = await getCommentList();
      setComments(commentList.comments);
    };

    fetchComments();
  }, [refresh]);

  return (
    <>
      <div className="mt-[30px] flex max-h-[400px] flex-col gap-y-7 overflow-y-auto">
        {comments &&
          [...comments]?.reverse().map((item: any, index: any) => (
            <div key={index} className="w-full">
              <div className="flex items-center gap-[15px]">
                <Image
                  src={"/peacock.png"}
                  width={48}
                  priority={true}
                  height={48}
                  alt="profile"
                  className="h-[48px] w-[48px] rounded-full border-2 border-white bg-white"
                />
                <div className="relative w-full rounded-md bg-white px-3 py-3">
                  <MdArrowLeft className="absolute -left-[12px] top-1/2 h-[20px] w-[20px] -translate-y-1/2 text-white" />
                  <h1 className="text-[12px] font-semibold text-primary-700">
                    {item.user}
                  </h1>
                  <p className="text-[12px] font-medium text-black">
                    {item.comment}
                  </p>
                  <p className="text-gra mt-5 text-[10px] font-medium">
                    {new Date(item.createdAt).toLocaleDateString("en-GB")}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ListComment;
