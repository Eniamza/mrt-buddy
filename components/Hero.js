import React, { useState } from "react";
import Link from "next/link";
import { BetaModal } from "./BetaModal";
import { motion } from "framer-motion";
import { GridPattern } from "./GridPattern";
import AndroidDownloadButton from "./AndroidDownloadButton";
import { Apple, Download } from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";

export const Hero = ({ handleDownloadClick, isAnimating }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
  <section className="relative pt-36 sm:pt-40 pb-16 sm:pb-20 overflow-hidden dark:bg-[#121212]">
    <GridPattern className="opacity-30" numSquares={150} maxOpacity={0.3} />
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
      <div className="max-w-3xl mx-auto mb-12 sm:mb-20">
        <motion.div
          initial={{ letterSpacing: "0em" }}
          animate={{ letterSpacing: "0.1em" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:bg-gradient-to-r dark:from-slate-100 dark:to-slate-200 mb-4 sm:mb-6">
            Your Smart MRT Companion
          </h1>
        </motion.div>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed dark:text-white">
          Manage your Dhaka MRT cards, check fares, and track your journeys with
          ease using NFC technology
        </p>
        <div className="flex flex-row items-center justify-center gap-4 mt-8">
            <AndroidDownloadButton
              onClick={() => {
                handleDownloadClick();
                setIsModalOpen(true);
                sendGAEvent({ event: "download", value: "android-beta" });
              }}
              isClicked={isAnimating}
            />
            <a href="https://apps.apple.com/app/mrt-buddy/id6737849667">
              <img
                src="/app_store.svg"
                alt="Download on the App Store"
                onClick={() => sendGAEvent({ event: "download", value: "ios" })}
                style={{ width: "150px", height: "auto" }}
              />
            </a>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
          Android version is currently in beta. You can either download the APK file directly or sign up for the Play Store Beta to receive automatic updates.
          <br />Google may approve our app end of this month.
        </p>
      </div>
    </div>
    <BetaModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
  </section>
  );
};