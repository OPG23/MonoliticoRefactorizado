import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface HeaderProps {
  showBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showBackButton = false }) => {
  return (
    <header className="bg-gradient-to-r from-purple-900 to-purple-700 text-white">
      <div className="container mx-auto py-4 px-4 sm:px-6 flex items-center justify-between">
        {showBackButton ? (
          <Link 
            to="/" 
            className="flex items-center text-white hover:text-purple-200 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            <span>Volver</span>
          </Link>
        ) : (
          <div></div>
        )}

        <div className="text-center mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold">
            ArteCuida 2020
          </h1>
          <p className="text-sm md:text-base text-purple-200">El arte te cuida, cuidemos el arte</p>
        </div>

        <div className="invisible">
          {/* Placeholder para espaciado igual  */}
          <ArrowLeft size={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;