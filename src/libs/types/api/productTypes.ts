type product = {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: Array<string>
}

type productsApi = {
    products: Array<product>,
    total: number,
    skip: number,
    limit: number,
}

export type {product, productsApi}