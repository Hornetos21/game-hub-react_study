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
}

export interface Genre extends IdName {
  image_background: string
}

export interface GameQuery {
  genreId?: number
  platformId?: number
  sortOrder?: string
  searchText?: string
}
