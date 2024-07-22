import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { MathChaLogo } from "./MathChaLogo";

export default function Navigationbar() {
  return (
    <Navbar
      maxWidth="full"
      className="px-6 py-4 sm:px-16 md:px-24 lg:px-32 xl:px-40"
    >
      <NavbarBrand>
        <MathChaLogo />
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#" color="foreground" size="lg">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href="#" size="lg" variant="bordered">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
