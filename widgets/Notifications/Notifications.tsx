import { Notification, NotificationType } from "@/widgets";
import { twMerge } from "tailwind-merge";
import styles from "./Notifications.module.sass";

type NotificationsProps = {
	data: NotificationType[];
};

export const Notifications = ({ data }: NotificationsProps) => (
	<div
		className={twMerge(
			"fixed bottom-8 grid right-8 w-80 z-10",
			styles.notifications,
		)}
	>
		{data
			.map((notification, index) => (
				<Notification key={notification.id} index={index} {...notification} />
			))
			.reverse()}
	</div>
);
