import { NotificationType } from "@/components/Notification/Notification";

export const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const notificationsMock: NotificationType[] = [
  {
    id: 1,
    title: "Notification 1",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    type: "success",
    time: "10:00",
  },
  {
    id: 2,
    title: "Notification 2",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    type: "error",
    time: "10:00",
  },
  {
    id: 3,
    title: "Notification 3",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    type: "warning",
    time: "10:00",
  },
  {
    id: 4,
    title: "Notification 4",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    type: "info",
    time: "10:00",
  },
];
