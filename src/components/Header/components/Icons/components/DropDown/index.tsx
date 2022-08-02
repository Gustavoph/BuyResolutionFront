import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { FiSearch, FiUser, FiShoppingBag } from 'react-icons/fi'

function Icon(icon: string) {
  if (icon === 'user') return <FiUser />
  else if (icon === 'market') return <FiShoppingBag />
  else return <FiSearch />
}
interface DropDownProps {
  icon: string
}

export function DropDown({ icon }: DropDownProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>{Icon(icon)}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Item>Sair</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
