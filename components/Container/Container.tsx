import { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container: FC<ContainerProps> = ({ children, className }) => (
  <div
    className={
      "container mx-auto max-w-7xl backdrop:blur-xl relative bg-transparent  p-4 md:px-8 rounded-lg shadow-lg " +
      className
    }
  >
    {children}
  </div>
);
