// navIcons.tsx (Archivo separado)
import type { Icon } from '@phosphor-icons/react/dist/lib/types';
import { ChartPie as ChartPieIcon } from '@phosphor-icons/react/dist/ssr/ChartPie';
import { GearSix as GearSixIcon } from '@phosphor-icons/react/dist/ssr/GearSix';
import { PlugsConnected as PlugsConnectedIcon } from '@phosphor-icons/react/dist/ssr/PlugsConnected';
import { User as UserIcon } from '@phosphor-icons/react/dist/ssr/User';
import { Users as UsersIcon } from '@phosphor-icons/react/dist/ssr/Users';
import { Handshake as HandshakeIcon } from '@phosphor-icons/react/dist/ssr/Handshake'; // Ícono para Proveedores
import { Package as PackageIcon } from '@phosphor-icons/react/dist/ssr/Package'; // Ícono para Productos
import { ShoppingCart as ShoppingCartIcon } from '@phosphor-icons/react/dist/ssr/ShoppingCart'; // Ícono para Pedidos
import { CurrencyDollar as CurrencyDollarIcon } from '@phosphor-icons/react/dist/ssr/CurrencyDollar'; // Ícono para Ventas
import { XSquare } from '@phosphor-icons/react/dist/ssr/XSquare';

export const navIcons = {
  'chart-pie': ChartPieIcon,
  'gear-six': GearSixIcon,
  'plugs-connected': PlugsConnectedIcon,
  'x-square': XSquare,
  user: UserIcon,
  users: UsersIcon,
  handshake: HandshakeIcon, // Nuevo ícono
  package: PackageIcon,     // Nuevo ícono
  'shopping-cart': ShoppingCartIcon, // Nuevo ícono
  'currency-dollar': CurrencyDollarIcon, // Nuevo ícono
} as Record<string, Icon>;
