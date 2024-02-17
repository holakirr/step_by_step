"use client";

import { Listbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

export type ListBoxOption = {
	name: string;
	id: string;
};

export const ListBoxItem = ({ id, name }: ListBoxOption) => (
	<Listbox.Option
		key={id}
		className={({ active }) =>
			`relative cursor-default select-none py-2 pl-10 pr-4 ${
				active &&
				"bg-amber-100/70 text-amber-900 dark:bg-amber-900/70 dark:text-amber-100"
			}`
		}
		value={{ id, name }}
	>
		{({ selected }) => (
			<>
				<span
					className={`block truncate ${
						selected ? "font-medium" : "font-normal"
					}`}
				>
					{name}
				</span>
				{selected && (
					<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
						<CheckIcon className="h-5 w-5" aria-hidden="true" />
					</span>
				)}
			</>
		)}
	</Listbox.Option>
);
