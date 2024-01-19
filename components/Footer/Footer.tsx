import { Container, Divider, Logotype, NavItemsList } from "@/components";
import Link from "next/link";
import {} from "../Divider";

const Footer = () => (
  <Container>
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-col sm:flex-row items-center sm:gap-0 gap-4 sm:justify-between">
          <Logotype />
          <div className="flex flex-col sm:flex-row flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 sm:gap-7 gap-2">
            <NavItemsList />
          </div>
        </div>
        <Divider />
        <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Step by step™
          </a>
          . All Rights Reserved.
        </p>
        <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Developed by{" "}
          <Link href="https://holakirr.com/" className="hover:underline">
            holakirr
          </Link>
          .
        </p>
      </div>
    </footer>
  </Container>
);

export { Footer };
