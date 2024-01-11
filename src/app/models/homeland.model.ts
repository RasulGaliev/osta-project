export interface ImageModel {
  id: number;
  alt: string;
  src: string;
  sort_index: number;
}
export interface HomelandModel {
  id: number;
  title: string;
  text: string;
  images: ImageModel[];
}
