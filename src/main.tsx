import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Error } from './component/error.tsx'
import { About } from './pages/about.tsx'
import { Meccool } from './pages/meccool.tsx'
import { Contacts } from './pages/contacts.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/meccool',
        element: <Meccool/>,
      },
      {
        path: '/contact',
        element: <Contacts/>,
      }
    ]
  },
])

createRoot(document.getElementById('root')!).render(
  <>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </>
)