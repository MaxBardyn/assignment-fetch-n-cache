import { Stack } from "@mui/material";
import { useCharacterQuery } from "../../characters/hooks/useCharacterQuery";
import { PageContainer } from "../../shared/ui/PageContainer";
import { CharacterPreviewCard } from "./CharacterPreviewCard";

export function CharactersPage() {
  const characterQuery = useCharacterQuery("3");

  return (
    <PageContainer>
      <Stack spacing={4}>
        <CharacterPreviewCard
          character={characterQuery.data}
          isLoading={characterQuery.isLoading}
          isError={characterQuery.isError}
        />
      </Stack>
    </PageContainer>
  );
}
