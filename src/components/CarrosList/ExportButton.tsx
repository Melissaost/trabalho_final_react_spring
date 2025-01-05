import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import { useTheme } from '@mui/material/styles';
import CarroService from '../../services/CarroService';

interface ExportButtonProps {
    total: number;
}

const ExportButton: React.FC<ExportButtonProps> = ({ total }) => {
    const theme = useTheme();
    const carroService = new CarroService();

    const handleExportClick = async () => {
        try {
            await carroService.exportCars();
        } catch (error) {
            console.error('Erro ao exportar os carros:', error);
        }
    };

    return (
        <Tooltip title="Exportar arquivo CSV" arrow>
            <IconButton
                onClick={handleExportClick}
                sx={{
                    '&:hover': { backgroundColor: theme.palette.primary.light },
                    color: theme.palette.primary.main
                }}
                size="small"
            >
                <ImportExportIcon fontSize="small" />
            </IconButton>
        </Tooltip>
    );
};

export default ExportButton;