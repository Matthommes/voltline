"use client";
import { useEffect, useState } from "react";
import { Loader, Plug, Cable, CircuitBoard } from "lucide-react";

export default function Loading() {
  //   const [isVisible, setIsVisible] = useState(true);

  //   useEffect(() => {
  //     // For demo purposes - toggle visibility
  //     const timer = setTimeout(() => {
  //       setIsVisible(false);
  //     }, 3000);

  //     return () => clearTimeout(timer);
  //   }, []);

  //   if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
      <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
        <div className="relative">
          <Loader size={36} className="animate-spin text-blue-600" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Cable size={18} className="text-amber-500" />
          </div>
        </div>
        {/* <p className="text-sm font-medium text-gray-700 mt-2">Loading...</p> */}
      </div>
    </div>
  );
}

export function LoadingScreen() {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [loadingProgress]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Container */}
      <div className="flex flex-col items-center justify-center w-full max-w-md p-8 rounded-lg shadow-lg bg-white">
        {/* Logo Section */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-800">
            <Cable size={32} className="text-amber-500" />
          </div>
          <h1 className="ml-4 text-2xl font-bold text-gray-800">WireConnect</h1>
        </div>

        {/* Loading Animation */}
        <div className="w-full mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-semibold text-gray-700">
              {loadingProgress >= 100 ? "Ready" : "Loading..."}
            </div>
            <div className="text-sm font-medium text-blue-600">
              {loadingProgress}%
            </div>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-300 ease-out"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
        </div>

        {/* Animated Icons */}
        <div className="flex justify-around w-full my-4">
          <div
            className={`transition-opacity duration-300 ${
              loadingProgress > 25 ? "opacity-100" : "opacity-30"
            }`}
          >
            <Plug size={24} className="text-gray-800" />
          </div>
          <div
            className={`transition-opacity duration-300 ${
              loadingProgress > 50 ? "opacity-100" : "opacity-30"
            }`}
          >
            <Cable size={24} className="text-amber-500" />
          </div>
          <div
            className={`transition-opacity duration-300 ${
              loadingProgress > 75 ? "opacity-100" : "opacity-30"
            }`}
          >
            <CircuitBoard size={24} className="text-blue-600" />
          </div>
        </div>

        {/* Spinner */}
        <div className="mt-4 mb-2">
          <Loader size={36} className="animate-spin text-blue-600" />
        </div>

        {/* Loading Message */}
        <p className="text-sm text-gray-600 text-center mt-4">
          Connecting to premium wire solutions...
        </p>
      </div>
    </div>
  );
}
