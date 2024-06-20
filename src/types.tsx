// CHARACTERS TYPES

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

export interface CharactersListProps {
  selectedId: (id: string) => void;
}

export interface AlertProps {
  type: 'error' | 'warning' | 'info';
  message: string;
  onClose: () => void;
  duration?: number;
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


// EVENT TYPES

export type FormEvent = React.FormEvent<HTMLFormElement>
export type ChangeEvent = React.ChangeEvent<HTMLInputElement>



