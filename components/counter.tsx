"use client";

import { useEffect, useState, useRef } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  title: string;
  suffix?: string;
  prefix?: string;
}

export function Counter({
  end,
  duration = 2000,
  title,
  suffix = "",
  prefix = "",
}: CounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Reset counter when end value changes
    countRef.current = 0;
    setCount(0);

    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    // Calculate the increment per interval
    const totalFrames = 60;
    const incrementPerFrame = end / totalFrames;
    const intervalTime = duration / totalFrames;

    // Start the counter
    timerRef.current = setInterval(() => {
      if (countRef.current < end) {
        // Calculate the next value
        countRef.current = Math.min(countRef.current + incrementPerFrame, end);
        setCount(Math.floor(countRef.current));
      } else {
        // Ensure we end exactly at the target number
        setCount(end);
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
      }
    }, intervalTime);

    // Cleanup on unmount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [end, duration]);

  // Format the number with commas for thousands
  const formattedCount = count.toLocaleString();

  return (
    <div className="text-center p-6">
      <div className="text-4xl md:text-5xl font-bold text-[#0e3b39] mb-2 font-bricolage">
        {prefix}
        {formattedCount}
        {suffix}
      </div>
      <h3 className="text-lg text-gray-700 font-bricolage">{title}</h3>
    </div>
  );
}
