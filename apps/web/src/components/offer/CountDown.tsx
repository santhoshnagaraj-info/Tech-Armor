"use client";

import { useEffect, useState } from "react";

interface Props {
  expiresAt: string;
}

export default function Countdown({ expiresAt }: Props) {
  const calculate = () => {
    const difference =
      new Date(expiresAt).getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        h: "00",
        m: "00",
        s: "00",
      };
    }

    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      h: String(hours).padStart(2, "0"),
      m: String(minutes).padStart(2, "0"),
      s: String(seconds).padStart(2, "0"),
    };
  };

  const [time, setTime] = useState(calculate());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculate());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p className="text-3xl font-bold text-white">
        {time.h}:{time.m}:{time.s}
      </p>

      <span className="text-xs uppercase tracking-[3px] text-gray-400">
        Remaining Time
      </span>
    </div>
  );
}