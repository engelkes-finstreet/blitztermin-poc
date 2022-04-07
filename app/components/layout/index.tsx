import {
  Box,
  Circle,
  Flex,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { Outlet } from "@remix-run/react";
import * as React from "react";
import {
  BiBuoy,
  BiCog,
  BiCommentAdd,
  BiCreditCard,
  BiEnvelope,
  BiHome,
  BiNews,
  BiPurchaseTagAlt,
  BiRecycle,
  BiRedo,
  BiUserCircle,
  BiWallet,
} from "react-icons/bi";
import { AccountSwitcher } from "./AccountSwitcher";
import { NavGroup } from "./NavGroup";
import { NavItem } from "./NavItem";

export const Layout = () => {
  return (
    <Box height="100vh" overflow="hidden" position="relative">
      <Flex h="full" id="app-container">
        <Box w="64" bg="gray.900" color="white" fontSize="sm">
          <Flex h="full" direction="column" px="4" py="4">
            <AccountSwitcher />
            <Stack spacing="8" flex="1" overflow="auto" pt="8">
              <Stack spacing="1">
                <NavItem
                  active
                  icon={<BiHome />}
                  label="Get Started"
                  href={"/"}
                />
              </Stack>
              <NavGroup label="Marke">
                <Stack spacing={2}>
                  <NavItem active label="VW" href={"/vw"} />
                  <NavItem active label="Audi" href={"/audi"} />
                </Stack>
              </NavGroup>

              <NavGroup label="Produktkategorie">
                <Stack spacing={2}>
                  <NavItem active label="Räderwechsel" href={"/reifen"} />
                  <NavItem active label="HU / AU" href={"/hu"} />
                </Stack>
              </NavGroup>

              <NavGroup label="Standort">
                <Stack spacing={2}>
                  <NavItem active label="Rheine" href={"/rheine"} />
                  <NavItem active label="Emsdetten" href={"/emsdetten"} />
                </Stack>
              </NavGroup>
            </Stack>
            <Box>
              <Stack spacing="1"></Stack>
            </Box>
          </Flex>
        </Box>
        <Box bg={mode("white", "gray.800")} flex="1" p="6">
          <Box
            w="full"
            h="full"
            rounded="lg"
            border="3px dashed currentColor"
            color={mode("gray.200", "gray.700")}
          >
            <Outlet />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
