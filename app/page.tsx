import { Table } from "../shared";

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
	return <Table data={data} />;
}
