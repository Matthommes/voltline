export default function AboutSection() {
    return (
      <section id="about" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image column */}
            <div className="lg:w-1/2 relative">
              <div className="relative z-10">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Voltline Facility" 
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-600 rounded-lg opacity-20 z-0"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-500 rounded-lg opacity-20 z-0"></div>
            </div>
            
            {/* Content column */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 dark:text-white">About Voltline Wire Company</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Established with a vision to transform Nigeria's electrical wire industry, Voltline has been at the 
                forefront of delivering high-quality cables to homes and businesses nationwide since 2010.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Our commitment to quality, safety, and customer satisfaction has made us one of the leading wire 
                suppliers in Nigeria, with a reputation for reliability and excellence.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">Quality Assurance</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      All our products are tested to meet international safety standards.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">Fast Delivery</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Nationwide delivery network ensuring prompt service to all 36 states.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">Expert Support</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Technical experts available to assist with product selection and installation.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">Competitive Pricing</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Best value for money without compromising on quality or safety.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } 