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
  { account: "Checking", value: "checking" },
  { account: "Savings", value: "savings" },
  { account: "fixed Deposit", value: "fixed" },
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

export const walletAddresses = [
  {
    network: "USDT (ERC20)",
    address: import.meta.env.VITE_USDTERC_ADDRESS,
    qrCode:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAElBMVEX///8AAICIiLXAwNY9PZBaWp3+ZmKVAAAEw0lEQVR4nO2d63bDIAyDm9v7v/J2FugqT1FMbs16pH8jBvyRLhAb2sfDsizLurf6Vg3rFWkPw5+uvzU0dy9hulYVp4Z1E+yBwzR3/2aY0TCGMUwTDC08FWZaF4WhNuh3uSRh8t1nYKQNWCIMtaF+Uw3N3e+2AUvDLMkw+2zA0jBLMkzWZhiJegZTNM0mfBKZr+Ffk4DpWe+16XaYviNSMCOYBBjW9MhMOjChvV8BM7XCyDtjGMNQmOb/mTvDhGjF8CP0dC4b/gEMbU298hjGMIYxzGfA3HJtpl4BsF4mbmYYwxjGMIZZhClr+CABExOePypvbONchvUUjOj8klBT0HyNjnACZrejh8KMhjGMYVZgahCVwrxeuhImLzrPVDSA4fMMa6VBhjGMYQxzAQyuzXgg5EyYfP4R7XG7SfF7mP+iqYGe7kjZ2v2xwjENLx0Uht3fm8gwhrlAhvnVSU6pIAKzkTBzCIM+mut+7HJnlJSHEqZjCq2xDwiHKUisUHYI4lmPzC01jGEMcxsYdOpCGHSDwshmoDX6/KTxJ1QYp70w1O//CvNRd8YwhjFMG0zdtYeaTULCr1RglhUGDiPWrcCwBn7mCNmC/DWzOKRC7NRmfRDrzDayazQaldjWGAoLknL0WJiJXTOMYQyzCHOvB8AI50KwkAucmqCwg1MieOQkcUojFOKRE+qoFJ00qQkdYdpV4jbTO7o7HHUGDP0kGsYwHwKTWCDfGWaCVW+NEgvho7mf69e589WwnjOvbeLqN2BAHJmGlUtHEiY9bEFq0qxkYDKoDhOjnrHcCUOXM4YxjGEWYRIPgO46mAk2H1c34CmMhVVz9fBoRt7X6MiEgYnS7fNbRkSKryGg8WAjXEHTo6f2wBQTmqClCQZUGOc7wtDEiNzGaRjDGOZ4GAxIUJgeLEOAgdVXT6VERAK/yCPMT7KmGkyEUWOKUjB6DU+a3hA3M4xhDHMyjFpuvw0Gl8J11/Es3ARX83+QKqzhDWiFbnTDNODTcbYxDhvDwvWxWBiUMDbgFL6cJTYCbZ00t0se+zSMYQzzR34A3AeGeV9FLemkiTPb1r0zHYxTqLcXZmCWco/mCTAqW2IYwxhmH4w4+cGPfmAfuIauj21c72JHWA80IQxbpbesmvPCVG5isq2CeqjwysNu+u4UNNVOmMz7m2E2yTC/ThlmFWbzSWn4tv8Bv7yfwDzrIQx0H2Dw9wQyMGxIpZA+nGJkMKEe/IWZSpnxuwAmvM8wmMyXGxjGMIYxzEEw0gYsMadZCmlqE2HQZGei4GAYlZ+hMCjDGMYwizD0Gu3haBgR2Ahj2i+Lpg9xRS0DGjSe0g6jAufqA4JKBM4zMoxhDGMYw2yCoQENnFexaZ4LPQhtJwx16gyYlvyMYQxjmJvCjLeEYav9GBWHJCgs7AMMfQUouczqRSKnuRWmOduMUntuDv4WLcMYxjBJmPzPtnIYPCWiYKBpCYPONMAkLCUMcwrrPXDw2Cfh3XEzta2x+TvODWMYw3wODNa7AmZal4IZiw2DKfbYIc1pVtPy6wLo6Pjag4bJS6Y0lmFChxKGFZ6abaYw9Lc0DGMYwyzCvPsBIFKTXDKnWbxhm7SxwwdY9swkU2hZlmXdTl9RAlnLehXF1gAAAABJRU5ErkJggg==",
  },
  {
    network: "USDT (TRC20)",
    address: import.meta.env.VITE_USDTTRC_ADDRESS,
    qrCode:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAYFBMVEX///8AAADk5ORpaWnGxsYuLi7T09Py8vIVFRUcHBy5ubl8fHzn5+f4+PhVVVWrq6uenp7c3NyWlpaFhYVHR0c1NTUmJiZubm4ICAhgYGA8PDxMTExzc3OQkJCzs7OlpaXZnYKBAAAJx0lEQVR4nO2d62KyvBKFFTkIchRFUQ73f5e7Zob3Y9FpDFRb6876Rw6Ep9ghTCbDamVlZWVl9dJKfHemYuroaJo4MAS3LKTh47mj+4kGxmkqb54i+iPk4ddNchiiVyNUpTR8NHPwqnGk0wwwm/U8nRlmr2mDMDkV7kSY88zhNw+F2T4WZmthLIwGptW06X8XZnva3VPpAUzUCG1Svm6w9znVZRoYr7w7/GlrDOMVwT2t0jHMKpHa9AQTXo7/qcqoTnxAMEy6ujt84ZnDxJo2LIQRlUm/DPGWTGHuKrYwX8rCWBhJC2AkOzJwijBBrJokAFMdLh86VLNhYtGMLoWR/rLrQgNzoiYuwPBDs58LU4jDL4ap5sKUEgxPZ/KHwFQWxsK8FczunWDa7W0yuXVp3pkPMMqkTmDA3iavCJMorXZhdVNIHULvduCFAOOeq/+03ScvCMPaSf3WCAOFFsbCWJgv1b0TzL64yYnS+qbD34a5KIi0dRRT97dhWOw3cy2MhXkrmPD1YMLFMOnhsy6OBiaIbwrKi2pKA669q3CWlmFUy0svwTgXYfh0MUzsCEo0MPkh/dAhunWMY570t4FwFvayJHCEMIk0+nBlP+A3w5czfojkQm9Zr+UE1L02G8jCfCkLM9IrwhwNBq4lmIYu36ejYRZpcDYSw9QGTY/GMOaarDbzLdnBLeEbxG9luEArPjTNZWEsjIX5TZjzY2EeG9V0WodztK2mMMo9W25V7RRG1eXUsaSjCUy1nTX8+qSDSQp/pgKASZvThzYR1cUAc6W6jOqize2oSQEmmDt6oYsEXKpJVJMLlbjorHMCvoYsjIX5Ab0mjBQNoS2kq0hy7xaFcQk1MJVq4XXUz+VDgElwCIML1TbJypEaHiLbjUvZ4OZ0xLP9IlIx07UGpqRIwJ767TkuEGB8qjN4AQpa1TLT0Tg13H2GOUEh+82udNRBf3w5QxhuqZsB8AvQ9T5MTP7JesZ0hmEaCcbgTRNhzOdmj33TtDAW5qkwogFAGO4vGgCe+/tQ2EFLDjsrEYaOIjp6kAEYZs0XAcbrqbJV893ahVlzV6spcUdz2b1qMiinlrk6aHgV80hz6D2dM2tuPTbc0q1Pd7TZmc+ak1SAufCPp4YbxB3ElzMWBgKh+NfWheMb5EgtUQfzKUNw/SkY/rV19KtpjWGuJrMEC2Nhfg6GJ7Or8bVNYMC3PsCwTUZbbgDDNplh4vswxxnvDGz4GjKERwmGzGfjA0yqCmuy0H4rwbRUx48bstA12eSiowF5hFSZ7SKj4WvwZLhkofcGyxWDYLV5AkOSdwMaxGjKgUDgN+PFAJceeg3cC35oamcAE0EcgAgj7zlbDAMeTS2MwXTGwliYX4Y5/lGYJOtv4ulfWKrDjDtG/UgZv934+agwdyQYn+p8gEmzcWFBA+0lmMN4hL4NjWGCy/gvVPn3e4jSrTYzjLj5PJZgRBnBXH8VxrEwFuavwpxvWodLYXQhWnoYNW76D+b8WfNhcqVenJpG2VhsoV0obO7DpHQaTuxRcEcal71YTp9/Ur+fYZoZRtcGfolnfhTii8z6Pgyrne1rNn9o4pumrHR8MRU7xcqFME9xAloYC/NzMINHU9cGH0UMY24AfKnJDF8zWTOtrzmIyPSxdwZMc+Kqo/0Qg0xWtAYYMs1dKl2pD8YVvVEbLqVzsk0O9qrMhd9H0tI1UUtXuwy4WY8eSfjQDHb0LMOUUXuAYYl+s/1aeOqNBzpPAiALGm8HF5xQoYnfTIxqqv7BKCFMawwj+s1Q7QRGaQqjdDXwm/0dmLe6MxbmQ2eEQWvIBkDc34Aw/X2YqQFQKvHfg2Hm/8+wfwJcCVk2PurJNIe7bOzJYJgN+Seoe4ahESxyaGQNR2fTOSOASfPRiNngo6bC6I5pHgsiNES/2US6GE1RwzIgOLW0CUFAi5fOnwKD6zMWxsK8CQwZANHX/F2YHzAAW4qwSBlGBVxsdj7ASFEUKTfpqX/P63hfB1zUGcBcaHGvpLCNiPqlsH53ppXCjXkaPe3yp7RAK8t8NyDD8EMzhhvko+ObChPzzUDabVrS0rks821a4tK56ARcvh3YwliY34JJjWHMDUAkGYAB5ijBGMQByDBkKQueoe6F4DlsOSjbjIPnUHwVtMmkyMn8ckjc4KShs3U7GpCMceVQhIaKtqu1ERoiDD80PXxnEcMa0dXEf+huLehEdZFUh+KXM98bF5oEz8kwOJ1h6QJOWboZAAacmsDAJGHGm6aFsTBPhWFvq2gAEEYX18zaa2Ca58PwlpMWvTu05aRFH5O05cTNx3tTSow6YaVUh1En11JQ800YeY8NJu6TCnkzkOdKmf4QpochhohzKTOr/12YhZoEnKLEbVorhJEeG+gEtDCLZGFuekmY9vkw4AowmZst3qjdqZntsEMblcFmEeRFGN6oXUgwQ5A1qaFJu3bLydIt9Jzb9GMGILTJOfEppz/VwNAW+m0twazGZ1k53vbuFvqlyQ0GibnAdC9nYnID9JvtpH+PBXvO7ks7N5sPI+U3szAWxsJ8DbN+AszixFMMI8ZB6r63Y/DQXAzzoJRgKN3SuYWxMP+vMJh68pswzmNhzJOCUt7PuL3ekoJe/HHhkM0zTz8qr+lRgimdz0PFrghTqDr/drL0UM7wNRuna016SrsaUb7W4ZsF43yrl4xSuYoW2hMGul4kmISabhw6m4ZlcSJd+U1TfCszCG5CfTd4bnaK45+Hme+etTBvCoOrTH/1fyam3P9cyMnzIw3MsaavBNBrc1WPlOYSzMGnIbQOjcfA5PQFA7atLbEFGpiSLq2n95krdWDho4RhQv66wIznzFIYMUZzpYHJjfcCJNDvKdnnvwtjvrHBwliYd4HZ3j4kdR5g4ANUDMOOVRkmUJUddRuSTyeCgufDDNn8VnD079NgSllFH6GVzslVLSwRFuFR0A/AiBLzAegk7gXQycJYGAvzPBjxBOYw+F0A3bfdWbgH3SBl01M+qJvkR4rQoLpSHV1yCNRge81MO+nU/76Wq7oPDg2H8rt634TRyWAGILr/dV+hH64CLlhcOrcwFsbCPA+mkOwYSIaJlMmawCQYfaami14LdQE0cc6jiaVXKmuWuAeYb56NYban3T2VngRTU90BYNzmVtjwXXMo6/SQ46kZnbMZpuDuWF2pKvdQGJlHnJtLzqK1BhhMpIua5AURm9Csv4HC4ImrzU+FWZoSzMK8DYycevJFYJrKm6dhohl+rqp6Ommn6sJOGtDdjjqE4ne33Ks62Q5hDqqw0Saf9t2Z4serI9XxSDG0RMXQoZCaBFSHUR9svf1X+myFlZWVlZWg/wGWDGwTIFcvjQAAAABJRU5ErkJggg==",
  },
  {
    network: "BITCOIN (BTC)",
    address: import.meta.env.VITE_BTC_ADDRESS,
    qrCode:
      "data:image/png;base64,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",
  },
  {
    network: "ETHEREUM (ETH)",
    address: import.meta.env.VITE_ETH_ADDRESS,
    qrCode:
      "data:image/png;base64,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",
  },
];

export const IdMedium = [
  { medium: "Driver's Licence", value: "Driver's licence" },
  { medium: "International Passport", value: "Passport" },
  { medium: "National ID Card", value: "Id Caord" },
];