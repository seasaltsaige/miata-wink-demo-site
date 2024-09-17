import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar/Navbar.tsx';
import NotFound from './routes/404/404.tsx';
import Contact from './routes/Contact/Contact.tsx';
import Gallery from './routes/Gallery/Gallery.tsx';
import LearnMore from './routes/LearnMore/LearnMore.tsx';
import Footer from './components/Footer/Footer.tsx';
import FAQ from './routes/FAQ/FAQ.tsx';
import TermsOfUse from './routes/TermsOfUse/TermsOfUse.tsx';
import Home from './routes/Home/Home.tsx';

const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFound />
  },
  {
    path: '/',
    element: <>
      <Navbar />
      <Home />
      <Footer />
    </>

  },
  {
    path: '/gallery',
    element: <>
      <Navbar />
      <Gallery />
      <Footer />
    </>
  },
  {
    path: '/contact',
    element: <>
      <Navbar />
      <Contact />
      <Footer />
    </>
  },
  {
    path: '/info',
    element: <>
      <Navbar />
      <LearnMore />
      <Footer />
    </>
  },
  {
    path: '/faq',
    element: <>
      <Navbar />
      <FAQ />
      <Footer />
    </>
  },
  {
    path: '/terms',
    element: <>
      <Navbar />
      <TermsOfUse />
      <Footer />
    </>
  },

])



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
