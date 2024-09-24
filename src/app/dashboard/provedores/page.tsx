'use client';
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

import { CustomersFilters } from '@/components/dashboard/customer/customers-filters';
import { CustomersTable } from '@/components/dashboard/customer/customers-table';
import type { Customer } from '@/components/dashboard/customer/customers-table';

const customers = [
  // Tu array de clientes
  {
    id: 'USR-010',
    name: 'Alcides Antonio',
    avatar: '/assets/avatar-10.png',
    email: 'alcides.antonio@devias.io',
    phone: '908-691-3242',
    address: { city: 'Madrid', country: 'Spain', state: 'Comunidad de Madrid', street: '4158 Hedge Street' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  // ... Otros clientes
] satisfies Customer[];

export default function Page(): React.JSX.Element {
  const [open, setOpen] = React.useState(false);
  const page = 0;
  const rowsPerPage = 5;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const paginatedCustomers = applyPagination(customers, page, rowsPerPage);

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Proveedores</Typography>
        </Stack>
        <div>
          <Button
            startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />}
            variant="contained"
            onClick={handleClickOpen} // Abre el modal
          >
            Agregar
          </Button>
        </div>
      </Stack>

      {/* Filtros de clientes */}
      <CustomersFilters />

      {/* Tabla de clientes */}
      <CustomersTable
        count={paginatedCustomers.length}
        page={page}
        rows={paginatedCustomers}
        rowsPerPage={rowsPerPage}
      />

      {/* Modal para agregar cliente */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Agregar Proveedor</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <TextField label="Nombre" fullWidth />
            <TextField label="Email" fullWidth />
            <TextField label="Teléfono" fullWidth />
            <TextField label="Dirección" fullWidth />
            <TextField label="Fecha de Creación" type="date" InputLabelProps={{ shrink: true }} fullWidth />
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

function applyPagination(rows: Customer[], page: number, rowsPerPage: number): Customer[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
