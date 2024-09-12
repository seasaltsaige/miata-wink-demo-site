import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import Contact from './routes/Contact/Contact.tsx'


import './index.css'
import Navbar from './components/Navbar/Navbar.tsx'
import NotFound from './routes/404/404.tsx'
import Gallery from './routes/Gallery/Gallery.tsx'

const GlobalNavbar = ({ element }: { element: (() => JSX.Element) }) => {
  return <>
    <Navbar />
    {
      element()
    }
  </>
}

const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFound />
  },
  {
    path: '/',
    element: <GlobalNavbar element={App} />

  },
  {
    path: '/gallery',
    element: <GlobalNavbar element={Gallery} />
  },
  {
    path: '/contact',
    element: <GlobalNavbar element={Contact} />
  }
])



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
