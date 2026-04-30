import type { Character } from '../types/character'

export const getCharacterById = async (characterId: number): Promise<Character> => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${characterId}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch character ${characterId}`)
  }

  const data = await response.json()

  return data
}