import { navItems } from "@/constants";
import { NavItem } from "@/shared/NavItem/NavItem";

export const NavItemsList = () =>
	navItems.map((item) => <NavItem key={item.label} {...item} />);
