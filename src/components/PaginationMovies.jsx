import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationMovies() {

  return (
    <Stack spacing={2} sx={{display:"flex", justifyContent:"center", alignItems:"center"}} margin="30px">
      <Pagination size='large' variant='outlined' count={42} color="secondary" page={10} />
    </Stack>
  );
}