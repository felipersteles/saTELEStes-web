export type NasaApodResponse = {
  date?: string;
  explanation?: string;
  url?: string;
  title?: string;
  copyright?: string;
};

export type NasaMarsHoverPhotoResponse = {
  photos?: NasaMarsHoverPhoto[];
};

export type NasaMarsHoverPhoto = {
  id?: number;
  camera?: any;
  earth_date?: string;
  img_src?: string;
  rover?: any;
  sol?: number;
};
