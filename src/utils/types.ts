export interface Character {
  id: string;
  name: string;
  FaceImage: string;
  image: string;
  posterImage: string;
  TransparantImage: string;
  info: string;
  info2: string;
}

export interface CharacterSelectorProps {
  characters: Character[];
  selectedId: string;
  setSelectedId: (id: string) => void;
}