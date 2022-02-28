// @see https://swapi.dev/documentation

export interface IFilm {
  characters: string[] | IPeople[];
  created: Date;
  director: string;
  edited: Date;
  episode_id: string;
  opening_crawl: string;
  producer: string;
  release_date: Date;
  title: string;
  url: string;
}

export interface IPeople {
  birth_year: string;
  eye_color: string;
  films: string[] | IFilm[];
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  name: string;
  skin_color: string;
  created: Date;
  edited: Date;
  url: string;
}
