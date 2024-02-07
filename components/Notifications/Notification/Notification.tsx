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
  type,
  title,
  message,
  time,
}: NotificationsProps) => {
  return (
    <div
      className={`z-10 p-4 w-80 flex justify-between items-start shadow-xl rounded-lg backdrop:blur-xl relative bg-white/90`}
      role="notification"
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
};
