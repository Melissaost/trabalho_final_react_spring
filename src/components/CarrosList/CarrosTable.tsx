import {
  Box,
  Card,
  CardHeader,
  Divider,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
  Typography,
  useTheme
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Carro } from '../../models/carro';
import { useDispatch, useSelector } from "react-redux";
import { deleteCarro, getAllPaginated } from '../../store/slices/carro/actions';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const CarrosTable: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const dispatch = useDispatch();

  // Pegando os dados da store
  const { carros, loading, total } = useSelector((state: any) => {
    return state.carros || { carros: [], loading: false, total: 0 };
  });

  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);

  const handlePageChange = (event: unknown, newPage: number) => {
    dispatch(getAllPaginated(newPage, limit)); 
    setPage(newPage);
  };

  const handleLimitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLimit = parseInt(event.target.value, 10);
    setPage(0);
    setLimit(newLimit);
    dispatch(getAllPaginated(0, newLimit));
  };

  const handleDelete = (carro) => {
    dispatch(deleteCarro(carro)); 
  };

  useEffect(() => {
    dispatch(getAllPaginated(0, limit)); 
  }, [dispatch, limit]);


  return (
    <Card>
      <CardHeader title="Carros" />
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
              <TableRow>
                <TableCell colSpan={5}>Carregando...</TableCell>
              </TableRow>
            ) : (
              carros.map((carro: Carro) => (
                <TableRow hover key={carro.id}>
                  <TableCell>
                    <Typography variant="body1" fontWeight="bold" color="text.primary" gutterBottom noWrap>
                      {carro.id}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1" fontWeight="bold" color="text.secondary" gutterBottom noWrap>
                      {carro.modelo}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1" fontWeight="bold" color="text.secondary" gutterBottom noWrap>
                      {carro.cor}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1" fontWeight="bold" color="text.secondary" gutterBottom noWrap>
                      {carro.fabricante}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip title="Editar Carro" arrow>
                      <IconButton
                        onClick={() => navigate(`/detalhes/${carro.id}`)}
                        sx={{
                          '&:hover': { backgroundColor: theme.palette.primary.light },
                          color: theme.palette.primary.main
                        }}
                        size="small"
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Deletar Carro" arrow>
                      <IconButton
                        onClick={() => handleDelete(carro)}
                        sx={{
                          '&:hover': { backgroundColor: theme.palette.error.light },
                          color: theme.palette.error.main
                        }}
                        size="small"
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2}>
        <TablePagination
          component="div"
          count={total}
          page={page}
          rowsPerPage={limit}
          onRowsPerPageChange={handleLimitChange}
          onPageChange={handlePageChange}
          rowsPerPageOptions={[5, 10, 25, 50, 70]}
        />
      </Box>
    </Card>
  );
};

export default CarrosTable;