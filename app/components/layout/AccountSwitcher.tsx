import {
    Menu,
    MenuDivider,
    MenuItem,
    MenuItemOption,
    MenuList,
    MenuOptionGroup,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { AccountSwitcherButton } from './AccountSwitcherButton'

export const AccountSwitcher = () => {
    return (
        <Menu>
            <AccountSwitcherButton />
        </Menu>
    )
}