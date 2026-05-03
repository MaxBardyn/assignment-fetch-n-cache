import { useQuery } from "@tanstack/react-query";
import { getCharacterById } from "../api/characters";

export const useCharacterQuery = (characterId: string) =>
  useQuery({
    queryKey: ["character", characterId],
    queryFn: () => getCharacterById(Number(characterId)),
    enabled: !!characterId,
    retry: false,
    staleTime: 60 * 1000,
  });
