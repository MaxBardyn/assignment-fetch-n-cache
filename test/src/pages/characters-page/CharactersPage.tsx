import { useState } from 'react'
import { Box, Stack } from '@mui/material'
import { useCharacterQuery } from '../../characters/hooks/useCharacterQuery'
import { PageContainer } from '../../shared/ui/PageContainer'
import { NumericSearchForm } from '../../shared/ui/NumericSearchForm'
import { CharacterPreviewCard } from './CharacterPreviewCard'

export function CharactersPage() {
  const [selectedCharacterId, setSelectedCharacterId] = useState('')

  const characterQuery = useCharacterQuery(selectedCharacterId)

  const hasSearched = selectedCharacterId.length > 0

  return (
    <PageContainer>
      <Stack spacing={3}>
        <Box
          sx={{
            p: { xs: 2.5, md: 5 },
            borderRadius: 0.5,
            backgroundColor: 'background.paper',
          }}
        >
          <Stack spacing={3} sx={{ width: '100%' }}>
            <NumericSearchForm onSearch={setSelectedCharacterId} isLoading={characterQuery.isLoading} />

            <CharacterPreviewCard
              character={characterQuery.data}
              isLoading={characterQuery.isLoading}
              hasSearched={hasSearched}
            />
          </Stack>
        </Box>
      </Stack>
    </PageContainer>
  )
}
