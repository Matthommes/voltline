"use client";

import Link from "next/link";
import { ShoppingCartIcon} from "lucide-react";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-blue-600 dark:text-blue-400"
            >
              <span className="font-bold">VOLT</span>
              <span className="text-yellow-500">LINE</span>
            </Link>
          </div>

          <div>
            
            <Link href="/cart"><ShoppingCartIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" /></Link>
          </div>
        </div>
      </div>
    </header>
  );
}
