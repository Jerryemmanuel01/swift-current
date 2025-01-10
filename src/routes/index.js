import { lazy } from "react";

export const Home = lazy(()=>import("../pages/General/Home/Home"))
export const About = lazy(()=>import("../pages/General/About/About"))
export const Services = lazy(()=>import("../pages/General/Services/Services"))
export const FAQ = lazy(()=>import("../pages/General/FAQ/FAQ"))
export const Contact = lazy(()=>import("../pages/General/Contact/Contact"))


export const SignUp = lazy(()=>import("../pages/Auth/SignUp/SignUp"))
export const SignUpSuccess = lazy(()=>import("../pages/Auth/SignUp/SignupSuccess"))
export const Login = lazy(()=>import("../pages/Auth/Login/Login"))