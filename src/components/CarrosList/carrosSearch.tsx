import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { handleSearch, getAllPaginated } from '../../store/slices/carro/actions';
import { setFilters } from '../../store/slices/carro/reducer';

const CarrosSearch: React.FC = () => {
    const [modelo, setModelo] = useState<string>('');
    const [fabricante, setFabricante] = useState<string>('');
    const [pais, setPais] = useState<string>('');
    const dispatch = useDispatch();

    const onSearch = () => {
        dispatch(handleSearch({ modelo, fabricante, pais }));
    };

    const onReset = () => {
        setModelo('');
        setFabricante('');
        setPais('');
        
        dispatch(setFilters({}));
    
        dispatch(getAllPaginated(0, 10));
    };

    return (
        <Box mb={3}>
            <Typography variant="h6" gutterBottom>
                Pesquisar Carros
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        label="Modelo"
                        value={modelo}
                        onChange={(e) => setModelo(e.target.value)}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        label="Fabricante"
                        value={fabricante}
                        onChange={(e) => setFabricante(e.target.value)}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        label="País"
                        value={pais}
                        onChange={(e) => setPais(e.target.value)}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={onSearch}
                        fullWidth
                    >
                        Pesquisar
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={onReset}
                        fullWidth
                    >
                        Limpar
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CarrosSearch;
