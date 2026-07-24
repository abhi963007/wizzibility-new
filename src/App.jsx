import React, { useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import useWebflow from './hooks/useWebflow';
import './css/framevo.webflow.shared.0a941df54.css';

// Route config defined OUTSIDE component so it's a stable reference (never recreated)
const ROUTE_CONFIG = {
  '/': {
    scriptSrcs: [
      '/js/webflow.schunk.121b0d7ff03e0f4a.js',
      '/js/webflow.497307bd.76564bc1fcd59a88.js?v=2',
    ],
    pageId: '6a2ede0dd01527a201b478d1',
  },
  '/service': {
    scriptSrcs: ['/js/webflow.4f562678.55c679493bfc0e5e.js'],
    pageId: '6a351d55090fb3eb90d329a2',
  },
  '/project': {
    scriptSrcs: [
      '/js/webflow.schunk.121b0d7ff03e0f4a.js',
      '/js/webflow.32f6d609.dac56d84c9b65f1f.js',
    ],
    pageId: '6a357649cd06ca23141922e7',
  },
  '/contact': {
    scriptSrcs: [
      '/js/webflow.schunk.dac51c455b7e76af.js',
      '/js/webflow.db32f186.e7991b4a17bf3d88.js',
    ],
    pageId: '6a33fbf0f79e980e7ba7fe73',
  },
};

function AppContent() {
  const location = useLocation();

  // Pick config for current route (stable object reference from ROUTE_CONFIG)
  const { scriptSrcs, pageId } = useMemo(() => {
    const path = location.pathname;
    if (path.startsWith('/project/')) {
      return {
        scriptSrcs: ['/js/webflow.36540518.b49536ec3bcaf7fa.js'],
        pageId: '6a2fb7239095a2e3365e18f9',
      };
    }
    if (path.startsWith('/service/')) {
      return {
        scriptSrcs: [
          '/js/webflow.schunk.dac51c455b7e76af.js',
          '/js/webflow.95f6ec0a.eda60b02784b47ba.js',
        ],
        pageId: '6a2fc5386bf7f404b664d7bf',
      };
    }
    return ROUTE_CONFIG[path] ?? ROUTE_CONFIG['/'];
  }, [location.pathname]);

  useWebflow(scriptSrcs, pageId);



  // Scroll to the top of the window on every page transition
  React.useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <div className="page-wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Services />} />
        <Route path="/service/:slug" element={<ServiceDetail />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

