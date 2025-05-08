import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  imageUrl: string;
  isPopular?: boolean;
}

const featuredProducts: Product[] = [
  {
    id: "p1",
    name: "Heavy Duty Power Cable",
    category: "Industrial",
    price: 12500,
    rating: 4.8,
    imageUrl: "/api/placeholder/400/400",
    isPopular: true,
  },
  {
    id: "p2",
    name: "Flexible Copper Wire",
    category: "Residential",
    price: 6800,
    rating: 4.6,
    imageUrl: "/api/placeholder/400/400",
  },
  {
    id: "p3",
    name: "XLPE Insulated Cable",
    category: "Industrial",
    price: 18500,
    rating: 4.9,
    imageUrl: "/api/placeholder/400/400",
    isPopular: true,
  },
  {
    id: "p4",
    name: "Fiber Optic Cable",
    category: "Telecommunications",
    price: 9200,
    rating: 4.7,
    imageUrl: "/api/placeholder/400/400",
  },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="group flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative">
        <Image
        width={200}
        height={200}
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover object-center"
        />
        {product.isPopular && (
          <span className="absolute top-2 right-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            Popular
          </span>
        )}
      </div>
      <div className="p-4 flex-grow">
        <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
          {product.category}
        </span>
        <h3 className="font-semibold text-gray-900 dark:text-white mt-1">
          {product.name}
        </h3>
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? "text-amber-500"
                    : "text-gray-300 dark:text-gray-600"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-1 text-xs text-gray-600 dark:text-gray-400">
              {product.rating}
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <p className="font-bold text-gray-900 dark:text-white">
            ₦{product.price.toLocaleString()}
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3 py-1 rounded transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Featured Products
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our most popular and high-quality electrical wire solutions
            for all your needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
          >
            View All Products
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
