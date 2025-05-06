import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface MainLayoutProps {
  children: ReactNode;
  showBackButton?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, showBackButton = false }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header showBackButton={showBackButton} />
      
      <main className="flex-grow bg-gray-50">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;