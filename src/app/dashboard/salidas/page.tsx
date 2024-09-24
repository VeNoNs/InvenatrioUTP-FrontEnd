'use client'; // Directiva para que este componente funcione en el cliente

import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import dayjs from 'dayjs';

import { SalesTable } from '@/components/dashboard/overview/sales-table';

// Definición de la interfaz Sale (Venta)
interface Sale {
  id: string;
  customer: { name: string };
  amount: number;
  createdAt: Date;
  status: 'pending' | 'completed' | 'refunded';
}

// Datos de las ventas con el tipado adecuado
const sales: Sale[] = [
  {
    id: 'SALE-001',
    customer: { name: 'Juan Pérez' },
    amount: 1000.0,
    status: 'pending',
    createdAt: dayjs().subtract(5, 'hours').toDate(),
  },
  {
    id: 'SALE-002',
    customer: { name: 'María López' },
    amount: 2000.5,
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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          <Typography variant="h4">Salidas</Typography>
        </Stack>
        <div>
          <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained" onClick={handleClickOpen}>
            Agregar Salida
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

      {/* Modal para agregar venta */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Agregar Salida</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <TextField label="Nombre del Cliente" fullWidth />
            <TextField label="Cantidad" type="number" fullWidth />
            <TextField label="Fecha de Venta" type="date" InputLabelProps={{ shrink: true }} fullWidth />
            <TextField label="Estado" fullWidth select>
              <option value="pending">Pendiente</option>
              <option value="completed">Completada</option>
              <option value="refunded">Reembolsada</option>
            </TextField>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button variant="contained" onClick={handleClose}>Guardar</Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}
