import { ButtonHTMLAttributes } from "react";

type ButtonVariant = keyof typeof buttonVariantClasses;
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const buttonVariantClasses = {
  primary:
    "bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600 text-white",
  secondary: "bg-gray-600 hover:bg-gray-500 focus-visible:outline-gray-600",
  danger: "bg-red-600 hover:bg-red-500 focus-visible:outline-red-600",
  warning: "bg-yellow-600 hover:bg-yellow-500 focus-visible:outline-yellow-600",
  shadow:
    "bg-transparent hover:bg-gray-100 focus-visible:outline-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus-visible:outline-gray-600 dark:text-gray-100",
};

const Button = ({
  children,
  onClick,
  variant = "primary",
  className,
}: ButtonProps) => (
  <button
    type="button"
    className={`inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${buttonVariantClasses[variant]} ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export { Button };
