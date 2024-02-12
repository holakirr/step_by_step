import { PencilIcon } from "@heroicons/react/24/outline";
import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export type HeroIcon = typeof PencilIcon;

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	label: string;
	icon?: HeroIcon;
};

export const Input = ({
	label,
	icon: Icon,
	id,
	className,
	placeholder,
}: InputProps) => (
	<div className="relative">
		<label htmlFor={`${id}-input`} className="sr-only">
			{label}
		</label>
		<input
			type="text"
			id={`${id}-input`}
			className={twMerge(
				"block p-2 text-sm text-gray-900 w-full bg-gray-50 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white backdrop-blur rounded-lg shadow-lg bg-transparent",
				Icon && "ps-10",
				className,
			)}
			placeholder={placeholder}
		/>
		{Icon && (
			<div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
				<Icon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
			</div>
		)}
	</div>
);
