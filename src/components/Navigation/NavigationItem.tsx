import { NavbarItem } from "@nextui-org/react";
import Link from "next/link";

export type NavigationItemProps = {
  href: string;
  label: React.ReactNode;
  isActive?: boolean;
};

const NavigationItem = ({ href, label, isActive }: NavigationItemProps) => {
  return (
    <NavbarItem isActive={isActive}>
      <Link href={href}>{label}</Link>
    </NavbarItem>
  );
};

export default NavigationItem;
