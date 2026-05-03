export interface CharacterLocation {
  name: string;
  url: string;
}

export type CharacterStatus = "Dead" | "Alive" | "unknown";

export type CharacterGender = "Female" | "Male" | "Genderless" | "unknown";

export interface Character {
  id: number;
  name: string;
  url: string;
  created: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
}
