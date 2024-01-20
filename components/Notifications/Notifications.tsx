import { Notification } from "..";
import { NotificationType } from "../Notification/Notification";
import styles from "./Notifications.module.css";

type NotificationsProps = {
  data: NotificationType[];
};

export const Notifications = ({ data }: NotificationsProps) => {
  return (
    <div className={`fixed bottom-8 grid right-8 z-10 ${styles.notifications}`}>
      {data.map((notification, index) => (
        <Notification key={notification.id} {...notification} index={index} />
      ))}
    </div>
  );
};
