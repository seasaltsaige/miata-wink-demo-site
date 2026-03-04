import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar/Navbar.tsx';
import NotFound from './routes/404/404.tsx';
import Contact from './routes/Contact/Contact.tsx';
import Gallery from './routes/Gallery/Gallery.tsx';
import LearnMore from './routes/LearnMore/LearnMore.tsx';
import Footer from './components/Footer/Footer.tsx';
import TermsOfUse from './routes/TermsOfUse/TermsOfUse.tsx';
import Home from './routes/Home/Home.tsx';
import InstallationGuide from './routes/Installation/InstallationGuide.tsx';
import { NavScreen } from './components/NavScreen/NavScreen.tsx';


const GlobalNavbarFooter = ({ element }: { element: React.ReactNode }) => {
  const [navOpen, setNavOpen] = useState(false);
  return <>
    <NavScreen navOpen={navOpen} setNavOpen={setNavOpen} />

    <Navbar setNavOpen={setNavOpen} />
    {element}
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
    element: <>
      <GlobalNavbarFooter
        element={<Home />}
      />
    </>

  },
  {
    path: '/gallery',
    element: <>
      <GlobalNavbarFooter
        element={<Gallery />}
      />
    </>
  },
  {
    path: '/contact',
    element: <>
      <GlobalNavbarFooter
        element={<Contact />}
      />
    </>
  },
  {
    path: '/info',
    element: <>
      <GlobalNavbarFooter
        element={<LearnMore />}
      />
    </>
  },
  {
    path: '/terms',
    element: <>
      <GlobalNavbarFooter
        element={<TermsOfUse />}
      />
    </>
  },
  {
    path: '/install',
    element: <>
      <GlobalNavbarFooter
        element={<InstallationGuide />}
      />
    </>
  }

])



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
