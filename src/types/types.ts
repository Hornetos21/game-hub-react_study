interface IdName {
  id: number
  name: string
}

export interface Platform extends IdName {
  slug: string
}
export interface Game extends IdName {
  background_image: string
  parent_platforms: { platform: Platform }[]
  metacritic: number
  rating_top: number
  slug: string
  description_raw: string
  genres: Genre[]
  publishers: Publisher[]
}
export interface Publisher extends IdName {
  slug: string
  games_count: number
  image_background: string
}
export interface Trailer extends IdName {
  preview: string
  data: { 480: string; max: string }
}
export interface Genre extends IdName {
  image_background: string
}
export interface Screenshot {
  height: number
  width: number
  id: number
  image: string
}

export interface GameQuery {
  genreId?: number
  platformId?: number
  sortOrder?: string
  searchText?: string
}
