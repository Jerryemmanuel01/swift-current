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
} from "lucide-react";

export const navLinks = [
  { name: "Home", link: "/home" },
  { name: "Services", link: "/services" },
  { name: "About", link: "/about" },
  { name: "FAQ", link: "/faq" },
  { name: "Contact", link: "/contact" },
];
export const sidebarLinks = [
  { name: "Dashboard", link: "/dashboard", icon: LayoutDashboard },
  { name: "Fund Account", link: "/dashboard/funding", icon: TicketPlus },
  {
    name: "Transfer",
    icon: Send,
    subMenu: [
      { name: "Internal Transfer", link: "/dashboard/internal-transfer" },
      { name: "International Transfer", link: "/dashboard/international-transfer" },
      { name: "Local Transfer", link: "/dashboard/local-transfer" },
      { name: "Crypto Transfer", link: "/dashboard/crypto-transfer" },
      { name: "Paypal Transfer", link: "/dashboard/paypal-transfer" },
    ],
  },
  {
    name: "Finance",
    icon: ChartLine,
    subMenu: [
      { name: "NFT", link: "/dashboard/NFT" },
      { name: "Stocks", link: "/dashboard/stocks" },
    ],
  },
  { name: "Transaction History", link: "/dashboard/transaction-history", icon: Clock3 },
  { name: "Token", link: "/dashboard/token", icon: CreditCard },
  { name: "Loan", link: "/dashboard/loan", icon: Tickets },
  { name: "KYC", link: "/dashboard/KYC", icon: Link2 },
  { name: "Settings", link: "/dashboard/settings", icon: Settings },
];
