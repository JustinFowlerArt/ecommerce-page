import Grid from '@mui/material/Unstable_Grid2';
import { Button, Stack, Typography } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Counter } from '../features/cart/Counter';
import { DiscountTypography } from '../features/cart/DiscountTypography';
import { OriginalPrice } from '../features/cart/OriginalPrice';

export const Main = () => (
    <main>
        <Grid container spacing={2}>
            <Grid xs={12} md={6} padding={0}>
                <img
                    width='100%'
                    src='images/image-product-1.jpg'
                    alt='sneakers'
                />
            </Grid>
            <Grid xs={12} md={6} padding={4}>
                <Stack spacing={2}>
                    <Typography variant='h1'>Sneaker Company</Typography>
                    <Typography variant='h2'>
                        Fall Limited Edition Sneakers
                    </Typography>
                    <Typography variant='body1'>
                        These low-profile sneakers are your perfect casual wear
                        companion. Featuring a durable rubber outer sole,
                        they’ll withstand everything the weather can offer.
                    </Typography>
                    <Stack
                        direction='row'
                        spacing={2}
                        justifyContent='space-between'
                        alignItems='center'
                    >
                        <Stack
                            direction='row'
                            spacing={2}
                            justifyContent='space-between'
                            alignItems='center'
                        >
                            <Typography variant='h2'> $125.00</Typography>
                            <DiscountTypography>50%</DiscountTypography>
                        </Stack>
                        <OriginalPrice>$250.00</OriginalPrice>
                    </Stack>
                    <Counter />
                    <Button
                        variant='contained'
                        startIcon={<ShoppingCartOutlinedIcon />}
                        sx={{ padding: '16px 0', borderRadius: '10px' }}
                    >
                        Add to cart
                    </Button>
                </Stack>
            </Grid>
        </Grid>
    </main>
);
