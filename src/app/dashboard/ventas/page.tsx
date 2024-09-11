'use client'; // Directiva para que este componente funcione en el cliente

import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import dayjs from 'dayjs';

import { SalesTable } from '@/components/dashboard/overview/sales-table';
 
// Definición de la interfaz Sale (Venta)
interface Sale {
  id: string;
  customer: { name: string };
  amount: number;  // Cantidad total de la venta
  createdAt: Date;
  status: 'pending' | 'completed' | 'refunded';  // Estados consistentes
}

// Datos de las ventas con el tipado adecuado
const sales: Sale[] = [
  {
    id: 'SALE-001',
    customer: { name: 'Juan Pérez' },
    amount: 1000.00,
    status: 'pending',
    createdAt: dayjs().subtract(5, 'hours').toDate(),
  },
  {
    id: 'SALE-002',
    customer: { name: 'María López' },
    amount: 2000.50,
    status: 'completed',
    createdAt: dayjs().subtract(1, 'day').toDate(),
  },
  {
    id: 'SALE-003',
    customer: { name: 'Carlos García' },
    amount: 500.75,
    status: 'refunded',
    createdAt: dayjs().subtract(2, 'days').toDate(),
  },
  // Más ventas...
];

export default function SalesPage(): React.JSX.Element {
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
          <Typography variant="h4">Ventas</Typography>
        </Stack>
        <div>
          <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
            Agregar Venta
          </Button>
        </div>
      </Stack>
      <SalesTable
        sales={sales}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </Stack>
  );
}
