"use client";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "..";

export type NotificationType = {
  id: number;
  index: number;
  type: string;
  title: string;
  message: string;
  time: string;
};

type NotificationsProps = NotificationType & {
  index: number;
};

export const Notification = ({
  id,
  type,
  title,
  message,
  time,
  index,
}: NotificationsProps) => {
  return (
    <div
      className={`z-10 bg-white p-4 w-80 flex justify-between items-start shadow-md rounded-lg border-4 border-gray-50 border-solid`}
      role="notification"
    >
      <div className="relative">
        <p className="font-bold">{title}</p>
        <p className="">{message}</p>
        <p className="text-sm">{time}</p>
      </div>
      <Button variant="shadow">
        <XMarkIcon className="w-5 h-5" />
      </Button>
    </div>
  );
};
