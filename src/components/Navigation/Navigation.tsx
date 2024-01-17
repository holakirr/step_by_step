"use client";

import { menuItems } from "@/src/const";
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import NavigationItem from "./NavigationItem";

const Navigation = (): JSX.Element => (
  <Navbar className="bg-red">
    <NavbarBrand>
      {Logo ? (
        <Image alt="Logo" height={40} src={Logo} width={40} />
      ) : (
        <p className="font-bold text-inherit">Step by step</p>
      )}
    </NavbarBrand>
    <NavbarContent className="gap-4" justify="center">
      {menuItems.map((item) => (
        <NavigationItem key={item.href} {...item} />
      ))}
    </NavbarContent>
    <NavbarContent justify="end">
      <NavbarItem className="hidden lg:flex">
        <Link href="#">Login</Link>
      </NavbarItem>
      <NavbarItem>
        <Button as={Link} color="primary" href="#" variant="flat">
          Sign Up
        </Button>
      </NavbarItem>
    </NavbarContent>
  </Navbar>
);

export { Navigation };
