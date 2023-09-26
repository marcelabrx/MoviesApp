import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


export default function PaginationMovies({ page, setPage, totalPages}) {

  const handleChangePage = (e, page) => {
    setPage(page)
  };

  return (
    <Stack spacing={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} margin="30px">
      <Pagination
        size='large'
        variant='outlined'
        count={totalPages}
        color="secondary"
        page={page}
        onChange={handleChangePage}
      />
    </Stack>
  );
}