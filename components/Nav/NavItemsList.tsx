import { navItems } from "@/const";
import { NavItem } from "./NavItem";

export const NavItemsList = () =>
  navItems.map((item) => <NavItem key={item.label} {...item} />);
