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
  { name: "Fund Account", link: "/Funding", icon: TicketPlus },
  {
    name: "Transfer",
    icon: Send,
    subMenu: [
      { name: "Internal Transfer", link: "/internal-transfer" },
      { name: "International Transfer", link: "/international-transfer" },
      { name: "Local Transfer", link: "/local-transfer" },
      { name: "Crypto Transfer", link: "/crypto-transfer" },
      { name: "Paypal Transfer", link: "/paypal-transfer" },
    ],
  },
  {
    name: "Finance",
    icon: ChartLine,
    subMenu: [
      { name: "NFT", link: "/NFT" },
      { name: "Stocks", link: "/stocks" },
    ],
  },
  { name: "Transaction History", link: "/transactions", icon: Clock3 },
  { name: "Token", link: "/token", icon: CreditCard },
  { name: "Loan", link: "/loan", icon: Tickets },
  { name: "KYC", link: "/KYC", icon: Link2 },
  { name: "Settings", link: "/settings", icon: Settings },
];
