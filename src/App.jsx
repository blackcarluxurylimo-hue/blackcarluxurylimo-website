import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import CookieBanner from './components/CookieBanner.jsx';
import FloatingContactMenu from './components/FloatingContactMenu.jsx';
import MobileBottomBar from './components/MobileBottomBar.jsx';
import { routeDefinitions } from './routes.jsx';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-charcoal pt-[var(--navbar-height,76px)] pb-[calc(4.25rem+env(safe-area-inset-bottom))] text-white md:pb-0">
      <Navbar />
      <Routes>
        {routeDefinitions.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
      <FloatingContactMenu />
      <Footer />
      <MobileBottomBar />
      <CookieBanner />
    </div>
  );
}

export default App;
