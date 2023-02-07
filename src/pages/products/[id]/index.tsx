import Layout from "@/components/Layout";
import { product } from "@/libs/types/api/productTypes";
import { GetServerSideProps, NextPage } from "next";
import Api from "src/libs/api/client"
import {Box, Typography} from "@mui/material";
import Image from 'next/image'


type Data = {
    id: number
}

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


export const getServerSideProps: GetServerSideProps = async context=> {
    const product = await Api.GetProduct(context.query.id as string)

    return {
        props: product
    }
}

export default ProductDetail