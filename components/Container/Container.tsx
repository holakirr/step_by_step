import { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container: FC<ContainerProps> = ({ children, className }) => (
  <div
    className={
      "container mx-auto max-w-7xl backdrop:blur-xl relative bg-transparent " +
      className
    }
  >
    {children}
  </div>
);
