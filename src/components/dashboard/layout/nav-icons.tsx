// navIcons.tsx
import type { Icon } from '@phosphor-icons/react/dist/lib/types';
import { ChartPie as ChartPieIcon } from '@phosphor-icons/react/dist/ssr/ChartPie';
import { GearSix as GearSixIcon } from '@phosphor-icons/react/dist/ssr/GearSix';
import { PlugsConnected as PlugsConnectedIcon } from '@phosphor-icons/react/dist/ssr/PlugsConnected';
import { User as UserIcon } from '@phosphor-icons/react/dist/ssr/User';
import { Users as UsersIcon } from '@phosphor-icons/react/dist/ssr/Users';
import { Handshake as HandshakeIcon } from '@phosphor-icons/react/dist/ssr/Handshake'; 
import { Package as PackageIcon } from '@phosphor-icons/react/dist/ssr/Package';
import { ShoppingCart as ShoppingCartIcon } from '@phosphor-icons/react/dist/ssr/ShoppingCart';
import { CurrencyDollar as CurrencyDollarIcon } from '@phosphor-icons/react/dist/ssr/CurrencyDollar';
import { SignIn as SignInIcon } from '@phosphor-icons/react/dist/ssr/SignIn'; 
import { SignOut as SignOutIcon } from '@phosphor-icons/react/dist/ssr/SignOut'; 
import { Tag as TagIcon } from '@phosphor-icons/react/dist/ssr/Tag';
import { UserCircle as UserCircleIcon } from '@phosphor-icons/react/dist/ssr/UserCircle';
import { X as XIcon } from '@phosphor-icons/react/dist/ssr/X'; // Nuevo ícono para reemplazar "XSquare"

export const navIcons = {
  'chart-pie': ChartPieIcon,
  'gear-six': GearSixIcon,
  'plugs-connected': PlugsConnectedIcon,
  'x': XIcon, // Nuevo ícono para reemplazar "x-square"
  user: UserIcon,
  users: UsersIcon,
  handshake: HandshakeIcon,
  package: PackageIcon,
  'shopping-cart': ShoppingCartIcon,
  'currency-dollar': CurrencyDollarIcon,
  'sign-in': SignInIcon,  
  'sign-out': SignOutIcon, 
  tag: TagIcon,           
  'user-circle': UserCircleIcon,
} as Record<string, Icon>;
