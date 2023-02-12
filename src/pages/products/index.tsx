import {useState} from "react";
import Api from "src/libs/api/client"
import {Button, Grid, Typography} from "@mui/material";
import ProductCard from "@/pages/products/productCard";
import {useQuery} from "react-query";

export default function ProductsPage({}) {
    const [page, setPage] = useState(1)
    const limit = 8

    const { data: products, isLoading, isFetching, isFetchedAfterMount, refetch} = useQuery({
        queryKey: ['product', page, limit],
        queryFn: () => Api.GetProducts(page, limit),
        staleTime: 3000,
        cacheTime: 10 * 1000
    })

    return (
        <>
            <Button variant="contained" onClick={() => refetch()}> refresh</Button>
            <Button variant={"contained"} sx={{m: 1}} onClick={() => setPage(page - 1)} disabled={!products || page == 1}>
                {'<'}
            </Button>
            <Button variant={"contained"} sx={{m: 1}} onClick={() => setPage(page + 1)} disabled={!products || ((products?.skip + limit) >= products?.total)}>
                {'>'}
            </Button>
            {!isFetchedAfterMount && (isLoading || isFetching)?
                <Typography align="center"> Chargement... </Typography> :
                <>
                    <Grid container spacing={2}>
                        {products!.products.map(
                            product => <ProductCard product={product} key={`productListItem${product.id}`}/>
                        )}
                    </Grid>
                </>

            }
        </>
    )
}


function Loading() {
    return <p>Loading...</p>
}
