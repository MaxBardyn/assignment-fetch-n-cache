import type { PropsWithChildren } from "react";
import { Box, Container } from "@mui/material";

export function PageContainer({ children }: PropsWithChildren) {
  return (
    <Box component="main" sx={{ px: { xs: 2, md: 4 }, py: { xs: 3, md: 6 } }}>
      <Container maxWidth="lg">
        <Box sx={{ minHeight: "80vh" }}>{children}</Box>
      </Container>
    </Box>
  );
}
