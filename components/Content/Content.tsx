import { Container } from "..";

type ContentProps = {
  children: React.ReactNode;
};

export const Content = ({ children }: ContentProps) => (
  <Container className="shadow-lg rounded-lg overflow-clip">
    {children}
  </Container>
);
