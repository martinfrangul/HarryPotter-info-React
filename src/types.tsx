export interface CharacterType {
  house: string;
  id: string;
  image: string;
  name: string;
}

export interface CharacterTypeComplete extends CharacterType {
  species: string;
  gender: string;
  wizard: boolean;
  actor: string;
}

export interface CharacterCardProps {
    idForCard: string | null;
  }

export interface SelectedIdType {
  selectedId: string;
}

export interface ContextDataAPIType {
  data: CharacterTypeComplete[];
}

export interface CharactersListProps {
  selectedId: (id: string) => void;
}

export interface CharacterTypeComplete {
  house: string;
  id: string;
  image: string;
  species: string;
  gender: string;
  wizard: boolean;
  actor: string;
  name: string;
}
