export interface Movies {
  Title: string,
  Year: number,
  imdbID: string
}

export interface Data {
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data: Movies
}
