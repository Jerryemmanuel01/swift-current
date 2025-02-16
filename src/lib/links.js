import {
  LayoutDashboard,
  TicketPlus,
  Send,
  Tickets,
  Link2,
  ChartLine,
  CreditCard,
  Settings,
  Clock3,
  Landmark,
} from "lucide-react";

export const navLinks = [
  { name: "Home", link: "/home" },
  { name: "Services", link: "/services" },
  { name: "About", link: "/about" },
  { name: "FAQ", link: "/faq" },
  { name: "Contact", link: "/contact" },
];
export const sidebarLinks = [
  {
    name: "Admin Dashboard",
    link: "/admin",
    icon: Landmark,
    role: "admin",
  },
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: LayoutDashboard,
    role: "user",
  },
  {
    name: "Fund Account",
    link: "/dashboard/funding",
    icon: TicketPlus,
    role: "user",
  },
  {
    name: "Transfer",
    icon: Send,
    role: "user",
    subMenu: [
      { name: "Internal Transfer", link: "/dashboard/internal-transfer" },
      {
        name: "International Transfer",
        link: "/dashboard/international-transfer",
      },
      { name: "Local Transfer", link: "/dashboard/local-transfer" },
      { name: "Crypto Transfer", link: "/dashboard/crypto-transfer" },
    ],
  },
  {
    name: "Transaction History",
    link: "/dashboard/transaction-history",
    icon: Clock3,
    role: "user",
  },
  { name: "Token", link: "/dashboard/token", icon: CreditCard, role: "user" },
  { name: "Loan", link: "/dashboard/loan", icon: Tickets, role: "user" },
  { name: "KYC", link: "/dashboard/KYC", icon: Link2, role: "user" },
  {
    name: "Settings",
    link: "/dashboard/settings",
    icon: Settings,
    role: "user",
  },
  // {
  //   name: "Finance",
  //   icon: ChartLine,
  //   subMenu: [
  //     { name: "NFT", link: "/dashboard/NFT" },
  //     { name: "Stocks", link: "/dashboard/stocks" },
  //   ],
  // },
];
