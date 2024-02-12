import Link from "next/link";
import { Container, Divider, Logotype, NavItemsList } from "../";

export const Footer = () => (
	<Container className="mt-auto">
		<footer className="p-4 md:px-8">
			<div className="flex flex-col sm:flex-row items-center sm:gap-0 gap-4 sm:justify-between">
				<Logotype />
				<div className="flex flex-col sm:flex-row flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 sm:gap-7 gap-2">
					<NavItemsList />
				</div>
			</div>
			<Divider />
			<p className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
				© 2024{" "}
				<Link href="/" className="hover:underline">
					Step by step™
				</Link>
				. All Rights Reserved.
			</p>
			<p className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
				Developed by{" "}
				<Link href="https://holakirr.com/" className="hover:underline">
					holakirr
				</Link>
				.
			</p>
		</footer>
	</Container>
);
