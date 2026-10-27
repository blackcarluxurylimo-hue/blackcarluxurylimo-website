
import { ROUTE_PATHS } from './routes-list.js';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Fleet from './pages/Fleet.jsx';
import ServiceAreas from './pages/ServiceAreas.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import Tesla from './pages/Tesla.jsx';
import Mercedes from './pages/Mercedes.jsx';
import Escalade from './pages/Escalade.jsx';
import Lincoln from './pages/Lincoln.jsx';
import Suburban from './pages/Suburban.jsx';
import Blog from './pages/Blog.jsx';
import BlogPost from './pages/BlogPost.jsx';
import { blogPosts } from './data/blog.js';

export const routeDefinitions = [
  ...ROUTE_PATHS.map((path) => {
    let element;
    switch (path) {
      case '/': element = <Home />; break;
      case '/services': element = <Services />; break;
      case '/fleet': element = <Fleet />; break;
      case '/service-areas': element = <ServiceAreas />; break;
      case '/about': element = <About />; break;
      case '/blog': element = <Blog />; break;
      case '/contact': element = <Contact />; break;
      case '/tesla': element = <Tesla />; break;
      case '/mercedes': element = <Mercedes />; break;
      case '/escalade': element = <Escalade />; break;
      case '/lincoln': element = <Lincoln />; break;
      case '/suburban': element = <Suburban />; break;
      default: element = null;
    }
    return { path, element, prerender: true };
  }),
  { path: '/blog/:slug', element: <BlogPost /> },
  { path: '*', element: <NotFound />, prerender: false },
];

export const prerenderRoutes = [
  ...ROUTE_PATHS,
  ...blogPosts.map((post) => `/blog/${post.slug}`),
];