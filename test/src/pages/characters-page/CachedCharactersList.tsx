import { Button, Stack } from '@mui/material'
import { useQueryClient } from '@tanstack/react-query'
import { CachedCharacterItem } from './CachedCharacterItem'

type CachedCharactersListProps = {
  history: string[]
  selectedId: string
  onSelect: (id: string) => void
  onRemove: (id: string) => void
  onClearAll: () => void
}

export function CachedCharactersList({
  history,
  selectedId,
  onSelect,
  onRemove,
  onClearAll,
}: CachedCharactersListProps) {
  const queryClient = useQueryClient()

  const handleRemove = (id: string) => {
    queryClient.removeQueries({ queryKey: ['character', id] })
    onRemove(id)
  }

  const handleClearAll = () => {
    queryClient.clear()
    onClearAll()
  }

  if (history.length === 0) return null

  return (
    <Stack sx={{ width: 64 }}>
      <Button variant="text" size="small" onClick={handleClearAll} sx={{ mb: 1.5, alignSelf: 'flex-start', px: 0 }}>
        Clear All
      </Button>
      <Stack spacing={1.5}>
        {history.map((id) => (
          <CachedCharacterItem
            key={id}
            id={id}
            isSelected={id === selectedId}
            onSelect={onSelect}
            onRemove={handleRemove}
          />
        ))}
      </Stack>
    </Stack>
  )
}
