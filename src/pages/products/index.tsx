import Layout from "@/components/Layout";
import {useEffect, useState} from "react";
import {productsApi} from "@/libs/types/api/productTypes";
import Api from "src/libs/api/client"
import {Button, Grid, Typography} from "@mui/material";
import ProductCard from "@/pages/products/productCard";

export default function ProductsPage({}) {
    const [products, setProducts] = useState<productsApi>()
    const [page, setPage] = useState(1)
    const limit = 8

    const loadProducts = (page: number, limit:number) => {
        console.log('load function')
        Api.GetProducts(page, limit)
            .then(products => setProducts(products))
    }

    useEffect(() => {
        console.log('useEffect', page)
        loadProducts(page, limit)
    }, [page])

    return (
        <Layout>
            {products?
                <>
                    <Button variant={"contained"} sx={{m: 1}} onClick={() => setPage(page - 1)} disabled={page == 1}>
                        {'<'}
                    </Button>
                    <Button variant={"contained"} sx={{m: 1}} onClick={() => setPage(page + 1)} disabled={!products || ((products?.skip + limit) >= products?.total)}>
                        {'>'}
                    </Button>
                    <Grid container spacing={2}>
                        {products.products.map(
                                product => <ProductCard product={product} key={`productListItem${product.id}`}/>
                        )}
                    </Grid>
                </> : <Typography align="center"> Chargement... </Typography>

            }
        </Layout>
    )
}


function Loading() {
    return <p>Loading...</p>
}
