// navItems.tsx (Archivo separado)
import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: 'Dashboard', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'customers', title: 'Clientes', href: paths.dashboard.customers, icon: 'users' },
  { key: 'products', title: 'Productos', href: paths.dashboard.integrations, icon: 'package' }, // Icono cambiado a "package"
  { key: 'providers', title: 'Proveedores', href: paths.dashboard.provedores, icon: 'handshake' }, // Icono cambiado a "handshake"
  { key: 'orders', title: 'Pedidos', href: paths.dashboard.pedidos, icon: 'shopping-cart' }, // Icono cambiado a "shopping-cart"
  { key: 'sales', title: 'Ventas', href: paths.dashboard.ventas, icon: 'currency-dollar' }, // Icono cambiado a "currency-dollar"
  { key: 'settings', title: 'Configuración', href: paths.dashboard.settings, icon: 'gear-six' },
] satisfies NavItemConfig[];
