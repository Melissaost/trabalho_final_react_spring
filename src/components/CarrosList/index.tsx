import { Grid, Container } from '@mui/material';
import CarrosTable from './CarrosTable';

function CarrosList() {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
        padding={5}
      >
        <Grid item xs={12}>
          <CarrosTable />
        </Grid>
      </Grid>
    </Container>
  );
}

export default CarrosList;