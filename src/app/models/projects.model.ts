export interface ImageModel {
  id: number;
  alt: string;
  src: string;
  sort_index: number;
}

export interface ProjectsModel {
  id: number;
  title: string;
  text: string;
  compatibility: number;
  development: string;
  images: ImageModel[];
}
