import Grid from '@mui/material/Unstable_Grid2';
import { Stack, Typography } from '@mui/material';
import { DiscountTypography } from '../cart/DiscountTypography';
import { BasePrice } from '../cart/BasePrice';
import { ProductImages } from './ProductImages';
import { AddToCart } from './AddToCart';
import { iProduct } from '../../types/shop/product';

interface Props {
    product: iProduct;
}

export const Product = ({ product }: Props) => (
    <main>
        <Grid container>
            <Grid container xs={12} md={6} padding={{ xs: 0, md: 6 }}>
                <ProductImages images={product.images} />
            </Grid>
            <Grid
                container
                xs={12}
                md={6}
                padding={{ xs: 3, md: 4 }}
                alignItems='center'
            >
                <Stack spacing={2}>
                    <Typography variant='h1'>Sneaker Company</Typography>
                    <Typography variant='h2'>{product.title}</Typography>
                    <Typography variant='body1'>
                        {product.description}
                    </Typography>
                    <Stack
                        direction={{ xs: 'row', md: 'column' }}
                        spacing={{ xs: 2, md: 0 }}
                        justifyContent='space-between'
                        alignItems={{ xs: 'center', md: 'flex-start' }}
                    >
                        <Stack
                            direction='row'
                            spacing={2}
                            justifyContent='space-between'
                            alignItems='center'
                            marginY={1}
                        >
                            <Typography variant='h3'>
                                ${product.salePrice}
                            </Typography>
                            <DiscountTypography>
                                {(product.salePrice / product.price) *
                                    100}
                                %
                            </DiscountTypography>
                        </Stack>
                        <BasePrice>${product.price}</BasePrice>
                    </Stack>
                    <AddToCart product={product}/>
                </Stack>
            </Grid>
        </Grid>
    </main>
);
