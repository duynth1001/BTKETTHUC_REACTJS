import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import BtnShowingMovie from '../BtnShowingMovie/BtnShowingMovie'

const BtnShowingMovieGroup = () => {
  return (
    <Box>
    <Container maxWidth="lg">
      <Stack
        direction="row"
        spacing={2}
        sx={{ justifyContent: "center", padding: "3vh" }}
      >
      {BtnShowingMovie('PHIM HOT')}
      {BtnShowingMovie('PHIM ĐANG CHIẾU')}
      {BtnShowingMovie('PHIM SẮP CHIẾU')}
      </Stack>
    </Container>
  </Box>
  )
}

export default BtnShowingMovieGroup
