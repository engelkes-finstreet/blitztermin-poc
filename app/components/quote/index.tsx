import {
  Box,
  Circle,
  Flex,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { QuoteIcon } from "./QuoteIcon";

type Props = {
  text: string;
};

export function Quote({ text }: Props) {
  return (
    <Box as="section" bg={useColorModeValue("gray.50", "gray.800")}>
      <Box maxW="3xl" mx="auto" px={{ base: "6", md: "8" }} pt="12" pb="16">
        <Flex direction="column" align="center" textAlign="center">
          <QuoteIcon
            color={useColorModeValue("gray.300", "gray.400")}
            fontSize={{ base: "3xl", md: "6xl" }}
          />
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="medium"
            mt="6"
            color="gray.400"
          >
            &ldquo;{text}&rdquo;
          </Text>
        </Flex>
        <HStack
          justify="center"
          spacing="4"
          mt="8"
          color={useColorModeValue("gray.300", "gray.600")}
        >
          <Circle size="3" bg="blue.500" />
          <Circle size="2" bg="currentColor" />
          <Circle size="2" bg="currentColor" />
        </HStack>
      </Box>
    </Box>
  );
}
