import { Alert, CircularProgress, Stack, Typography } from '@mui/material'
import type { Character } from '../../characters/types/character'

type CharacterPreviewCardProps = {
  character: Character | undefined
  isLoading: boolean
  isError: boolean
}

export function CharacterPreviewCard({
  character,
  isLoading,
  isError,
}: CharacterPreviewCardProps) {
  if (isLoading) {
    return <CircularProgress size={24} />
  }

  if (isError) {
    return <Alert severity="error">Could not load character preview.</Alert>
  }

  if (!character) {
    return <Typography color="text.secondary">No character selected.</Typography>
  }

  return (
    <Stack spacing={1.5}>
      <Typography variant="overline" color="primary">
        Character preview
      </Typography>
      <Typography variant="h1">{character.name}</Typography>
      <Typography color="text.secondary">{character.species}</Typography>
      <Typography color={character.status === 'Dead' ? 'error' : 'text.primary'}>
        {character.status}
      </Typography>
    </Stack>
  )
}
