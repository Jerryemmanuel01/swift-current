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
export const Profile = lazy(()=>import("../pages/Dashboard/Profile/Profile"))
export const VerifyEmail = lazy(()=>import("../pages/Dashboard/Verify/Verify"))
export const Funding = lazy(()=>import("../pages/Dashboard/Funding/Funding"))
export const KYC = lazy(()=>import("../pages/Dashboard/KYC/KYC"))
export const InternalTransfer = lazy(()=>import("../pages/Dashboard/Transfer/InternalTransfer/InternalTransfer"))
export const InternationalTransfer = lazy(()=>import("../pages/Dashboard/Transfer/InternationalTransfer/InternationalTransfer"))
export const LocalTransfer = lazy(()=>import("../pages/Dashboard/Transfer/LocalTransfer/LocalTransfer"))
export const CryptoTransfer = lazy(()=>import("../pages/Dashboard/Transfer/CryptoTransfer/CryptoTransfer"))
export const TransferFee = lazy(()=>import("../pages/Dashboard/Transfer/TransferFee/TransferFee"))
export const UpgradeFee = lazy(()=>import("../pages/Dashboard/Transfer/UpgradeFee/UpgradeFee"))
export const NFT = lazy(()=>import("../pages/Dashboard/Finance/NFT/NFT"))
export const Stock = lazy(()=>import("../pages/Dashboard/Finance/Stock/Stock"))
export const TransactionHistory = lazy(()=>import("../pages/Dashboard/TransactionHistory/TransactionHistory"))
export const Token = lazy(()=>import("../pages/Dashboard/Token/Token"))
export const Loan = lazy(()=>import("../pages/Dashboard/Loan/Loan"))
export const Settings = lazy(()=>import("../pages/Dashboard/Settings/Settings"))
export const ManageProfile = lazy(()=>import("../pages/Dashboard/Settings/ManageProfile"))
export const ManagePin = lazy(()=>import("../pages/Dashboard/Settings/ManagePin"))
export const Receipt = lazy(()=>import("../components/Dashboard/TransactionReceipt"))

// Admin routes
export const AdminDashboard = lazy(()=>import("../pages/Admin/AdminDashboard/AdminDashboard"))
export const AdminManagement = lazy(()=>import("../pages/Admin/AdminManagement/AdminManagement"))
export const ApproveKYC = lazy(()=>import("../pages/Admin/ApproveKYC/ApproveKYC"))
export const ApproveTransaction = lazy(()=>import("../pages/Admin/ApproveTransaction/ApproveTransaction"))
export const FundUser = lazy(()=>import("../pages/Admin/FundUser/FundUser"))
export const GetUsers = lazy(()=>import("../pages/Admin/GetUsers/GetUsers"))
