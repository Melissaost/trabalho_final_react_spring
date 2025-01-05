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
            const allCars = await carroService.getAll(total);
            const dataToExport = allCars.map((carro) => ({
                modelo: carro.modelo,
                ano: carro.ano,
                cor: carro.cor,
                cavalosDePotencia: carro.cavalosDePotencia,
                fabricante: carro.fabricante,
                pais: carro.pais,
            }));

            const csvContent = [
                ['Modelo', 'Ano', 'Cor', 'Cavalos de Potência', 'Fabricante', 'País'],
                ...dataToExport.map(carro => [
                    carro.modelo,
                    carro.ano,
                    carro.cor,
                    carro.cavalosDePotencia,
                    carro.fabricante,
                    carro.pais,
                ])
            ]
                .map(row => row.join(','))
                .join('\n');

            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'carros.csv');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
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