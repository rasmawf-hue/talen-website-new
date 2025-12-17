import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import Home from './views/Home';
import Products from './views/Products';
import Services from './views/Services';
import About from './views/About';
import Gallery from './views/Gallery';
import Contact from './views/Contact';
import Payment from './views/Payment';
import Terms from './views/Terms';

const App: React.FC = () => {
  // Simple custom Hash Router logic
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || '/';
      setCurrentPath(hash);
    };

    // Set initial path
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path: string) => {
    window.location.hash = path;
    window.scrollTo(0, 0);
  };

  const renderView = () => {
    switch (currentPath) {
      case '/':
        return <Home navigate={navigate} />;
      case '/products':
        return <Products />;
      case '/services':
        return <Services />;
      case '/about':
        return <About />;
      case '/gallery':
        return <Gallery />;
      case '/contact':
        return <Contact />;
      case '/payment':
        return <Payment />;
      case '/terms':
        return <Terms />;
      default:
        return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800 bg-white" dir="rtl">
      <Navigation currentPath={currentPath} navigate={navigate} />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
};

export default App;