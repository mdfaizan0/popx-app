import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { lazy } from 'react'

const Landing = lazy(() => import("./pages/Landing.jsx"))
const Signin = lazy(() => import("./pages/Signin.jsx"))
const CreateAccount = lazy(() => import("./pages/CreateAccount.jsx"))
const ACSetting = lazy(() => import("./pages/ACSetting.jsx"))

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/create", element: <CreateAccount /> },
      { path: "/sign-in", element: <Signin /> },
      { path: "/setting", element: <ACSetting /> }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)