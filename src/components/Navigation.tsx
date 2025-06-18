
import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-primary">
            Cuisine & Astuce
          </Link>
          
          <div className="flex space-x-6">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Accueil
            </Link>
            <Link 
              to="/recettes" 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Recettes
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
