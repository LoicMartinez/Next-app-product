import {Box, Card, Grid, Typography} from "@mui/material";
import Image from 'next/image'
import {product} from "@/libs/types/api/productTypes";
import Link from "next/link";
import PlaceHolderProductCard from "@/components/product/placeHolderProductCard";

interface ProductCardInterface {
    product: product,
}

export default function ProductCard(props: ProductCardInterface) {
    return (
        <Grid item md={3}>
            <Link href={`/products/${props.product?.id}`}>
                <Card sx={{height: 400, width: 400}}>
                    <Box sx={{height: 350, width: 400, position: 'relative'}}>
                        <Image src={props.product?.thumbnail ?? ''} alt={''} fill sizes={"(min-width: 60em) 24vw,(min-width: 28em) 45vw,100vw"}/>
                    </Box>
                    <Typography align="center">
                        {props.product?.title ?? ''}
                    </Typography>
                </Card>
            </Link>
        </Grid>
    )
}