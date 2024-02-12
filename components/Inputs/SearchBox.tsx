import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { InputHTMLAttributes } from "react";
import { Input } from ".";

type SearchBoxProps = InputHTMLAttributes<HTMLInputElement>;

export const SearchBox = ({ id, className, placeholder }: SearchBoxProps) => (
	<Input
		label="Search"
		icon={MagnifyingGlassIcon}
		id={`${id}-search`}
		className={className}
		placeholder={placeholder ? `Search for ${placeholder}` : "Search"}
	/>
);
