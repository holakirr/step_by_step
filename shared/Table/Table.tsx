"use client";

import Image from "next/image";
import { FC, useState } from "react";
import { ListBox } from "../";
import { SearchBox } from "../../widgets";

type TableProps = {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	data?: any[];
};

const people = [
	{
		name: "Wade Cooper",
		id: "Wade Cooper",
	},
	{
		name: "Arlene Mccoy",
		id: "Arlene Mccoy",
	},
	{
		name: "Devon Webb",
		id: "Devon Webb",
	},
];

export const Table: FC<TableProps> = ({ data }) => {
	const [selected, setSelected] = useState(people[0]);
	return (
		<div className="relative">
			<div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4">
				<ListBox
					multiple={false}
					items={people}
					selected={selected}
					setSelected={setSelected}
				/>
				<SearchBox id="table" className="w-64" placeholder="users" />
			</div>
			<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-x-visible max-w-full">
				<thead className="text-xs text-gray-700 uppercase dark:text-gray-400 w-full rounded-t-md overflow-clip">
					<tr>
						<th scope="col" className="p-4">
							<div className="flex items-center">
								<input
									id="checkbox-all-search"
									type="checkbox"
									className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label htmlFor="checkbox-all-search" className="sr-only">
									checkbox
								</label>
							</div>
						</th>
						<th scope="col" className="px-6 py-3">
							Name
						</th>
						<th scope="col" className="px-6 py-3">
							Position
						</th>
						<th scope="col" className="px-6 py-3">
							Status
						</th>
						<th scope="col" className="px-6 py-3">
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
						<td className="w-4 p-4">
							<div className="flex items-center">
								<input
									id="checkbox-table-search-1"
									type="checkbox"
									className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label htmlFor="checkbox-table-search-1" className="sr-only">
									checkbox
								</label>
							</div>
						</td>
						<th
							scope="row"
							className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
						>
							<Image
								className="w-10 h-10 rounded-full"
								src="https://picsum.photos/id/684/40/40"
								width={40}
								height={40}
								alt="Jese image"
							/>
							<div className="ps-3">
								<div className="text-base font-semibold">Neil Sims</div>
								<div className="font-normal text-gray-500">
									neil.sims@flowbite.com
								</div>
							</div>
						</th>
						<td className="px-6 py-4">React Developer</td>
						<td className="px-6 py-4">
							<div className="flex items-center">
								<div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2" />{" "}
								Online
							</div>
						</td>
						<td className="px-6 py-4">
							<a
								// biome-ignore lint/a11y/useValidAnchor: <explanation>
								href="#"
								className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
							>
								Edit user
							</a>
						</td>
					</tr>
					<tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
						<td className="w-4 p-4">
							<div className="flex items-center">
								<input
									id="checkbox-table-search-2"
									type="checkbox"
									className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label htmlFor="checkbox-table-search-2" className="sr-only">
									checkbox
								</label>
							</div>
						</td>
						<th
							scope="row"
							className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
						>
							<Image
								className="w-10 h-10 rounded-full"
								src="https://picsum.photos/id/684/40/40"
								width={40}
								height={40}
								alt="Jese image"
							/>
							<div className="ps-3">
								<div className="text-base font-semibold">Bonnie Green</div>
								<div className="font-normal text-gray-500">
									bonnie@flowbite.com
								</div>
							</div>
						</th>
						<td className="px-6 py-4">Designer</td>
						<td className="px-6 py-4">
							<div className="flex items-center">
								<div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2" />{" "}
								Online
							</div>
						</td>
						<td className="px-6 py-4">
							<a
								// biome-ignore lint/a11y/useValidAnchor: <explanation>
								href="#"
								className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
							>
								Edit user
							</a>
						</td>
					</tr>
					<tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
						<td className="w-4 p-4">
							<div className="flex items-center">
								<input
									id="checkbox-table-search-2"
									type="checkbox"
									className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label htmlFor="checkbox-table-search-2" className="sr-only">
									checkbox
								</label>
							</div>
						</td>
						<th
							scope="row"
							className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
						>
							<Image
								className="w-10 h-10 rounded-full"
								src="https://picsum.photos/id/684/40/40"
								width={40}
								height={40}
								alt="Jese image"
							/>
							<div className="ps-3">
								<div className="text-base font-semibold">Jese Leos</div>
								<div className="font-normal text-gray-500">
									jese@flowbite.com
								</div>
							</div>
						</th>
						<td className="px-6 py-4">Vue JS Developer</td>
						<td className="px-6 py-4">
							<div className="flex items-center">
								<div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2" />{" "}
								Online
							</div>
						</td>
						<td className="px-6 py-4">
							<a
								// biome-ignore lint/a11y/useValidAnchor: <explanation>
								href="#"
								className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
							>
								Edit user
							</a>
						</td>
					</tr>
					<tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
						<td className="w-4 p-4">
							<div className="flex items-center">
								<input
									id="checkbox-table-search-2"
									type="checkbox"
									className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label htmlFor="checkbox-table-search-2" className="sr-only">
									checkbox
								</label>
							</div>
						</td>
						<th
							scope="row"
							className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
						>
							<Image
								className="w-10 h-10 rounded-full"
								src="https://picsum.photos/id/684/40/40"
								width={40}
								height={40}
								alt="Jese image"
							/>
							<div className="ps-3">
								<div className="text-base font-semibold">Thomas Lean</div>
								<div className="font-normal text-gray-500">
									thomes@flowbite.com
								</div>
							</div>
						</th>
						<td className="px-6 py-4">UI/UX Engineer</td>
						<td className="px-6 py-4">
							<div className="flex items-center">
								<div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2" />{" "}
								Online
							</div>
						</td>
						<td className="px-6 py-4">
							<a
								// biome-ignore lint/a11y/useValidAnchor: <explanation>
								href="#"
								className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
							>
								Edit user
							</a>
						</td>
					</tr>
					<tr className="hover:bg-gray-50 dark:hover:bg-gray-600">
						<td className="w-4 p-4">
							<div className="flex items-center">
								<input
									id="checkbox-table-search-3"
									type="checkbox"
									className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label htmlFor="checkbox-table-search-3" className="sr-only">
									checkbox
								</label>
							</div>
						</td>
						<th
							scope="row"
							className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
						>
							<Image
								className="w-10 h-10 rounded-full"
								src="https://picsum.photos/id/684/40/40"
								width={40}
								height={40}
								alt="Jese image"
							/>
							<div className="ps-3">
								<div className="text-base font-semibold">Leslie Livingston</div>
								<div className="font-normal text-gray-500">
									leslie@flowbite.com
								</div>
							</div>
						</th>
						<td className="px-6 py-4">SEO Specialist</td>
						<td className="px-6 py-4">
							<div className="flex items-center">
								<div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2" />{" "}
								Offline
							</div>
						</td>
						<td className="px-6 py-4">
							<a
								// biome-ignore lint/a11y/useValidAnchor: <explanation>
								href="#"
								className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
							>
								Edit user
							</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
