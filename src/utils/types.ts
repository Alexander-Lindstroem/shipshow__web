export type sidebarProps = {
    sectionChosed: string | null,
    setSection: (section: string) => void;
}
export type teamMember = {
    name: string,
    title: string,
    image: string,
}