<<<<<<< HEAD
export type sidebarProps = {
    sectionChosed: string | null,
    setSection: (section: string) => void;
}

export type teamMember = {
    name: string,
    title: string,
    image: string,
}

=======
>>>>>>> fix/palm-tree_sway
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
<<<<<<< HEAD
=======
}

export type sidebarProps = {
    sectionChosed: string | null,
    setSection: (section: string) => void;}
    
export type teamMember = {
    name: string,
    title: string,
    image: string,

>>>>>>> fix/palm-tree_sway
}