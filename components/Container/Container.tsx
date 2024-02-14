import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps {
	children: ReactNode;
	className?: string;
}

export const Container: FC<ContainerProps> = ({ children, className }) => (
	<div
		className={twMerge(
			"container mx-auto max-w-7xl relative p-4 md:px-8 rounded-lg shadow-xl border-[.1px] border-cyan-50/20 dark:border-white/55 backdrop-blur-md bg-gradient-to-br from-[#d7d7d7]/5 to-[#eeeeee]/5",
			className,
		)}
	>
		{children}
	</div>
);
