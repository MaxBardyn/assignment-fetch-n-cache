import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import type {
  Character,
  CharacterStatus,
} from "../../characters/types/character";
import placeholderImage from "../../assets/charachter-icon.jpg";

type CharacterPreviewCardProps = {
  character?: Character;
  isLoading: boolean;
  hasSearched: boolean;
};

function getStatusColor(status?: CharacterStatus) {
  const normalized = status?.toLowerCase();
  if (normalized === "dead") return "error.main";
  if (normalized === "alive") return "success.main";
  return "text.secondary";
}

function normalizeUnknown(value?: string) {
  if (!value) return "Unknown";
  const normalized = value.trim().toLowerCase();
  return normalized === "unknown" || normalized === "" ? "Unknown" : value;
}

export function CharacterPreviewCard({
  character,
  isLoading,
  hasSearched,
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
      ]
    : [];

  const showError = hasSearched && !isLoading && !character;

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
          borderRadius: 1,
          position: "relative",
          overflow: "hidden",
          backgroundColor: "grey.100",
          boxShadow: 3,
          flexShrink: 0,
        }}
      >
        {isLoading ? (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: 1,
              backgroundColor: "grey.200",
              border: "1px solid",
              borderColor: "grey.300",
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
            width={224}
            height={224}
            fetchPriority="high"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <Box
            component="img"
            src={placeholderImage}
            alt="Character placeholder"
            width={224}
            height={224}
            fetchPriority="high"
          />
        )}
      </Box>

      <Stack spacing={1.25} sx={{ minHeight: 224, justifyContent: "center" }}>
        {showError && (
          <Typography variant="h1" sx={{ mb: 1, color: "error.main" }}>
            Character not found
          </Typography>
        )}

        {character && (
          <>
            <Typography variant="h1" sx={{ mb: 1.25, color: "text.primary" }}>
              {character.name}
            </Typography>

            {details.map((item) => {
              const isUnknown = item.value.trim().toLowerCase() === "unknown";
              return (
                <Stack key={item.label} direction="row" spacing={0}>
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
                      color: isUnknown ? "text.secondary" : "text.primary",
                    }}
                  >
                    {item.value}
                  </Typography>
                </Stack>
              );
            })}

            <Stack direction="row" spacing={0}>
              <Typography
                variant="body2"
                sx={{ width: 82, flexShrink: 0, color: "text.secondary" }}
              >
                Status
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 700,
                  color: getStatusColor(character.status),
                }}
              >
                {normalizeUnknown(character.status)}
              </Typography>
            </Stack>
          </>
        )}
      </Stack>
    </Stack>
  );
}
