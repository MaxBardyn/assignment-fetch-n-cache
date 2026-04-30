import { Stack, Typography } from '@mui/material'
import { PageContainer } from '../../shared/ui/PageContainer'

export function CharactersPage() {
  return (
    <PageContainer>
      <Stack spacing={2}>
        <Typography variant="overline" color="primary">
          Fetch 'n' Cache
        </Typography>
        <Typography variant="h1">Architecture foundation is ready</Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 720 }}>
          The app now has separate layers for app providers, theme, pages, and
          shared UI. The next step is to add the character domain with strict
          types, query hooks, and cache-aware components.
        </Typography>
      </Stack>
    </PageContainer>
  )
}