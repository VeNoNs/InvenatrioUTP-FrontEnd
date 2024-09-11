'use client'; // Directiva para que este componente funcione en el cliente

import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import dayjs from 'dayjs';

import { OrdersTable } from '@/components/dashboard/overview/orders-table';

// Definición de la interfaz Order
interface Order {
  id: string;
  customer: { name: string };
  createdAt: Date;
  status: 'pending' | 'delivered' | 'refunded';
}

// Datos de las órdenes con el tipado adecuado
const orders: Order[] = [
  {
    id: 'ORD-007',
    customer: { name: 'Ekaterina Tankova' },
    status: 'pending',
    createdAt: dayjs().subtract(10, 'minutes').toDate(),
  },
  {
    id: 'ORD-006',
    customer: { name: 'Cao Yu' },
    status: 'delivered',
    createdAt: dayjs().subtract(10, 'minutes').toDate(),
  },
  {
    id: 'ORD-004',
    customer: { name: 'Alexa Richardson' },
    status: 'refunded',
    createdAt: dayjs().subtract(10, 'minutes').toDate(),
  },
  // Más órdenes...
];

export default function Page(): React.JSX.Element {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handlePageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Pedidos</Typography>
        </Stack>
        <div>
          <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
            Agregar Pedido
          </Button>
        </div>
      </Stack>
      <OrdersTable
        orders={orders}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </Stack>
  );
}
