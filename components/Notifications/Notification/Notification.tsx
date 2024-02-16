import { XMarkIcon } from "@heroicons/react/24/outline";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "../../";

export type NotificationType = {
	id: string;
	type: string;
	title: string;
	message: string;
	time: string;
};

type NotificationsProps = HTMLAttributes<HTMLDivElement> &
	NotificationType & {
		index: number;
	};
const SCALE_FACTOR = 0.04;

export const Notification = ({
	type,
	index,
	title,
	message,
	time,
}: NotificationsProps) => (
	<div
		className={twMerge(
			"p-4 w-80 flex justify-between items-start shadow-xl rounded-lg backdrop-blur bg-gradient-to-br from-[#d7d7d7]/5 to-[#eeeeee]/5 border-[.1px] border-cyan-50/20 dark:border-white/55 transition-all",
		)}
		id="notification"
		style={{ scale: 1 - index * SCALE_FACTOR, zIndex: 100 - index }}
	>
		<div className="">
			<p className="font-bold">{title}</p>
			<p className="">{message}</p>
			<p className="text-sm">{time}</p>
		</div>
		<Button variant="shadow" squared>
			<XMarkIcon className="w-5 h-5" />
		</Button>
	</div>
);
