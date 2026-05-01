import { useState, useEffect, useCallback } from 'react'
import { Box, Stack } from '@mui/material'
import { useCharacterQuery } from '../../characters/hooks/useCharacterQuery'
import { useSearchHistory } from '../../characters/hooks/useSearchHistory'
import { PageContainer } from '../../shared/ui/PageContainer'
import { NumericSearchForm } from '../../shared/ui/NumericSearchForm'
import { CharacterPreviewCard } from './CharacterPreviewCard'
import { CachedCharactersList } from './CachedCharactersList'

export function CharactersPage() {
  const [selectedCharacterId, setSelectedCharacterId] = useState('')

  const characterQuery = useCharacterQuery(selectedCharacterId)
  const { history, addToHistory, removeFromHistory, clearHistory } = useSearchHistory()

  useEffect(() => {
    if (characterQuery.isSuccess && characterQuery.data) {
      addToHistory(characterQuery.data.id.toString())
    }
  }, [characterQuery.isSuccess, characterQuery.data, addToHistory])

  const handleRemove = useCallback((id: string) => {
    removeFromHistory(id)
    if (selectedCharacterId === id) setSelectedCharacterId('')
  }, [removeFromHistory, selectedCharacterId])

  const handleClearAll = useCallback(() => {
    clearHistory()
    setSelectedCharacterId('')
  }, [clearHistory])

  const hasSearched = selectedCharacterId.length > 0

  return (
    <PageContainer>
      <Stack spacing={3}>
        <Box
          sx={{
            p: { xs: 2.5, md: 5 },
            borderRadius: 0.5,
            backgroundColor: 'background.paper',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: 4,
          }}
        >
            <Stack spacing={3} sx={{ flexShrink: 0 }}>
              <NumericSearchForm onSearch={setSelectedCharacterId} isLoading={characterQuery.isLoading} />

              <Box sx={{ minHeight: 224 }}>
                <CharacterPreviewCard
                  character={characterQuery.data}
                  isLoading={characterQuery.isLoading}
                  hasSearched={hasSearched}
                />
              </Box>
            </Stack>

            <CachedCharactersList
              history={history}
              selectedId={selectedCharacterId}
              onSelect={setSelectedCharacterId}
              onRemove={handleRemove}
              onClearAll={handleClearAll}
            />
        </Box>
      </Stack>
    </PageContainer>
  )
}
