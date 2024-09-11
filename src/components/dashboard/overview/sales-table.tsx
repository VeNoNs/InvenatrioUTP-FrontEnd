import * as React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer, TablePagination, Paper, Chip } from '@mui/material';

// Definición de la interfaz Sale (Venta)
interface Sale {
  id: string;
  customer: { name: string };
  createdAt: Date;
  status: 'pending' | 'completed' | 'refunded';  // Estados consistentes
}

interface SalesTableProps {
  sales: Sale[];
  page: number;
  rowsPerPage: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export function SalesTable({
  sales,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
}: SalesTableProps): React.JSX.Element {
  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Venta</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Fecha</TableCell>
              <TableCell>Estado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sales.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((sale) => (
              <TableRow key={sale.id}>
                <TableCell>{sale.id}</TableCell>
                <TableCell>{sale.customer.name}</TableCell>
                <TableCell>{sale.createdAt.toLocaleDateString('es-ES', { year: 'numeric', month: 'short', day: 'numeric' })}</TableCell>
                <TableCell>
                  <Chip
                    label={
                      sale.status === 'pending' ? 'Pendiente' :
                      sale.status === 'completed' ? 'Completada' : 'Reembolsada'
                    }
                    color={
                      sale.status === 'pending' ? 'warning' :
                      sale.status === 'completed' ? 'success' : 'error'
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={sales.length}
        page={page}
        onPageChange={onPageChange}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={onRowsPerPageChange}
      />
    </Paper>
  );
}
