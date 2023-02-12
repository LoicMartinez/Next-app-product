import { product } from "@/libs/types/api/productTypes";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Api from "src/libs/api/client"
import {Box, Typography} from "@mui/material";
import Image from 'next/image'


export const ProductDetail: NextPage<product> = (product) => {
    return (<>
        <Typography align="center">
            product name : {product.title}
        </Typography>
        <Typography align="center">
            product price : {product.price}
        </Typography>
        <Box sx={{height: 350, width: 400, position: 'relative'}}>
            <Image src={product.thumbnail ?? ''} alt={''} fill />
        </Box>
    </>)
}


export const getStaticProps:GetStaticProps = async (context) => {
    const product = await Api.GetProduct(context?.params?.id as string)

    return {
        props: product
    }
}


export const getStaticPaths: GetStaticPaths = async () => {
    const products = await Api.GetProducts()

    const paths = products.products.map((product) => {
        return {
            params: {
                id: product.id.toString()
            }
        }
    })

    return {
        paths,
        fallback: false, // can also be true or 'blocking'
    }

}

export default ProductDetail