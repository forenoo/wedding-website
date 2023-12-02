"use client";

import Greet from "@/components/greet";
import Invitation from "@/components/invitation";
import { useState } from "react";

export default function Home() {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <Greet isHidden={isHidden} setIsHidden={setIsHidden} />
      <Invitation isHidden={isHidden} />
    </>
  );
}
