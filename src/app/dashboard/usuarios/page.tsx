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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';

// Datos de ejemplo de usuarios
const usersData = [
  { id: 1, name: 'Juan Pérez', email: 'juan.perez@example.com', phone: '123-456-7890' },
  { id: 2, name: 'Ana Martínez', email: 'ana.martinez@example.com', phone: '098-765-4321' },
  { id: 3, name: 'Carlos Gómez', email: 'carlos.gomez@example.com', phone: '555-555-5555' },
];

export default function UsuariosPage(): React.JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [newUser, setNewUser] = React.useState({
    name: '',
    email: '',
    phone: '',
  });

  // Control del modal
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Función para manejar la sumisión del formulario
  const handleSubmit = () => {
    console.log('Nuevo usuario:', newUser);
    handleClose();
  };

  // Actualiza los valores del formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Usuarios</Typography>
        </Stack>
        <div>
          <Button
            startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />}
            variant="contained"
            onClick={handleClickOpen}
          >
            Agregar
          </Button>
        </div>
      </Stack>

      {/* Tabla de usuarios */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Correo Electrónico</TableCell>
            <TableCell>Teléfono</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usersData.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Modal para agregar usuario */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Agregar nuevo usuario</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <TextField
              autoFocus
              label="Nombre"
              name="name"
              value={newUser.name}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Correo electrónico"
              name="email"
              value={newUser.email}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Teléfono"
              name="phone"
              value={newUser.phone}
              onChange={handleInputChange}
              fullWidth
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Agregar
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}
