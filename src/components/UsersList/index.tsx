import { Grid, Container } from '@mui/material';
import UsersTable from './UsersTable';

function UsersList() {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={12}>
          <UsersTable />
        </Grid>
      </Grid>
    </Container>
  );
}

export default UsersList;