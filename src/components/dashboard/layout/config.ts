// navItems.tsx
import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: 'Dashboard', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'customers', title: 'Clientes', href: paths.dashboard.customers, icon: 'users' },
  { key: 'products', title: 'Productos', href: paths.dashboard.integrations, icon: 'package' }, // Icono "package"
  { key: 'providers', title: 'Proveedores', href: paths.dashboard.provedores, icon: 'handshake' }, // Icono "handshake"
  { key: 'entradas', title: 'Entradas', href: paths.dashboard.entradas, icon: 'sign-in' }, // Icono cambiado a "sign-in"
  { key: 'sales', title: 'Salidas', href: paths.dashboard.salidas, icon: 'sign-out' }, // Icono cambiado a "sign-out"
  { key: 'categorias', title: 'Categorias', href: paths.dashboard.categorias, icon: 'tag' }, // Icono cambiado a "tag"
  { key: 'usuarios', title: 'Usuarios', href: paths.dashboard.usuarios, icon: 'user-circle' }, // Icono cambiado a "user-circle"
  { key: 'settings', title: 'Configuración', href: paths.dashboard.settings, icon: 'gear-six' },
] satisfies NavItemConfig[];
