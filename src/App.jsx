import { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ExperiencePage from './pages/ExperiencePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ProjectDetailPage from './pages/ProjectDetailPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/experience', element: <ExperiencePage /> },
  { path: '/projects', element: <ProjectsPage /> },
  { path: '/projects/:slug', element: <ProjectDetailPage /> },
  { path: '*', element: <NotFoundPage /> },
])

/* Scroll to top on push/replace navigation while letting the browser restore
   scroll position when the user goes back/forward. */
function useScrollToTop() {
  useEffect(
    () =>
      router.subscribe((state) => {
        if (state.historyAction === 'PUSH' || state.historyAction === 'REPLACE') {
          window.scrollTo(0, 0)
        }
      }),
    [],
  )
}

export default function App() {
  useScrollToTop()
  return <RouterProvider router={router} />
}
