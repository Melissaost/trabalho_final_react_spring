import { Grid, Container } from '@mui/material';
import CarrosTable from './CarrosTable';
import CarrosSearch from './CarrosSearch';

function CarrosList() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} padding={5}>
        <Grid item xs={12}>
          <CarrosSearch />
        </Grid>
        <Grid item xs={12}>
          <CarrosTable />
        </Grid>
      </Grid>
    </Container>
  );
}

export default CarrosList;