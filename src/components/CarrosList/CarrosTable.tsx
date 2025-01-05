import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import { getAllPaginated } from '../../store/slices/carro/actions';
import { Carro } from '../../models/carro';
import { Box, Card, CardHeader, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import CarroRow from './CarroRow';
import TablePaginationComponent from './TablePaginationComponent';
import ExportButton from './ExportButton';

const CarrosTable: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carros, loading, total, filters } = useSelector((state: any) => state.carros || { carros: [], loading: false, total: 0, filters: {} });
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);

  const handlePageChange = (event: unknown, newPage: number) => {
    dispatch(getAllPaginated(newPage, limit));
    setPage(newPage);
  };

  useEffect(() => {
    if (filters && Object.keys(filters).length > 0) {
      setPage(0);
    }
  }, [filters]);

  const handleLimitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLimit = parseInt(event.target.value, 10);
    setPage(0);
    setLimit(newLimit);
    dispatch(getAllPaginated(0, newLimit));
  };

  useEffect(() => {
    if (!carros.length) {
      dispatch(getAllPaginated(0, limit));
    }
  }, [dispatch, limit]);

  const rowsPerPageOptions = filters && Object.keys(filters).length > 0 ? [15] : [5, 10, 15, 25, 50, total];

  return (
    <Card>
      <div className="flex justify-between items-center pl-2.5 pr-2.5">
        <CardHeader title="Carros" />
        <ExportButton total={total} />
      </div>
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Modelo</TableCell>
              <TableCell>Cor</TableCell>
              <TableCell>Fabricante</TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow><TableCell colSpan={5}>Carregando...</TableCell></TableRow>
            ) : (
              carros.map((carro: Carro) => (
                <CarroRow key={carro.id} carro={carro} navigate={navigate} />
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2}>
        <TablePaginationComponent
          count={total}
          page={page}
          limit={limit}
          handlePageChange={handlePageChange}
          handleLimitChange={handleLimitChange}
          rowsPerPageOptions={rowsPerPageOptions}
        />
      </Box>
    </Card>
  );
};

export default CarrosTable;