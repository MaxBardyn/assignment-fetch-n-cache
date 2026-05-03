import { Box, IconButton } from "@mui/material";
import { useCharacterQuery } from "../hooks/useCharacterQuery";

type CachedCharacterItemProps = {
  id: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
  onRemove: (id: string) => void;
};

export function CachedCharacterItem({
  id,
  isSelected,
  onSelect,
  onRemove,
}: CachedCharacterItemProps) {
  const { data } = useCharacterQuery(id);

  if (!data) return null;

  return (
    <Box
      onClick={() => onSelect(id)}
      sx={{
        position: "relative",
        width: 64,
        height: 64,
        borderRadius: 1,
        cursor: "pointer",
        boxShadow: isSelected
          ? (theme) => `0 0 0 2px ${theme.palette.primary.main}`
          : undefined,
        opacity: isSelected ? 1 : 0.4,
        transition: "opacity 0.15s, box-shadow 0.15s",
        "&:hover": { opacity: 1 },
        "&:hover .remove-btn": { opacity: 1 },
      }}
    >
      <Box
        component="img"
        fetchPriority="high"
        src={data.image}
        alt={data.name}
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: 1,
          objectFit: "cover",
          display: "block",
        }}
      />
      <IconButton
        className="remove-btn"
        size="small"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(id);
        }}
        sx={{
          position: "absolute",
          top: -8,
          right: -8,
          opacity: 0,
          transition: "opacity 0.15s",
          width: 18,
          height: 18,
          backgroundColor: "background.default",
          border: "1px solid",
          borderColor: "grey.300",
          "&:hover": { backgroundColor: "grey.100" },
          p: 0,
        }}
      >
        <svg fill="currentColor" viewBox="0 0 24 24" width="10px" height="10px">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </IconButton>
    </Box>
  );
}
