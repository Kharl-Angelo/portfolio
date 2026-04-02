import { motion } from "motion/react";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black text-white z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col items-center gap-4">
        
        {/* Animated circle */}
        <motion.div
          className="w-12 h-12 border-4 border-white border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
        />

        {/* Animated text */}
        <motion.p
          className="text-sm tracking-widest"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          KO.
        </motion.p>
      </div>
    </motion.div>
  );
}