import React from 'react';
import { TableCell, TableRow, IconButton, Tooltip, Typography } from '@mui/material';
import { Carro } from '../../models/carro';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTheme } from '@mui/material/styles';

interface CarroRowProps {
    carro: Carro;
    navigate: (path: string) => void;
}

const CarroRow: React.FC<CarroRowProps> = ({ carro, navigate }) => {
    const theme = useTheme();

    return (
        <TableRow hover>
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
                        // onClick={() => handleDelete(carro)} 
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
    );
};

export default CarroRow;