import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { useSelector } from "react-redux";
import LandingLayout from "./layouts/LandingLayout";
import AuthLayout from "./layouts/AuthLayout/Index";
import {
  Home,
  About,
  Services,
  Contact,
  FAQ,
  SignUp,
  SignUpSuccess,
  Login,
  ForgetPassword,
  ResetPassword,
  Dashboard,
  Profile,
  Funding,
  KYC,
  CryptoTransfer,
  InternalTransfer,
  InternationalTransfer,
  LocalTransfer,
  Loan,
  NFT,
  Stock,
  Settings,
  ManagePin,
  ManageProfile,
  Token,
  TransactionHistory,
  Receipt,
  VerifyEmail,
} from "./routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DashbordLayout from "./layouts/Dashboard";

function App() {
const token = localStorage.getItem("SC_access_token");

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
              path: "home",
              element: <Home />,
            },
            {
              path: "contact",
              element: <Contact />,
            },
            {
              path: "about",
              element: <About />,
            },
            {
              path: "faq",
              element: <FAQ />,
            },
            {
              path: "services",
              element: <Services />,
            },
            {
              path: "verify",
              element: <VerifyEmail />,
            },
          ],
        },
        // Auth routes
        {
          path: "auth",
          element:<AuthLayout />,
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
        //Dashboard routes
        {
          path: "dashboard",
          element: <DashbordLayout />,
          children: [
            {
              path: "",
              element: <Dashboard />,
            },
            {
              path: "profile",
              element: <Profile />,
            },
            {
              path: "funding",
              element: <Funding />,
            },
            {
              path: "internal-transfer",
              element: <InternalTransfer />,
            },
            {
              path: "international-transfer",
              element: <InternationalTransfer />,
            },
            {
              path: "local-transfer",
              element: <LocalTransfer />,
            },
            {
              path: "crypto-transfer",
              element: <CryptoTransfer />,
            },
            
            // {
            //   path: "NFT",
            //   element: <NFT />,
            // },
            // {
            //   path: "stock",
            //   element: <Stock />,
            // },
            {
              path: "transaction-history",
              element: <TransactionHistory />,
            },
            {
              path: "receipt/:id",
              element: <Receipt />,
            },
            {
              path: "loan",
              element: <Loan />,
            },
            {
              path: "token",
              element: <Token />,
            },
            {
              path: "KYC",
              element: <KYC />,
            },
            {
              path: "settings",
              element: <Settings />,
            },
            {
              path: "manage-profile",
              element: <ManageProfile />,
            },
            {
              path: "manage-pin",
              element: <ManagePin />,
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
