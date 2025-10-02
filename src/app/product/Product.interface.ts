export interface Product{
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
