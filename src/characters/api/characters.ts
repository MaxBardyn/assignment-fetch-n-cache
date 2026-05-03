import type { Character } from "../types/character";

export const getCharacterById = async (
  characterId: number,
): Promise<Character> => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${characterId}`,
  );

  if (!response.ok) {
    const body = await response.json().catch(() => null);
    const message = body?.error ?? "Something went wrong";
    throw new Error(message);
  }

  const data = await response.json();

  return data;
};
