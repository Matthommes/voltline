import Image from "next/image";

export default function ProductCategories() {
    const categories = [
      {
        id: 1,
        name: "Household Wiring",
        description: "Safe and reliable wiring for residential buildings",
        image: "/api/placeholder/400/300",
        color: "bg-blue-100 dark:bg-blue-900/30",
      },
      {
        id: 2,
        name: "Industrial Cables",
        description: "Heavy-duty cables for industrial applications",
        image: "/api/placeholder/400/300",
        color: "bg-yellow-100 dark:bg-yellow-900/30",
      },
      {
        id: 3,
        name: "Specialized Wiring",
        description: "Custom solutions for specific electrical needs",
        image: "/api/placeholder/400/300",
        color: "bg-green-100 dark:bg-green-900/30",
      },
      {
        id: 4,
        name: "Outdoor Cables",
        description: "Weather-resistant cables for external use",
        image: "/api/placeholder/400/300",
        color: "bg-red-100 dark:bg-red-900/30",
      },
    ];
  
    return (
      <section id="products" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Product Categories</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover our comprehensive range of high-quality electrical wires and cables suited for every application.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div 
                key={category.id} 
                className={`${category.color} rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group`}
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    width={400}
                    height={300} 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl dark:text-white font-semibold mb-2">{category.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{category.description}</p>
                  <a 
                    href="#" 
                    className="inline-flex items-center font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    View Products
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
  
          <div className="mt-12 text-center">
            <a 
              href="#" 
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              View All Products
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    );
  }