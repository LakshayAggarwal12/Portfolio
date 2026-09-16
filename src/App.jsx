import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppShell } from './components/portfolio-shell.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ExperiencePage from './pages/ExperiencePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ProjectDetailPage from './pages/ProjectDetailPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

/**
 * One layout route wraps every page in the app shell, so the header,
 * footer and the single scroll region persist across navigation. Pages
 * only describe their own content — scroll handling, page transitions
 * and active nav state all live in AppShell.
 */
const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/experience', element: <ExperiencePage /> },
      { path: '/projects', element: <ProjectsPage /> },
      { path: '/projects/:slug', element: <ProjectDetailPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
