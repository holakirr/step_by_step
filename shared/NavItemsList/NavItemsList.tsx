import { NavItem } from "../";
import { navItems } from "../../constants";

export const NavItemsList = () =>
	navItems.map((item) => <NavItem key={item.label} {...item} />);
