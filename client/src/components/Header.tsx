import Grid from '@mui/material/Unstable_Grid2';
import { Stack, Link, Avatar, Divider } from '@mui/material';
import Menu from './Menu';
import Cart from '../features/cart/Cart';

export const Header = () => (
    <header>
        <Grid container paddingX={{ xs: 2, md: 0 }} paddingY={2}>
            <Grid xs={6} md={10}>
                <Stack
                    direction='row'
                    spacing={{ xs: 1, sm: 0 }}
                    alignItems='flex-end'
                >
                    <Menu />
                    <Link href='#'>
                        <img src='images/logo.svg' alt='sneakers logo' />
                    </Link>
                    <Stack
                        direction='row'
                        spacing={3}
                        pl={3}
                        sx={{ display: { xs: 'none', md: 'block' } }}
                    >
                        {[
                            'Collections',
                            'Men',
                            'Women',
                            'About',
                            'Contact',
                        ].map(text => (
                            <Link
                                href='#'
                                key={text}
                                underline='none'
                                color='secondary.dark'
                            >
                                {text}
                            </Link>
                        ))}
                    </Stack>
                </Stack>
            </Grid>
            <Grid xs={6} md={2}>
                <Stack
                    direction='row'
                    spacing={2}
                    justifyContent='flex-end'
                    alignItems='center'
                >
                    <Cart />
                    <Avatar
                        src='/images/image-avatar.png'
                        alt='Man with long hair'
                        sx={{ width: '30px', height: '30px' }}
                    />
                </Stack>
            </Grid>
        </Grid>
        <Divider />
    </header>
);
