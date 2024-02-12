import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps {
	children: ReactNode;
	className?: string;
}

export const Container: FC<ContainerProps> = ({ children, className }) => (
	<div
		className={twMerge(
			"container mx-auto max-w-7xl relative  p-4 md:px-8 rounded-lg shadow-lg border border-cyan-50/20 backdrop-blur bg-gray-400/20",
			className,
		)}
	>
		{children}
	</div>
);
