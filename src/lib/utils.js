import HeroBg1 from "../assets/Images/hero-bg1.jpg";
import HeroBg2 from "../assets/Images/hero-bg2.jpg";
import HeroBg3 from "../assets/Images/hero-bg3.jpg";
import service1 from "../assets/Images/service1.jpg";
import service2 from "../assets/Images/service2.jpg";
import service3 from "../assets/Images/service3.jpg";
import service4 from "../assets/Images/service4.jpg";
import service5 from "../assets/Images/service5.jpg";
import service6 from "../assets/Images/service6.jpg";
import testimony1 from "../assets/Images/testimonyImg1.jpg";
import testimony2 from "../assets/Images/testimonyImg2.jpg";
import testimony3 from "../assets/Images/testimonyImg3.jpg";
import testimony4 from "../assets/Images/testimonyImg4.jpg";
import { Calculator, ChartCandlestick, CreditCard, Gem, Scale, Wallet } from "lucide-react";

export const navLinks = [
  { name: "Home", link: "/home" },
  { name: "Services", link: "/services" },
  { name: "About", link: "/about" },
  { name: "FAQ", link: "/faq" },
  { name: "Contact", link: "/contact" },
];

export const sliderOption = [
  {
    title: "You can open your bank account with us now",
    bnt1Text: "About us",
    bnt1Link: "/about",
    bnt2Text: "Our Services",
    bnt2Link: "/services",
    bgImg: HeroBg1,
  },
  {
    title: "Get a banking loan from us without stress",
    bnt1Text: "About us",
    bnt1Link: "/about",
    bnt2Text: "Open Account",
    bnt2Link: "/auth/sign-up",
    bgImg: HeroBg2,
  },
  {
    title: "We are the end to your financial problems",
    bnt1Text: "About us",
    bnt1Link: "/about",
    bnt2Text: "Login",
    bnt2Link: "/auth/login",
    bgImg: HeroBg3,
  },
];

export const homeServices = [
  {
    img: service1,
    title: "Financial Savings",
    desc: "It’s generally wise to have a savings account, and they’re mostly free—especially at online banks.",
    link: "/service:id",
  },
  {
    img: service3,
    title: "Credit Cards",
    desc: "Customized offers fast and easy Tell us who you are and what you like, to see what offers are available to you.",
    link: "/service:id",
  },
  {
    img: service4,
    title: "Loans",
    desc: "Interest rate for loan range from 10.99% to 24% and can vary by loan amount, loan tenure, credit score.",
    link: "/service:id",
  },
  {
    img: service5,
    title: "Risk Analysis",
  },
  {
    img: service2,
    title: "VC Funds",
  },
  {
    img: service6,
    title: "Risk Analysis",
  },
];

export const homeAbouts = [
  {
    title: "Finance Planning",
    decs: "The future is for those that have savings culture.",
    icon: Scale,
  },
  {
    title: "Wealth Management",
    decs: "Wealth that is not manage well will never remain.",
    icon: Wallet,
  },
  {
    title: "Risk Analysis",
    decs: "You need a professional to help remove risk from your business",
    icon: Calculator,
  },
  {
    title: "Venture Capitals",
    decs: "Get a venture capital to keep financial balance.",
    icon: CreditCard,
  },
  {
    title: "Stock Market",
    decs: "Stock market will remain the financial pillar, invest today",
    icon: ChartCandlestick,
  },
  {
    title: "Business Campaign",
    decs: "A regular business campaign is key to business prosperity.",
    icon: Gem,
  },
];

export const homeTestimonies = [
  {
    desc: "Thanks to swiftcredence! my small business received the funding it needed to expand. The platform process was smooth, and the team was incredibly supportive throughout.",
    name: "Aamir Graves",
    title: "Businessman",
    img: testimony1,
  },
  {
    desc: "The team at swiftcredence took the time to understand our specific needs. They offered competitive rates and a flexible repayment plan that helped us expand our manufacturing operations.",
    name: "James Davies",
    title: "Entrepreneur",
    img: testimony2,
  },
  {
    desc: "I can't thank swiftcredence enough for helping me secure the financing I needed to open my dream retail store. Their team is responsive, professional, and truly cares about their clients' success.",
    name: "Henry Thomas",
    title: "Sales Executive",
    img: testimony3,
  },
  {
    desc: "I'm grateful to have found swiftcredence for my startup. They offered flexible loan options and guided me every step of the way. My business is thriving, and it's all thanks to them.",
    name: "Oliver Harris",
    title: "Sales Executive",
    img: testimony4,
  },
];
