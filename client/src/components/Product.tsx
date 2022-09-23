import Grid from '@mui/material/Unstable_Grid2';
import {
    Box,
    Button,
    ImageList,
    ImageListItem,
    Stack,
    Typography,
} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Counter } from '../features/cart/Counter';
import { DiscountTypography } from '../features/cart/DiscountTypography';
import { BasePrice } from '../features/cart/BasePrice';
import Lightbox from './Lightbox';

type iProduct = {
    title: string;
    description: string;
    price: number;
    salePrice: number;
    images: Images[];
};

type Images = {
    title: string;
    url: string;
};

interface Props {
    product: iProduct[];
}

export const Product = ({ product }: Props) => (
    <main>
        <Grid container>
            <Grid xs={12} md={6} padding={{ xs: 0, md: 6 }}>
                <img
                    style={{
                        borderRadius: '10px',
                    }}
                    width='100%'
                    src={`images/${product[0].images[0].url}`}
                    alt='sneakers'
                />
                <ImageList
                    sx={{ width: '100%' }}
                    cols={4}
                    gap={20}
                    rowHeight='auto'
                >
                    {product[0].images.map(item => (
                        <ImageListItem key={item.title}>
                            <img
                                style={{
                                    borderRadius: '10px',
                                }}
                                src={`images/${item.url}?w=50&h=50&fit=crop&auto=format`}
                                alt={item.title}
                                loading='lazy'
                            />
                        </ImageListItem>
                    ))}
                </ImageList>

                {/* <Lightbox/> */}
            </Grid>
            <Grid container xs={12} md={6} padding={4} alignItems='center'>
                <Stack spacing={2}>
                    <Typography variant='h1'>Sneaker Company</Typography>
                    <Typography variant='h2'>{product[0].title}</Typography>
                    <Typography variant='body1'>
                        {product[0].description}
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
                                ${product[0].salePrice}
                            </Typography>
                            <DiscountTypography>
                                {(product[0].salePrice / product[0].price) *
                                    100}
                                %
                            </DiscountTypography>
                        </Stack>
                        <BasePrice>${product[0].price}</BasePrice>
                    </Stack>
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        spacing={2}
                        justifyContent='space-between'
                        alignItems='center'
                    >
                        <Counter />
                        <Button
                            variant='contained'
                            startIcon={<ShoppingCartOutlinedIcon />}
                            fullWidth={true}
                            sx={{
                                padding: { xs: '16px 0', md: '12px 0' },
                                borderRadius: '10px',
                                boxShadow:
                                    '0 15px 30px 10px hsla(26 100% 55% / 25%)',
                            }}
                        >
                            Add to cart
                        </Button>
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    </main>
);
