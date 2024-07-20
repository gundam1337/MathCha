import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {MathChaLogo} from "./MathChaLogo";

//TODO : make the logo responsive
export default function Navigationbar() {
  return (
    <Navbar>
      <NavbarBrand>
        <MathChaLogo />
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#" color="foreground" size="lg">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link}  href="#"  size="lg" variant="bordered">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
