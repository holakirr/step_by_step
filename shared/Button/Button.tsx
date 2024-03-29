import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ButtonVariant = keyof typeof buttonVariantClasses;
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: ButtonVariant;
	squared?: boolean;
};

const buttonVariantClasses = {
	primary:
		"bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600 text-white dark:text-gray-100",
	secondary:
		"bg-gray-600 hover:bg-gray-500 focus-visible:outline-gray-600 text-white dark:text-gray-100",
	danger:
		"bg-red-600 hover:bg-red-500 focus-visible:outline-red-600 text-white dark:text-gray-100",
	warning:
		"bg-yellow-600 hover:bg-yellow-500 focus-visible:outline-yellow-600 text-white dark:text-gray-100",
	shadow:
		"bg-transparent hover:bg-gray-100 focus-visible:outline-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus-visible:outline-gray-600 text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 dark:focus-visible:text-gray-100",
};

const Button = ({
	children,
	onClick,
	variant = "primary",
	className,
	squared,
}: ButtonProps) => (
	<button
		type="button"
		className={twMerge(
			buttonVariantClasses[variant],
			"inline-flex items-center px-4 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-opacity-70 hover:bg-opacity-50 backdrop-blur-sm rounded-3xl transition-colors shadow-md hover:shadow-lg whitespace-nowrap",
			className,
			squared && "aspect-square",
		)}
		onClick={onClick}
	>
		{children}
	</button>
);

export { Button };
