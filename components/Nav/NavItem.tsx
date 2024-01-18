import Link from "next/link";

type NavItemProps = {
  label: string;
  href: string;
};

export const NavItem = ({ label, href }: NavItemProps) => {
  return (
    <Link
      href={href}
      className="text-sm font-semibold leading-6 rounded-lg px-2 py-0 hover:text-indigo-500 dark:hover:bg-indigo-500 transition-all dark:hover:text-white"
    >
      {label}
    </Link>
  );
};

export const MobileNavItem = ({ label, href }: NavItemProps) => (
  <a
    href={href}
    className="-mx-3 block rounded-lg px-2 py-0 text-base font-semibold leading-7 hover:bg-gray-50 dark:hover:bg-indigo-500 transition-all dark:hover:text-white"
  >
    {label}
  </a>
);
