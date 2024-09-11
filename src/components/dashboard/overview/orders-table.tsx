import * as React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer, TablePagination, Paper, Chip } from '@mui/material';

interface Order {
  id: string;
  customer: { name: string };
  createdAt: Date;
  status: 'pending' | 'delivered' | 'refunded';
}

interface OrdersTableProps {
  orders: Order[];
  page: number;
  rowsPerPage: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export function OrdersTable({
  orders,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
}: OrdersTableProps): React.JSX.Element {
  // Función para traducir el estado de inglés a español
  const translateStatus = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Pendiente';
      case 'delivered':
        return 'Entregado';
      case 'refunded':
        return 'Reembolsado';
      default:
        return status;
    }
  };

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Orden</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Fecha</TableCell>
              <TableCell>Estado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer.name}</TableCell>
                <TableCell>{order.createdAt.toLocaleDateString('es-ES', { year: 'numeric', month: 'short', day: 'numeric' })}</TableCell>
                <TableCell>
                  <Chip
                    label={translateStatus(order.status)} // Traducir el estado aquí
                    color={
                      order.status === 'pending' ? 'warning' :
                      order.status === 'delivered' ? 'success' : 'error'
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
        count={orders.length}
        page={page}
        onPageChange={onPageChange}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={onRowsPerPageChange}
      />
    </Paper>
  );
}
