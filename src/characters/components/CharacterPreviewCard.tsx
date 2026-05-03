import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import type { Character, CharacterStatus } from "../types/character";
import placeholderImage from "../../assets/images/character-icon.jpg";

type CharacterPreviewCardProps = {
  character?: Character;
  isLoading: boolean;
  error?: Error | null;
};

function getStatusColor(status?: CharacterStatus) {
  switch (status?.toLowerCase()) {
    case "dead":
      return "error.main";
    case "alive":
      return "success.main";
    default:
      return "text.secondary";
  }
}

function normalizeUnknown(value?: string) {
  if (!value) return "Unknown";
  const normalized = value.trim().toLowerCase();
  return normalized === "unknown" || normalized === "" ? "Unknown" : value;
}

export function CharacterPreviewCard({
  character,
  isLoading,
  error,
}: CharacterPreviewCardProps) {
  const details = character
    ? [
        { label: "Species", value: normalizeUnknown(character.species) },
        { label: "Type", value: normalizeUnknown(character.type) },
        {
          label: "Location",
          value: normalizeUnknown(character.location?.name),
        },
        { label: "Origin", value: normalizeUnknown(character.origin?.name) },
        {
          label: "Status",
          value: normalizeUnknown(character.status),
          color: getStatusColor(character.status),
        },
      ]
    : [];

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={2.5}
      sx={{ alignItems: "flex-start" }}
    >
      <Box
        sx={{
          width: 224,
          minWidth: 224,
          height: 224,
          overflow: "hidden",
          backgroundColor: "grey.100",
          boxShadow: 3,
          flexShrink: 0,
        }}
      >
        {isLoading ? (
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularProgress size={42} />
          </Box>
        ) : character ? (
          <Box
            component="img"
            src={character.image}
            alt={character.name}
            fetchPriority="high"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <Box
            component="img"
            src={placeholderImage}
            alt="Character placeholder"
            fetchPriority="high"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
      </Box>

      <Stack spacing={1.25} sx={{ minHeight: 224 }}>
        {!!error && (
          <Typography variant="h1" sx={{ color: "error.main" }}>
            {error?.message}
          </Typography>
        )}

        {character && (
          <Stack spacing={2.25}>
            <Typography variant="h1">{character.name}</Typography>

            {details.map((item) => {
              const isUnknown = item.value.trim().toLowerCase() === "unknown";
              return (
                <Stack key={item.label} direction="row" spacing={1.25}>
                  <Typography
                    variant="body2"
                    sx={{ width: 82, flexShrink: 0, color: "text.secondary" }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 700,
                      color:
                        item.color ??
                        (isUnknown ? "text.secondary" : "text.primary"),
                    }}
                  >
                    {item.value}
                  </Typography>
                </Stack>
              );
            })}
          </Stack>
        )}
      </Stack>
    </Stack>
  );
}
