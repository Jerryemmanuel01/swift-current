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
import BTCQRCode from "../assets/Images/btc_QRCode.jpg";
import ETHQRCode from "../assets/Images/ETH_QRCode.jpg";
import USDTERCQRCode from "../assets/Images/USDTERC_QRCode.jpg";
import USDTTRCQRCode from "../assets/Images/USDTTRC_QRCode.jpg";
import {
  Calculator,
  ChartCandlestick,
  CreditCard,
  Gem,
  Scale,
  Wallet,
} from "lucide-react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { BsCashCoin } from "react-icons/bs";
import { PiBank, PiHandCoins } from "react-icons/pi";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { RiVisaFill } from "react-icons/ri";

export const sliderOption = [
  {
    title: "You can open your bank account with us now",
    bnt1Text: "About us",
    bnt1Link: "/about",
    bnt2Text: "Open Account",
    bnt2Link: "/auth/sign-up",
    bgImg: HeroBg1,
  },
  {
    title: "Get a banking loan from us without stress",
    bnt1Text: "About us",
    bnt1Link: "/about",
    bnt2Text: "Login",
    bnt2Link: "/auth/login",
    bgImg: HeroBg2,
  },
  {
    title: "We are the end to your financial problems",
    bnt1Text: "About us",
    bnt1Link: "/about",
    bnt2Text: "Our Services",
    bnt2Link: "/services",
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

export const serviceFeatures = [
  {
    icon: BsCashCoin,
    title: "STABLE BANKING",
    desc: "We provide service void of errors and irregularities while maintaining consistency in quality of service.",
  },
  {
    icon: VscWorkspaceTrusted,
    title: "RELIABLE SYSTEM",
    desc: "Our system has been made reliable by making our services available and accessible anytime from anywhere.",
  },
  {
    icon: PiBank,
    title: "FULLY SECURED",
    desc: "We use updated and sophisticated fintech technologies to secure and ensure safe transaction for all users.",
  },
  {
    icon: RiVisaFill,
    title: "LOAN",
    desc: "We offer different kinds of loans Student Loan, Business banking and more.",
  },
  {
    icon: HiOutlineBanknotes,
    title: "RELIABLE CUSTOMER SERVICE",
    desc: "Get help in seconds Contact Customer Support We're available to help you 24 hours a day, 7 days a week.",
  },
  {
    icon: PiHandCoins,
    title: "PERSONAL SAVINGS",
    desc: "Savings account offered by banks that gives you a safe place to store your money and often earns compounding interest.",
  },
];

export const FAQS = [
  {
    id: 1,
    question:
      "How long does my deposit take before it can reflect on my swiftcredence account dashboard?",
    answer:
      "Your deposit will be reflected immediately once it is confirmed on the blockchain network.",
  },
  {
    id: 2,
    question: "What Are The Requirements For Business Loan?",
    answer:
      "If you received a Paycheck Protection Program (PPP) loan, loan forgiveness isn't automatic. You need to apply if you want your loan forgiven. You may need to include bank account statements on your PPP forgiveness application. Lenders want proof of your business's incoming money. As a result, you may have to show your bank statements to the lender when you apply for a business loan. The lender reviews the statements to determine if you are a good fit for a loan.",
  },
  {
    id: 3,
    question:
      "How long does it take to process a withdrawal to an international bank?",
    answer:
      "Once we receive your withdrawal request we process immediately and send to your Bank Account.",
  },
  {
    id: 4,
    question: "Can I have more than two accounts?",
    answer:
      "We do not allow multiple accounts except only for business purposes.",
  },
  {
    id: 5,
    question: "How do I make a deposit?",
    answer:
      "To deposit funds in your trading account is quick and simple For your convenience you may choose one of the several available deposit methods To make a successful deposit please follow the steps below Login to your account Click on the DEPOSITS button in the DASHBOARD section Choose the deposit option And follow the steps to complete your transaction.",
  },
  {
    id: 6,
    question: "How do I create my account?",
    answer:
      "Registration process is very easy and will take a few moments to complete Simply click CREATE ACCOUNT button and fill in all the required fields.",
  },
  {
    id: 7,
    question: "What ia an harware token in swift current",
    answer:
      "Hardware tokens need to integrate seamlessly with the systems and services they are meant to protect. This involves coordination between the token and the authentication infrastructure to ensure a smooth and secure user experience.",
  },
  {
    id: 8,
    question: "How can i contact customer’s support?",
    answer:
      "You can contact customer support through the in-app help section, where you’ll find FAQs, chat support, and a ticket system for any issues or inquiries.",
  },
];

export const accountTypies = [
  { account: "Checking", value: "Checking" },
  { account: "Savings", value: "Savings" },
  { account: "fixed Deposit", value: "Fixed Deposit" },
];

export const currenciesTypies = [
  { currency: "Dollar ($)", value: "dollar" },
  { currency: "Euro (€)", value: "euro" },
  { currency: "Indian Rupees (Rs)", value: "rupee" },
  { currency: "Pakistan Rupees (Rs)", value: "rupee" },
  { currency: "Pound Sterling (£)", value: "rupee" },
  { currency: "Ruble (Rub)", value: "ruble" },
  { currency: "Rial (IR)", value: "rial" },
  { currency: "Rupiah (Rp)", value: "rupiah" },
  { currency: "Yen (¥)", value: "yen" },
  { currency: "Yuan (¥)", value: "yuan" },
];

export const transactionData = [
  {
    ref: "#2353232",
    category: "Credit",
    date: "22 Aug, 2024",
    time: "01 : 36 : 42 AM",
    amount: "$600,000",
    status: "Approved",
  },
  {
    ref: "#5849332",
    category: "Debit",
    date: "09 Sep, 2024",
    time: "11 : 44 : 09 PM",
    amount: "$30,000",
    status: "Pending",
  },
  {
    ref: "#3432328",
    category: "Credit",
    date: "25 Sep, 2024",
    time: "03 : 36 : 42 AM",
    amount: "$90,000",
    status: "Approved",
  },
  {
    ref: "#9382283",
    category: "Debit",
    date: "12 Dec, 2024",
    time: "06 : 16 : 32 AM",
    amount: "$10,000",
    status: "Failed",
  },
  {
    ref: "#8994843",
    category: "Credit",
    date: "12 Jan, 2025",
    time: "11 : 36 : 42 AM",
    amount: "$50,000",
    status: "Approved",
  },
];

export const transactionHistoryData = [
  {
    ref: "#2353232",
    category: "Credit",
    date: "22 Aug, 2024",
    time: "01 : 36 : 42 AM",
    amount: "$600,000",
    status: "Approved",
    name: "kelvin",
    charges: "$0",
    description: "Transfer",
  },
  {
    ref: "#5849332",
    category: "Debit",
    date: "09 Sep, 2024",
    time: "11 : 44 : 09 PM",
    amount: "$30,000",
    status: "Pending",
    name: "ben",
    charges: "$0",
    description: "Transfer",
  },
  {
    ref: "#3432328",
    category: "Credit",
    date: "25 Sep, 2024",
    time: "03 : 36 : 42 AM",
    amount: "$90,000",
    status: "Approved",
    name: "Charles",
    charges: "$0",
    description: "Transfer",
  },
  {
    ref: "#9382283",
    category: "Debit",
    date: "12 Dec, 2024",
    time: "06 : 16 : 32 AM",
    amount: "$10,000",
    status: "Failed",
    name: "Dani kim",
    charges: "$0",
    description: "Transfer",
  },
  {
    ref: "#8994843",
    category: "Credit",
    date: "12 Jan, 2025",
    time: "11 : 36 : 42 AM",
    amount: "$50,000",
    status: "Approved",
    name: "balde frank",
    charges: "$0",
    description: "Transfer",
  },
];

export const walletAddresses = [
  {
    blockchainNetwork: "USDT (ERC20)",
    walletAddress: import.meta.env.VITE_USDTERC_ADDRESS,
    qrCode: USDTERCQRCode,
  },
  {
    blockchainNetwork: "USDT (TRC20)",
    walletAddress: import.meta.env.VITE_USDTTRC_ADDRESS,
    qrCode: USDTTRCQRCode,
  },
  {
    blockchainNetwork: "BITCOIN (BTC)",
    walletAddress: import.meta.env.VITE_BTC_ADDRESS,
    qrCode: BTCQRCode,
  },
  {
    blockchainNetwork: "ETHEREUM (ETH)",
    walletAddress: import.meta.env.VITE_ETH_ADDRESS,
    qrCode: ETHQRCode,
  },
];

export const IdMedium = [
  { medium: "Driver's Licence", value: "Driver's licence" },
  { medium: "International Passport", value: "International Passport" },
  { medium: "National ID Card", value: "National Id Caord" },
];

export const swiftRate = (amount) => {
  const rate = (4 / 100) * amount;

  return rate;
};
