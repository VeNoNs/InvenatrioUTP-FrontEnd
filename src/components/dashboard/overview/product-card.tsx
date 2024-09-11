import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, Stack, Box } from '@mui/material';
import Chip from '@mui/material/Chip';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';  // Importa la extensión

dayjs.extend(relativeTime);  // Extiende dayjs con la funcionalidad de tiempo relativo

// Definición de la interfaz Product (Producto)
interface Product {
  id: string;
  title: string;
  description: string;
  stock: number;
  logo: string;  // URL del logo del producto
  updatedAt: Date;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps): React.JSX.Element {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
      <CardMedia
        component="img"
        image={product.logo}
        alt={`${product.title} logo`}
        sx={{ height: 140, objectFit: 'contain' }}  // Tamaño del logo y ajuste
      />
      <CardContent>
        <Stack spacing={2}>
          {/* Título del producto */}
          <Typography variant="h6" component="div">
            {product.title}
          </Typography>

          {/* Descripción del producto */}
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>

          {/* Cantidad en stock */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Chip
              label={`Stock: ${product.stock}`}
              color={product.stock > 0 ? 'success' : 'error'}
            />

            {/* Fecha de actualización */}
            <Typography variant="body2" color="text.secondary">
              {`Actualizado hace ${dayjs(product.updatedAt).fromNow()}`} {/* Aquí ya funciona */}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
