import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { useSelector } from "react-redux";
import LandingLayout from "./layouts/LandingLayout";
import AuthLayout from "./layouts/AuthLayout/Index";
import { Home, About, Services, Contact, FAQ, SignUp, SignUpSuccess, Login, ForgetPassword, ResetPassword } from "./routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const { token } = useSelector((state) => state.auth);

  return (
    <RouterProvider
      router={createBrowserRouter([
        //Landing Routes
        {
          path: "/",
          element: <Navigate to="/home" />,
        },
        {
          path: "/",
          element: <LandingLayout />,
          children: [
            {
              path: "/home",
              element: <Home />,
            },
            {
              path: "/contact",
              element: <Contact />,
            },
            {
              path: "/about",
              element: <About />,
            },
            {
              path: "/faq",
              element: <FAQ />,
            },
            {
              path: "/services",
              element: <Services />,
            },
          ],
        },
        // Auth routes
        {
          path: "auth",
          element: token ? <Navigate to="/home" /> : <AuthLayout />,
          children: [
            {
              path: "sign-up",
              element: <SignUp />,
            },
            {
              path: "sign-up-success",
              element: <SignUpSuccess />,
            },
            {
              path: "login",
              element: <Login />,
            },
            {
              path: "forget-password",
              element: <ForgetPassword />,
            },
            {
              path: "reset-password",
              element: <ResetPassword />,
            },
          ],
        },

        {
          path: "*",
          element: <Navigate to="/" />,
        },
      ])}
    />
  );
}

export default App;
