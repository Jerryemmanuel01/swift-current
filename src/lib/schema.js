import * as Yup from "yup";

export const contactMessageSchema = Yup.object().shape({
  fullname: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  title: Yup.string()
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

export const KYCSchema = Yup.object().shape({
  country: Yup.string().required("Country is required"),
  medium: Yup.string().required("Id medium is required"),
  number: Yup.string()
    .required("Id Number is required")
    .matches(/^\d+$/, "Must be a valid number"),
  photo: Yup.mixed()
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