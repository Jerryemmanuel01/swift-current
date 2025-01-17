import { lazy } from "react";

export const Home = lazy(()=>import("../pages/General/Home/Home"))
export const About = lazy(()=>import("../pages/General/About/About"))
export const Services = lazy(()=>import("../pages/General/Services/Services"))
export const FAQ = lazy(()=>import("../pages/General/FAQ/FAQ"))
export const Contact = lazy(()=>import("../pages/General/Contact/Contact"))

// Auth routes
export const SignUp = lazy(()=>import("../pages/Auth/SignUp/SignUp"))
export const SignUpSuccess = lazy(()=>import("../pages/Auth/SignUp/SignupSuccess"))
export const Login = lazy(()=>import("../pages/Auth/Login/Login"))
export const ForgetPassword = lazy(()=>import("../pages/Auth/ForgetPassword/ForgetPassword"))
export const ResetPassword = lazy(()=>import("../pages/Auth/ResetPassword/ResetPassword"))

// Dashboard routes
export const Dashboard = lazy(()=>import("../pages/Dashboard/Dashborad/Dashboard"))
export const Funding = lazy(()=>import("../pages/Dashboard/Funding/Funding"))
export const KYC = lazy(()=>import("../pages/Dashboard/KYC/KYC"))
