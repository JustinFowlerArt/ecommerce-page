import Grid from '@mui/material/Unstable_Grid2';
import { Stack, List, ListItem, ListItemButton, ListItemText, Link, Avatar, Container } from '@mui/material';
import Menu from './components/Menu';

const App = () => (
    <Container disableGutters={true}>
        <header>
            <Grid container padding={2}>
                <Grid xs={6}>
                    <Stack direction='row' spacing={{xs: 1, sm: 0}} alignItems='flex-end'>
                        <Menu/>
                        <Link href="#"><img src="images/logo.svg" alt="sneakers logo" /></Link>
                        <Stack direction='row' spacing={3} pl={3} sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {['Collections', 'Men', 'Women', 'About', 'Contact'].map(text => (
                                <Link href='#' key={text}>{text}</Link>
                            ))}
                        </Stack>
                    </Stack>
                </Grid>
                <Grid xs={6}>
                    <Stack direction='row' spacing={2} justifyContent='flex-end' alignItems='flex-end'>
                        <Link href="#"><img src="images/icon-cart.svg" alt="cart" /></Link>
                        <Avatar src="/images/image-avatar.png" alt="Man with long hair" sx={{width: '30px', height: '30px'}}/>
                    </Stack>
                </Grid>
            </Grid>
        </header>
  
        {/* <main>
                <Grid container spacing={2}>
                    <Grid xs={12} md={6}>
                        <img width={200} src="images/image-product-1.jpg" alt="sneakers" />

                    </Grid>
                    <Grid xs={12} md={6}>
                        Sneaker Company

                        Fall Limited Edition Sneakers

                        These low-profile sneakers are your perfect casual wear companion. Featuring a 
                        durable rubber outer sole, they’ll withstand everything the weather can offer.

                        $125.00
                        50%
                        $250.00

                        0
                        Add to cart
                    </Grid>
                </Grid>
        </main> */}
    </Container>

);

export default App;
