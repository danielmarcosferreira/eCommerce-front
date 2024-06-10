import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignIn from './pages/SignInPage/SignIn'
import NotFoundPage from './pages/NotFoundPage/NotFound'
import GlobalStyle from './styles/GlobalStyle'
import SignUp from './pages/SignUpPage/SignUp'

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/sign-up",
    element: <SignUp />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
)
