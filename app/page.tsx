import { Container, Table } from "@/components";

const data = [
  {
    id: 1,
    name: "John Doe",
    email: "john@mail.com",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "john@mail.com",
  },
];

export default function Home() {
  return (
    <main className="py-6">
      <Container>
        <Table data={data} />
      </Container>
    </main>
  );
}
