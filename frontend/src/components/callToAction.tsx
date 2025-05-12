import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
              }}
            ></div>
          </div>

          {/* Content */}
          <div className="relative px-6 py-16 sm:px-12 lg:px-16">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              {/* Left column - CTA text */}
              <div>
                <h2 className="text-3xl font-bold text-white sm:text-4xl font-montserrat">
                  <span className="block">Power Your Projects with</span>
                  <span className="block text-amber-400 dark:text-amber-300 mt-1">
                    Premium Quality Cables
                  </span>
                </h2>
                <p className="mt-4 text-lg text-blue-100 dark:text-blue-200 font-inter">
                  Don&apos;t compromise on quality and safety. Choose Voltline for
                  all your electrical wiring needs and experience the difference
                  that premium cables make.
                </p>

                {/* Key benefits */}
                <div className="mt-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-amber-400 dark:bg-amber-300 mr-3"></div>
                      </div>
                      <p className="text-white font-inter">
                        ISO certified quality standards
                      </p>
                    </li>
                    <li className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-amber-400 dark:bg-amber-300 mr-3"></div>
                      </div>
                      <p className="text-white font-inter">
                        36-state nationwide delivery
                      </p>
                    </li>
                    <li className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-amber-400 dark:bg-amber-300 mr-3"></div>
                      </div>
                      <p className="text-white font-inter">
                        30-day satisfaction guarantee
                      </p>
                    </li>
                  </ul>
                </div>

                {/* Primary CTA button */}
                <div className="mt-8">
                  <Link
                    href="/products"
                    className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md bg-amber-500 dark:bg-amber-600 text-white hover:bg-amber-600 dark:hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl font-montserrat"
                  >
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>

              {/* Right column - CTA card */}
              <div className="mt-10 lg:mt-0">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
                  <div className="px-6 py-8">
                    <div className="text-center">
                      <span className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                        <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-ping absolute"></span>
                        <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 relative"></span>
                      </span>
                      <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white font-montserrat">
                        Special Offer
                      </h3>
                      <p className="mt-1 text-3xl font-bold text-blue-600 dark:text-blue-500 font-montserrat">
                        15% OFF
                      </p>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 font-inter">
                        On your first bulk order
                      </p>
                    </div>

                    <div className="mt-6">
                      <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                        <p className="text-center text-gray-700 dark:text-gray-300 font-inter">
                          Use promo code at checkout:
                        </p>
                        <div className="mt-2 bg-gray-100 dark:bg-gray-700 rounded-md px-4 py-3 text-center">
                          <p className="text-lg font-bold text-blue-600 dark:text-blue-500 tracking-wide font-montserrat">
                            VOLTFIRST15
                          </p>
                        </div>
                      </div>

                      <Link
                        href="/products"
                        className="mt-6 block w-full rounded-md bg-blue-600 dark:bg-blue-700 py-3 text-center font-medium text-white hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-300 font-montserrat"
                      >
                        Claim Offer
                      </Link>

                      <p className="mt-4 text-xs text-center text-gray-500 dark:text-gray-400 font-inter">
                        *Limited time offer. Terms and conditions apply.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white font-montserrat">
            Need expert advice on choosing the right cables?
          </h3>
          <p className="mt-2 text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-inter">
            Our technical specialists are available to assist you with product
            selection, technical specifications, and custom solutions.
          </p>
          <div className="mt-5">
            <a
              href="/contact"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-300 font-montserrat"
            >
              Contact our experts
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
