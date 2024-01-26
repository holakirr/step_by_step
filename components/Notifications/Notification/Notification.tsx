"use client";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { HTMLAttributes } from "react";
import { Button } from "../..";

export type NotificationType = {
  id: string;
  type: string;
  title: string;
  message: string;
  time: string;
};

type NotificationsProps = HTMLAttributes<HTMLDivElement> & NotificationType;

export const Notification = ({
  id,
  type,
  title,
  message,
  time,
  style,
}: NotificationsProps) => {
  return (
    <div
      className={`z-10 bg-white dark:bg-slate-700 p-4 w-80 flex justify-between items-start shadow-[0px_0px_15px_1px_rgb(0,0,0,0.3)] rounded-lg`}
      style={style}
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
