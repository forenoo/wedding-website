import React from "react";
import GreetingText from "./GreetingText";

interface GreetProps {
  isHidden: boolean;
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Greet({ isHidden, setIsHidden }: GreetProps) {
  return (
    <div className={`absolute greetBg min-h-screen w-full transition-all duration-[3s] ${isHidden ? `-translate-y-[1000px]` : null}`}>
      <GreetingText isHidden={isHidden} setIsHidden={setIsHidden} />
    </div>
  );
}
