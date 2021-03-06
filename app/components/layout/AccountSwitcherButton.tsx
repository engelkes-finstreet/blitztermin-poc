import {Avatar, Box, Flex, FlexProps, HStack, Img, useMenuButton} from '@chakra-ui/react'
import * as React from 'react'
import { HiSelector } from 'react-icons/hi'

export const AccountSwitcherButton = (props: FlexProps) => {
    const buttonProps = useMenuButton(props)
    return (
        <Flex
            as="button"
            {...buttonProps}
            w="full"
            display="flex"
            alignItems="center"
            rounded="lg"
            bg="gray.700"
            px="3"
            py="2"
            fontSize="sm"
            userSelect="none"
            cursor="pointer"
            outline="0"
            transition="all 0.2s"
            _active={{ bg: 'gray.600' }}
            _focus={{ shadow: 'outline' }}
        >
            <HStack flex="1" spacing="3">
                <Avatar name={"Patrick Engelkes"} size={"xs"} />
                <Box textAlign="start">
                    <Box isTruncated fontWeight="semibold">
                        Senger - Blitztermin
                    </Box>
                    <Box fontSize="xs" color="gray.400">
                        Patrick Engelkes
                    </Box>
                </Box>
            </HStack>
            <Box fontSize="lg" color="gray.400">
                <HiSelector />
            </Box>
        </Flex>
    )
}