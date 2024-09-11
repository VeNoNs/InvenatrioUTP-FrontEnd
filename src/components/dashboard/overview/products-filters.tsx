// src/components/dashboard/overview/products-filters.tsx

'use client';  // Agrega esta línea

import * as React from 'react';
import { TextField, MenuItem, Stack, Button } from '@mui/material';

// Opciones para filtrar productos
const filterOptions = [
  { value: 'all', label: 'Todos' },
  { value: 'inStock', label: 'En Stock' },
  { value: 'outOfStock', label: 'Agotados' },
];

export function ProductsFilters(): React.JSX.Element {
  const [filter, setFilter] = React.useState('all');

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      {/* Filtro por estado de stock */}
      <TextField
        select
        label="Filtrar"
        value={filter}
        onChange={handleFilterChange}
        variant="outlined"
        size="small"
        sx={{ minWidth: 120 }}
      >
        {filterOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      {/* Botón para aplicar filtros */}
      <Button variant="contained" color="primary">
        Aplicar Filtros
      </Button>
    </Stack>
  );
}
