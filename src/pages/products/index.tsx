import {useEffect, useState} from "react";
import Api from "src/libs/api/client"
import {Button, Grid} from "@mui/material";
import ProductCard from "@/components/product/productCard";
import PlaceHolderProductCard from "@/components/product/placeHolderProductCard";
import {useQuery} from "react-query";

export default function ProductsPage({}) {
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0)
    const limit = 8

    const { data: products, isLoading, isFetching, isFetchedAfterMount, refetch} = useQuery({
        queryKey: ['product', page, limit],
        queryFn: () => Api.GetProducts(page, limit).then((products) => {setTotal(products.total); return products}),
        staleTime: 3000,
        cacheTime: 10 * 1000
    })

    useEffect(() => {
        console.log(products)
    }, [products])

    Array((page * limit) < total ? limit : 4).fill('').map(() => '')

    return (
        <>
            <Button variant="contained" onClick={() => refetch()}> refresh</Button>
            <Button variant={"contained"} sx={{m: 1}} onClick={() => setPage(page - 1)} disabled={page == 1}>
                {'<'}
            </Button>
            <Button variant={"contained"} sx={{m: 1}} onClick={() => setPage(page + 1)} disabled={(((page + 1) * limit) >= total)}>
                {'>'}
            </Button>
            <Grid container spacing={2}>
                {!isFetchedAfterMount && (isLoading || isFetching)?
                    Array.from(
                        Array(!total || ((page + 1) * limit) < total ? limit : total % limit),
                        (_, index) => <PlaceHolderProductCard key={`place_holder_${index}`}/>
                    )
                    :
                    products!.products.map(
                            product => <ProductCard product={product} key={`productListItem${product.id}`}/>
                    )
                }
            </Grid>
        </>
    )
}
