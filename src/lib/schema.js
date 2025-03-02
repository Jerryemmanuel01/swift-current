import * as Yup from "yup";

export const contactMessageSchema = Yup.object().shape({
  name: Yup.string()
  .min(2, "Name must be at least 2 characters")
  .max(50, "Name cannot exceed 50 characters")
  .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  subject: Yup.string()
    .min(3, "Title should be at least 3 characters long.")
    .max(50, "Title should be less than 150 characters long.")
    .required("Title is required"),
  message: Yup.string()
    .min(3, "Message name should be at least 3 characters long.")
    .max(150, "Message name should be less than 150 characters long.")
    .required("Message is required"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[\W_]/,
      "Password must contain at least one special character (e.g., $, &, @, etc.)"
    ),
});

export const signUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First Name is required")
    .min(2, "First Name must be at least 2 characters")
    .max(50, "First Name cannot exceed 50 characters"),
  lastName: Yup.string()
    .required("Last Name is required")
    .min(2, "Last Name must be at least 2 characters")
    .max(50, "Last Name cannot exceed 50 characters"),
  userName: Yup.string()
    .required("Username is required")
    .min(2, "Username must be at least 2 characters")
    .max(50, "Username cannot exceed 50 characters"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string().matches(/^\d+$/, "Only numbers are allowed"),
  country: Yup.string(),
  accountType: Yup.string().required("Account Type is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[\W_]/,
      "Password must contain at least one special character (e.g., $, &, @, etc.)"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
  currency: Yup.string().required("Currency is required"),
  profileImage: Yup.mixed()
    .required("profileImage is required")
    .test("fileSize", "File size is too large (max 5MB)", (value) => {
      return value ? value.size <= 5 * 1024 * 1024 : true;
    })
    .test(
      "fileType",
      "Unsupported file type (only JPEG, PNG, GIF allowed)",
      (value) => {
        return value
          ? ["image/jpeg", "image/jpg", "image/png"].includes(value.type)
          : true;
      }
    ),
  terms: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("You must accept the terms and conditions"),
});

export const forgetPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
});

export const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[\W_]/,
      "Password must contain at least one special character (e.g., $, &, @, etc.)"
    ),
  confirmPassword: Yup.string()

    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

export const fundingSchema = Yup.object().shape({
  amount: Yup.string()
    .required("Amount is required")
    .matches(/^\d+(\.\d+)?$/, "Must be a valid number or decimal"),
  blockchainNetwork: Yup.string().notRequired(),
  walletAddress: Yup.string().notRequired(),
  transactionId: Yup.string().required("Transaction ID is required"),
});

export const blockchainFeeSchema = Yup.object().shape({
  amount: Yup.string().required("Amount is required"),
  blockchainNetwork: Yup.string().notRequired(),
  walletAddress: Yup.string().notRequired(),
  transactionId: Yup.string().required("Transaction ID is required"),
});
export const KYCSchema = Yup.object().shape({
  issuingCountry: Yup.string().required("Country is required"),
  identityMedium: Yup.string().required("Id medium is required"),
  identityNumber: Yup.string()
    .required("Id Number is required")
    .matches(/^\d+$/, "Must be a valid number"),
  identityCardPhoto: Yup.mixed()
    .required("A photo is required")
    .test("fileSize", "File size is too large (max 5MB)", (value) => {
      return value ? value.size <= 5 * 1024 * 1024 : true;
    })
    .test(
      "fileType",
      "Unsupported file type (only JPEG, PNG, GIF allowed)",
      (value) => {
        return value
          ? ["image/jpeg", "image/jpg", "image/png"].includes(value.type)
          : true;
      }
    ),
});

export const internalTransferSchema = Yup.object().shape({
  bankName: Yup.string().notRequired(),
  accountNumber: Yup.string()
    .matches(/^\d{10}$/, "Account number must be exactly 10 digits")
    .required("Recipient account number is required"),
  recipientName: Yup.string().required("Recipient account is required"),
  amount: Yup.string()
    .required("Amount is required")
    .matches(/^\d+(\.\d+)?$/, "Must be a valid number or decimal"),
  description: Yup.string().notRequired(),
  pin: Yup.string().required("Transaction pin is required"),
});

export const internationalTransferSchema = Yup.object().shape({
  bankName: Yup.string().required("Bank name is required"),
  accountNumber: Yup.string()
    .min(10, "Account number must be at least 10 characters long")
    .required("Recipient account number is required"),
  name: Yup.string().required("Recipient name is required"),
  country: Yup.string().required("Country is required"),
  swiftCode: Yup.string().required("Swift Code is required"),
  IBANCode: Yup.string().required("IBAN Code is required"),
  amount: Yup.string()
    .required("Amount is required")
    .matches(/^\d+(\.\d+)?$/, "Must be a valid number or decimal"),
  chargePriorityFee: Yup.string().required("Payment Fee is required"),
  description: Yup.string().required("Description is required"),
  otp: Yup.string()
    .min(6, "Token ID must be at least 6 characters long")
    .required("Token ID is required"),
  pin: Yup.string().required("Transaction pin is required"),
});

export const localTransferSchema = Yup.object().shape({
  bankName: Yup.string().required("Bank name is required"),
  accountNumber: Yup.string()
    .min(10, "Account number must be at least 10 characters long")
    .required("Recipient account number is required"),
  name: Yup.string().required("Recipient name is required"),
  sortCode: Yup.string().required("Sort Code is required"),
  branchNumber: Yup.string().notRequired(),
  amount: Yup.string()
    .required("Amount is required")
    .matches(/^\d+(\.\d+)?$/, "Must be a valid number or decimal"),
  chargePriorityFee: Yup.string().required("Payment Fee is required"),
  description: Yup.string().required("Description is required"),
  otp: Yup.string()
    .min(6, "Token ID must be at least 6 characters long")
    .required("Token ID is required"),
  pin: Yup.string().required("Transaction pin is required"),
});

export const cryptoTransferSchema = Yup.object().shape({
  blockchainNetwork: Yup.string().required("Blockchain Network required"),
  walletAddress: Yup.string().required("Wallet address required"),
  amount: Yup.string()
    .required("Amount is required")
    .matches(/^\d+(\.\d+)?$/, "Must be a valid number or decimal"),
  description: Yup.string().required("Description is required"),
  otp: Yup.string()
    .min(6, "Token ID must be at least 6 characters long")
    .required("Token ID is required"),
  pin: Yup.string().required("Transaction pin is required"),
});

export const editProfileSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First Name is required")
    .min(2, "First Name must be at least 2 characters")
    .max(50, "First Name cannot exceed 50 characters"),
  lastName: Yup.string()
    .required("Last Name is required")
    .min(2, "Last Name must be at least 2 characters")
    .max(50, "Last Name cannot exceed 50 characters"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string().matches(/^\d+$/, "Only numbers are allowed"),
  country: Yup.string().notRequired(),
  currency: Yup.string().notRequired(),
  occupation: Yup.string().notRequired(),
});

export const editPinSchema = Yup.object().shape({
  pin: Yup.string()
    .min(4, "Pin must be at least 4 characters long")
    .max(4, "Pin must not exceed 4 characters long")
    .matches(/^\d+$/, "Only numbers are allowed")
    .notRequired(),
  currentPassword: Yup.string()

    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[\W_]/,
      "Password must contain at least one special character (e.g., $, &, @, etc.)"
    )
    .required("Current password is required"),
  newPassword: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[\W_]/,
      "Password must contain at least one special character (e.g., $, &, @, etc.)"
    )
    .notRequired(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .notRequired(),
});

export const loanFormSchema = Yup.object().shape({
  amount: Yup.string()
    .required("Amount is required")
    .matches(/^\d+(\.\d+)?$/, "Must be a valid number or decimal"),
  description: Yup.string().required("Description is required"),
  sourceOfIncome: Yup.string().required("Source of Income is required"),
  monthlyIncome: Yup.string().required("Monthly Income is required"),
});
