"use client";

import { useState } from "react";
import { Shield, Truck, Award, Package, Star, Clock } from "lucide-react";

export default function WhyChooseUs() {
  const [isExpanded, setIsExpanded] = useState<Record<number, boolean>>({});

  // interface Reason {
  //   id: number;
  //   icon: JSX.Element;
  //   title: string;
  //   description: string;
  // }

  interface IsExpandedState {
    [key: number]: boolean;
  }

  const toggleExpand = (id: number): void => {
    setIsExpanded((prev: IsExpandedState) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const reasons = [
    {
      id: 1,
      icon: <Shield className="text-blue-600 dark:text-blue-400" />,
      title: "Quality Guaranteed",
      description:
        "Our wires and cables meet international safety standards and undergo rigorous quality testing before delivery.",
    },
    {
      id: 2,
      icon: <Truck className="text-blue-600 dark:text-blue-400" />,
      title: "Nationwide Delivery",
      description:
        "We deliver quality electrical cables to all 36 states in Nigeria with reliable tracking and timely service.",
    },
    {
      id: 3,
      icon: <Award className="text-blue-600 dark:text-blue-400" />,
      title: "Industry Expertise",
      description:
        "With years of experience in the electrical industry, our team provides professional advice on the right products for your needs.",
    },
    {
      id: 4,
      icon: <Package className="text-blue-600 dark:text-blue-400" />,
      title: "Extensive Product Range",
      description:
        "From household wiring to industrial cables, we offer a comprehensive selection to meet diverse project requirements.",
    },
    {
      id: 5,
      icon: <Star className="text-blue-600 dark:text-blue-400" />,
      title: "Customer Satisfaction",
      description:
        "Join thousands of satisfied customers who trust Voltline for their electrical wiring needs across Nigeria.",
    },
    {
      id: 6,
      icon: <Clock className="text-blue-600 dark:text-blue-400" />,
      title: "Prompt Service",
      description:
        "Quick response times and efficient processing ensure your projects stay on schedule without delays.",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl mb-4 font-montserrat">
          Why Choose{" "}
          <span className="text-blue-600 dark:text-blue-400">Volt</span>
          <span className="text-amber-600 dark:text-amber-400">line</span>
        </h2>
        <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-inter">
          Nigeria&apos;s trusted provider of premium electrical wires and cables,
          delivering quality products nationwide with reliability and expertise.
        </p>
      </div>

      {/* Reasons Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason) => (
          <div
            key={reason.id}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-blue-600 dark:border-blue-400 h-full flex flex-col"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4 flex-shrink-0">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 font-montserrat">
                {reason.title}
              </h3>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mt-2 font-inter flex-grow">
              {isExpanded[reason.id]
                ? reason.description
                : `${reason.description.substring(0, 65)}${
                    reason.description.length > 65 ? "..." : ""
                  }`}
            </p>

            {reason.description.length > 65 && (
              <button
                onClick={() => toggleExpand(reason.id)}
                className="text-blue-600 dark:text-blue-400 font-medium mt-4 flex items-center hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300 text-sm"
              >
                {isExpanded[reason.id] ? "Read less" : "Read more"}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 max-w-7xl mx-auto text-center">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-4 font-montserrat">
            Ready to Experience the Voltline Difference?
          </h3>
          <p className="text-blue-100 dark:text-blue-200 mb-8 max-w-2xl mx-auto font-inter">
            Join thousands of satisfied customers across Nigeria who trust our
            quality electrical wiring solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white dark:bg-gray-200 text-blue-600 dark:text-blue-700 font-medium py-3 px-6 rounded-md hover:bg-blue-50 dark:hover:bg-gray-300 transition-colors duration-300 shadow-sm font-montserrat">
              Browse Products
            </button>
            <button className="bg-amber-600 dark:bg-amber-500 text-white font-medium py-3 px-6 rounded-md hover:bg-amber-700 dark:hover:bg-amber-600 transition-colors duration-300 shadow-sm font-montserrat">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="mt-16 max-w-7xl mx-auto">
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 font-montserrat">
                15+
              </p>
              <p className="text-gray-600 dark:text-gray-300 font-inter">
                Years Experience
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 font-montserrat">
                36
              </p>
              <p className="text-gray-600 dark:text-gray-300 font-inter">
                States Served
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 font-montserrat">
                10,000+
              </p>
              <p className="text-gray-600 dark:text-gray-300 font-inter">
                Happy Customers
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 font-montserrat">
                100%
              </p>
              <p className="text-gray-600 dark:text-gray-300 font-inter">
                Quality Assurance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
