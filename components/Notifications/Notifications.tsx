import { twMerge } from "tailwind-merge";
import { Notification } from "../";
import { NotificationType } from "./Notification/Notification";
import styles from "./Notifications.module.sass";

type NotificationsProps = {
  data: NotificationType[];
};

export const Notifications = ({ data }: NotificationsProps) => (
  <div
    className={twMerge("fixed bottom-8 grid right-8 z-10", styles.notification)}
  >
    {data.map((notification, index) => (
      <Notification key={notification.id} index={index} {...notification} />
    ))}
  </div>
);
