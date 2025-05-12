import { ArrowRight } from "lucide-react";
import Link from "next/link";
// import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-gray-900 min-h-screen z-0">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Quality Electrical Wires for Every Nigerian Home & Business
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Premium cables delivered nationwide with reliability and excellence
            as our standard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="bg-yellow-500 dark:bg-yellow-300 hover:bg-yellow-600 cursor-pointer text-gray-900 px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center justify-center"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/quote"
              className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-gray-700 dark:text-blue-200 dark:hover:bg-gray-600 px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center justify-center"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Trust indicators */}
      <div className="bg-gray-50 dark:bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-gray-600 dark:text-gray-300">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">Certified Quality</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">Best Price Guarantee</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">Secure Transactions</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h2a1 1 0 00.9-.55l2-4A1 1 0 0015 4H3zm11 3a1 1 0 00-1 1v1h-2V8a1 1 0 00-1-1H6v1h3a1 1 0 011 1v3h-1v1h-1a1 1 0 00-1-1H6a1 1 0 00-1 1H4V5h11l-1 2z" />
              </svg>
              <span className="font-medium">Nationwide Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
