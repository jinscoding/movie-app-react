export interface MovieProps {
  id: number;
  medium_cover_image: string;
  title: string;
  rating: number;
}

export interface DetailProps extends MovieProps {
  year: number;
  summary: string;
  genres: string[];
}
