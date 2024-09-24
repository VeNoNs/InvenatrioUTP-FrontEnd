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
  const [open, setOpen] = React.useState(false);

  // Manejar apertura/cierre del modal
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
          <Typography variant="h4">Entradas</Typography>
        </Stack>
        <div>
          <Button 
            startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} 
            variant="contained"
            onClick={handleClickOpen} // Abrir el modal
          >
            Agregar Entradas
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

      {/* Modal para agregar pedido */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Agregar Pedido</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <TextField label="Nombre del Cliente" fullWidth />
            <TextField label="Fecha de Creación" type="date" InputLabelProps={{ shrink: true }} fullWidth />
            <TextField label="Estado" select fullWidth SelectProps={{ native: true }}>
              <option value="pending">Pendiente</option>
              <option value="delivered">Entregado</option>
              <option value="refunded">Reembolsado</option>
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
