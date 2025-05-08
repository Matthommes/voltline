"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white px-4">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold text-yellow-400 drop-shadow-2xl tracking-widest mb-4"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Voltline ⚡
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-gray-300 font-light mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Connecting you with quality.
        </motion.p>

        <motion.div
          className="flex justify-center items-center space-x-2 text-sm md:text-base text-gray-500 tracking-wide mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          {/* Spinning gear */}
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          >
            ⚙️
          </motion.span>

          <span>Launching soon</span>

          {/* Animated dots */}
          <div className="flex space-x-1">
            <motion.span
              className="text-yellow-400"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1, delay: 0 }}
            >
              .
            </motion.span>
            <motion.span
              className="text-yellow-400"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
            >
              .
            </motion.span>
            <motion.span
              className="text-yellow-400"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
            >
              .
            </motion.span>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
