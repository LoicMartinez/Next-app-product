import {Box, Card, Grid, Skeleton} from "@mui/material";


export default function PlaceHolderProductCard() {
    return (
        <Grid item md={3}>
            <Card sx={{height: 400, width: 400}}>
                <Box sx={{height: 350, width: 400, position: 'relative'}}>
                    <Skeleton sx={{ height: 350 }} animation="wave" variant="rectangular" />
                </Box>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Skeleton animation="wave" width="40%" />
                    </Box>
            </Card>
        </Grid>
)
}