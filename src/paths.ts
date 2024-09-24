export const paths = {
  home: '/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  dashboard: {
    overview: '/dashboard',
    account: '/dashboard/account',
    customers: '/dashboard/customers',
    entradas: '/dashboard/entradas',
    salidas: '/dashboard/salidas',
    provedores: '/dashboard/provedores',
    usuarios: '/dashboard/usuarios',
    categorias: '/dashboard/categorias',
    integrations: '/dashboard/integrations',
    settings: '/dashboard/settings',
  },
  errors: { notFound: '/errors/not-found' },
} as const;
