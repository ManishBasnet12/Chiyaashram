"use client";

import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

export default function ExperianceSection() {
  const [playing, setPlaying] = useState(false);

  // Tell TypeScript this ref is an HTMLVideoElement
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <section className="w-full py-40 px-6 flex flex-col items-center justify-center bg-[#161210] text-white">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-2 text-center">
        Experience Chiyaashram
      </h2>

      <p className="text-lg md:text-2xl text-orange-300 italic mb-8 text-center">
        "Where every sip tells a story"
      </p>

      {/* Video container */}
      <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-lg">
        <video
          ref={videoRef}
          src="/mainvideo.mp4"
          className="w-full h-auto rounded-2xl"
          loop
          muted
        />

        {/* Play / Pause Button */}
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-2xl hover:bg-black/50 transition"
        >
          {playing ? (
            <Pause size={48} className="text-white" />
          ) : (
            <Play size={48} className="text-white" />
          )}
        </button>
      </div>
      <p className="text-orange-200 mt-6 text-center max-w-xl">
        Take a glimpse into the warm, cozy atmosphere of Chiyaashram
      </p>
    </section>
  );
}
