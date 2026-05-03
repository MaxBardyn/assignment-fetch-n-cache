import { useState, useEffect, useCallback } from "react";
import { Box } from "@mui/material";
import { useCharacterQuery } from "../characters/hooks/useCharacterQuery";
import { useSearchHistory } from "../characters/hooks/useSearchHistory";
import { PageContainer } from "../shared/PageContainer";
import { NumericSearchForm } from "../shared/NumericSearchForm";
import { CharacterPreviewCard } from "../characters/components/CharacterPreviewCard";
import { CachedCharactersList } from "../characters/components/CachedCharactersList";

export function CharactersPage() {
  const [selectedCharacterId, setSelectedCharacterId] = useState("");
  const [inputValue, setInputValue] = useState("");

  const characterQuery = useCharacterQuery(selectedCharacterId);
  const { history, addToHistory, removeFromHistory, clearHistory } =
    useSearchHistory();

  useEffect(() => {
    if (characterQuery.isSuccess && characterQuery.data) {
      addToHistory(characterQuery.data.id.toString());
    }
  }, [characterQuery.isSuccess, characterQuery.data, addToHistory]);

  const handleRemove = useCallback(
    (id: string) => {
      removeFromHistory(id);
      if (selectedCharacterId === id) {
        setSelectedCharacterId("");
        setInputValue("");
      }
    },
    [removeFromHistory, selectedCharacterId],
  );

  const handleClearAll = useCallback(() => {
    clearHistory();
    setSelectedCharacterId("");
    setInputValue("");
  }, [clearHistory]);

  const handleInputChange = useCallback(
    (value: string) => {
      setInputValue(value);
      if (history.includes(value.trim())) setSelectedCharacterId(value.trim());
    },
    [history],
  );

  const handleSearch = useCallback((value: string) => {
    setSelectedCharacterId(value);
  }, []);

  const handleSelectFromCache = useCallback((id: string) => {
    setSelectedCharacterId(id);
    setInputValue(id);
  }, []);

  return (
    <PageContainer>
      <Box
        sx={{
          p: { xs: 2.5, md: 5 },
          borderRadius: 0.5,
          backgroundColor: "background.default",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            flexShrink: 0,
          }}
        >
          <NumericSearchForm
            value={inputValue}
            onChange={handleInputChange}
            onSearch={handleSearch}
            isLoading={characterQuery.isLoading}
          />

          <Box sx={{ minHeight: 224 }}>
            <CharacterPreviewCard
              character={characterQuery.data}
              isLoading={characterQuery.isLoading}
              error={characterQuery.error}
            />
          </Box>
        </Box>

        <CachedCharactersList
          history={history}
          selectedId={selectedCharacterId}
          onSelect={handleSelectFromCache}
          onRemove={handleRemove}
          onClearAll={handleClearAll}
          isLoading={characterQuery.isLoading}
        />
      </Box>
    </PageContainer>
  );
}
