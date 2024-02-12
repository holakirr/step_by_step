import { XMarkIcon } from "@heroicons/react/24/outline";
import { HTMLAttributes } from "react";
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

export const Notification = ({
	type,
	index,
	title,
	message,
	time,
}: NotificationsProps) => (
	<div
		className="z-10 p-4 w-80 flex justify-between items-start shadow-xl rounded-lg backdrop-blur bg-white/70 dark:bg-slate-700/70"
		id="notification"
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
