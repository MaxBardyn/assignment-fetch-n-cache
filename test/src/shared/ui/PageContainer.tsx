import type { PropsWithChildren } from 'react'
import { Box, Container, Paper } from '@mui/material'

type PageContainerProps = PropsWithChildren

export function PageContainer({ children }: PageContainerProps) {
  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: { xs: 3, md: 6 } }}>
      <Container maxWidth="lg">
        <Paper sx={{ minHeight: '80vh', p: { xs: 3, md: 5 } }}>{children}</Paper>
      </Container>
    </Box>
  )
}