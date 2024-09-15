import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import Contact from './routes/Contact/Contact.tsx'


import './index.css'
import Navbar from './components/Navbar/Navbar.tsx'
import NotFound from './routes/404/404.tsx'
import Gallery from './routes/Gallery/Gallery.tsx'
import LearnMore from './routes/LearnMore/LearnMore.tsx'
import Footer from './components/Footer/Footer.tsx'

const GlobalNavbarFooter = ({ element }: { element: (() => JSX.Element) }) => {
  return <>
    <Navbar />
    {
      element()
    }
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
    element: <GlobalNavbarFooter element={App} />

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
  }
])



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
