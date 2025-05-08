"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  imageUrl: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Oluwaseun Adebayo",
    role: "Project Manager",
    company: "Lagos Construction Ltd",
    content:
      "Voltline Wire Company has been our trusted supplier for three consecutive major construction projects. Their industrial-grade cables consistently exceed quality expectations, and their nationwide delivery has never failed to meet our tight schedules.",
    imageUrl: "/api/placeholder/64/64",
    rating: 5,
  },
  {
    id: "t2",
    name: "Amina Ibrahim",
    role: "Electrical Engineer",
    company: "PowerSolutions Nigeria",
    content:
      "As an electrical engineer working on critical infrastructure projects, I cannot afford to compromise on quality. Voltline provides the reliability and technical specifications my projects demand, with excellent consultation services.",
    imageUrl: "/api/placeholder/64/64",
    rating: 5,
  },
  {
    id: "t3",
    name: "Chukwudi Okonkwo",
    role: "Operations Director",
    company: "Eastern Telecoms",
    content:
      "The fiber optic cables we sourced from Voltline significantly improved our network performance. Their technical team was exceptional in helping us select the right specifications for our expansion in the South-East region.",
    imageUrl: "/api/placeholder/64/64",
    rating: 4,
  },
  {
    id: "t4",
    name: "Fatima Bello",
    role: "Real Estate Developer",
    company: "Northstar Properties",
    content:
      "For our residential developments across Northern Nigeria, Voltline has been an invaluable partner. Their commitment to quality and safety gives us confidence in our electrical installations, and their warranty program provides added value to our clients.",
    imageUrl: "/api/placeholder/64/64",
    rating: 5,
  },
  {
    id: "t5",
    name: "Emmanuel Okafor",
    role: "Procurement Manager",
    company: "Delta Industrial Group",
    content:
      "Voltline &apos; s ability to deliver large orders with consistent quality to our facilities in the Niger Delta has been impressive. Their customer service is responsive, and they've been flexible with our evolving requirements.",
    imageUrl: "/api/placeholder/64/64",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hear from businesses across Nigeria who trust Voltline for their
            electrical wiring needs
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex flex-col items-center text-center">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonials[activeIndex].rating
                        ? "text-amber-500"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <svg
                className="text-blue-500 dark:text-blue-400 w-12 h-12 mb-6"
                fill="currentColor"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>

              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                &ldquo;{testimonials[activeIndex].content}&rdquo;
              </p>

              <div className="flex items-center">
                <Image
                width={200}
                height={200}
                  src={testimonials[activeIndex].imageUrl}
                  alt={testimonials[activeIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-blue-100 dark:border-blue-900"
                />
                <div className="ml-4 text-left">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    {testimonials[activeIndex].role},{" "}
                    {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute top-1/2 -translate-y-1/2 -left-4 bg-white dark:bg-gray-700 w-8 h-8 rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-5 h-5 text-gray-600 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute top-1/2 -translate-y-1/2 -right-4 bg-white dark:bg-gray-700 w-8 h-8 rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              aria-label="Next testimonial"
            >
              <svg
                className="w-5 h-5 text-gray-600 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  activeIndex === index
                    ? "bg-blue-600 dark:bg-blue-400"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < item.rating
                        ? "text-amber-500"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-4">
                &ldquo;{item.content}&rdquo;
              </p>

              <div className="flex items-center">
                <Image
                width={200}
                height={200}
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="ml-3">
                  <p className="font-medium text-gray-900 dark:text-white text-sm">
                    {item.name}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
