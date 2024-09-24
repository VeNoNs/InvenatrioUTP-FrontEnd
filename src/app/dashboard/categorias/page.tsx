'use client'; // Indica que este componente es del lado del cliente

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

// Datos de ejemplo de categorías
const categories = [
  { id: 1, name: 'Electrónica', description: 'Productos electrónicos' },
  { id: 2, name: 'Muebles', description: 'Mobiliario para el hogar' },
  { id: 3, name: 'Ropa', description: 'Vestimenta y accesorios' },
];

export default function CategoriasPage(): React.JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [newCategory, setNewCategory] = React.useState({
    name: '',
    description: '',
  });

  // Control del modal
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Función para manejar la sumisión del formulario
  const handleSubmit = () => {
    console.log('Nueva categoría:', newCategory);
    handleClose();
  };

  // Actualiza los valores del formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCategory(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Categorías</Typography>
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

      {/* Tabla de categorías */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Descripción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map(category => (
            <TableRow key={category.id}>
              <TableCell>{category.id}</TableCell>
              <TableCell>{category.name}</TableCell>
              <TableCell>{category.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Modal para agregar categoría */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Agregar nueva categoría</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <TextField
              autoFocus
              label="Nombre"
              name="name"
              value={newCategory.name}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Descripción"
              name="description"
              value={newCategory.description}
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
