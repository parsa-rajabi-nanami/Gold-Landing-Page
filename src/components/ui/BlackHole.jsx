import { motion } from "framer-motion";

export function BlackHole({ progress = 0, className = "w-64 h-64 sm:w-80 sm:h-80" }) {
  const currentProgress = Math.min(100, Math.max(0, Math.round(progress)));

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className={`relative flex items-center justify-center ${className}`}>
        <img
          src={`${import.meta.env.BASE_URL}black-hole.webp`}
          alt="Black Hole Loading"
          className="w-full h-full object-contain pointer-events-none select-none grayscale contrast-125 mix-blend-screen"
        />
      </div>

      <div className="flex flex-col items-center gap-2 w-48 sm:w-60">
        <span className="text-xs sm:text-sm font-mono font-medium text-neutral-300 tracking-widest">
          {currentProgress}%
        </span>

        <div className="w-full h-[2px] bg-neutral-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-neutral-500 via-white to-neutral-300 shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            initial={{ width: "0%" }}
            animate={{ width: `${currentProgress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
}