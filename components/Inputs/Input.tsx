import { PencilIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { InputHTMLAttributes } from "react";

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
    <label htmlFor={id + "-input"} className="sr-only">
      {label}
    </label>
    {Icon && (
      <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
        <Icon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
      </div>
    )}
    <input
      type="text"
      id={id + "-input"}
      className={clsx(
        "block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
        Icon && "ps-10",
        className
      )}
      placeholder={placeholder}
    />
  </div>
);
