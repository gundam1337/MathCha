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
      className="px-2 py-2 sm:px-4 md:px-8 lg:px-16 xl:px-20"
    >
      <NavbarBrand>
        <MathChaLogo />
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#" color="foreground" size="md">
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
