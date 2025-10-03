// products from fake api
export interface ApiProduct{
  id: number,
  title: string,
  image: string,
  price: string,
  category: string,
  rating: {
    rate: number,
    count: number,
  },
}

// products from local storage.
export type Product = {
  title: string,
  image: string,
  price: number,
}
