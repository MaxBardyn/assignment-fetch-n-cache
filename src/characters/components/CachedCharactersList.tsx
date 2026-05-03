import { Button, Stack } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { CachedCharacterItem } from "./CachedCharacterItem";
import { persister } from "../../app/queryClient";

type CachedCharactersListProps = {
  history: string[];
  selectedId: string;
  onSelect: (id: string) => void;
  onRemove: (id: string) => void;
  onClearAll: () => void;
  isLoading?: boolean;
};

export function CachedCharactersList({
  history,
  selectedId,
  onSelect,
  onRemove,
  onClearAll,
  isLoading = false,
}: CachedCharactersListProps) {
  const queryClient = useQueryClient();

  const handleRemove = (id: string) => {
    queryClient.removeQueries({ queryKey: ["character", id] });
    persister.removeQueries({ queryKey: ["character", id] });
    onRemove(id);
  };

  const handleClearAll = () => {
    queryClient.clear();
    persister.removeQueries();
    onClearAll();
  };

  if (history.length === 0) return null;

  return (
    <Stack
      sx={{
        width: 84,
        pointerEvents: isLoading ? "none" : undefined,
        opacity: isLoading ? 0.5 : 1,
        transition: "opacity 0.15s",
      }}
    >
      <Button
        variant="text"
        size="small"
        onClick={handleClearAll}
        sx={{
          mb: 1.5,
          alignSelf: "flex-start",
          px: 0,
          whiteSpace: "nowrap",
          fontStyle: "italic",
        }}
      >
        Clear All
      </Button>
      <Stack
        spacing={1.5}
        sx={{
          overflowY: "auto",
          maxHeight: "300px",
          px: "10px",
          py: "2px",
          mx: "-10px",
          scrollbarGutter: "stable",
        }}
      >
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
  );
}
