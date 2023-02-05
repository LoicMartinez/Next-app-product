import {Box, Card, Grid, Typography} from "@mui/material";
import Image from 'next/image'
import {product} from "@/libs/types/api/productTypes";
import {height} from "@mui/system";
import Link from "next/link";

interface ProductCardInterface {
    product: product,
}

export default function ProductCard(props: ProductCardInterface) {
    return (
        <Grid item md={3}>
            <Link href={'/products'}>
                <Card sx={{height: 400, width: 400}}>
                    <Box sx={{height: 350, width: 400, position: 'relative'}}>
                        <Image src={props.product?.thumbnail ?? ''} alt={''} fill />
                    </Box>
                    <Typography align="center">
                        {props.product?.title ?? ''}
                    </Typography>
                </Card>
            </Link>
        </Grid>
    )
}