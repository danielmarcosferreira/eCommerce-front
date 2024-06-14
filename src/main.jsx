import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignIn from './pages/SignInPage/SignIn'
import NotFoundPage from './pages/NotFoundPage/NotFound'
import GlobalStyle from './styles/GlobalStyle'
import SignUp from './pages/SignUpPage/SignUp'
import AuthProvider from './context/AuthProvider'
import HomePage from './pages/HomePage/HomePage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/sign-up",
    element: <SignUp />
  },
  {
    path: "/home",
    element: <HomePage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <GlobalStyle />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
