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

const GlobalNavbarFooter = ({ element }: { element: (() => JSX.Element) }) => {
  return <>
    <Navbar />
    {element()}
    <Footer />
  </>
}

const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFound />
  },
  {
    path: '/',
    element: <GlobalNavbarFooter element={Home} />

  },
  {
    path: '/gallery',
    element: <GlobalNavbarFooter element={Gallery} />
  },
  {
    path: '/contact',
    element: <GlobalNavbarFooter element={Contact} />
  },
  {
    path: '/info',
    element: <GlobalNavbarFooter element={LearnMore} />
  },
  {
    path: '/faq',
    element: <GlobalNavbarFooter element={FAQ} />
  },
  {
    path: '/terms',
    element: <GlobalNavbarFooter element={TermsOfUse} />
  }
])



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
