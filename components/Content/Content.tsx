import { HTMLAttributes } from "react";
import { Container } from "..";

type ContentProps = HTMLAttributes<HTMLDivElement>;

export const Content = ({ children }: ContentProps) => (
  <Container className="shadow-lg rounded-lg p-4 md:px-8">{children}</Container>
);
