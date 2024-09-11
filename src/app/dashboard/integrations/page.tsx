import * as React from 'react';
import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import dayjs from 'dayjs';

import { config } from '@/config';
import { ProductCard } from '@/components/dashboard/overview/product-card'; // Nuevo componente para productos
import { ProductsFilters } from '@/components/dashboard/overview/products-filters'; // Filtros de productos (si es necesario)

// Metadatos actualizados para la página de productos
export const metadata = { title: `Productos en Stock | Dashboard | ${config.site.name}` } satisfies Metadata;

// Datos de los productos con cantidad en stock y descripción
const products = [
  {
    id: 'PROD-001',
    title: 'Coca Cola',
    description: 'Gaseosa refrescante de cola. 500ml.',
    stock: 120,
    logo: '/assets2/cocacola.webp',
    updatedAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'PROD-002',
    title: 'Pepsi',
    description: 'Gaseosa refrescante de cola. 500ml.',
    stock: 85,
    logo: '/assets2/pepsi.webp',
    updatedAt: dayjs().subtract(3, 'hours').toDate(),
  },
  {
    id: 'PROD-003',
    title: 'Galletas Oreo',
    description: 'Galletas de chocolate con relleno de crema.',
    stock: 150,
    logo: '/assets2/oreo.webp',
    updatedAt: dayjs().subtract(5, 'hours').toDate(),
  },
  {
    id: 'PROD-004',
    title: 'Pringles Original',
    description: 'Papas fritas sabor original. 165g.',
    stock: 60,
    logo: '/assets2/pringles.webp',
    updatedAt: dayjs().subtract(1, 'day').toDate(),
  },
  {
    id: 'PROD-005',
    title: 'Fanta',
    description: 'Gaseosa sabor naranja. 500ml.',
    stock: 95,
    logo: '/assets2/fanta.jpg',
    updatedAt: dayjs().subtract(6, 'hours').toDate(),
  },
  {
    id: 'PROD-006',
    title: 'Doritos',
    description: 'Tortilla chips sabor queso. 145g.',
    stock: 75,
    logo: '/assets2/doritos.png',
    updatedAt: dayjs().subtract(3, 'days').toDate(),
  },
];

export default function Page(): React.JSX.Element {
  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Productos en Stock</Typography>
        </Stack>
        <div>
          <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
            Agregar Producto
          </Button>
        </div>
      </Stack>

      {/* Filtros para los productos, si es necesario */}
      <ProductsFilters />

      {/* Grilla de productos */}
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product.id} lg={4} md={6} xs={12}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      {/* Paginación para la lista de productos */}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination count={3} size="small" />
      </Box>
    </Stack>
  );
}
