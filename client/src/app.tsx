import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Header } from './components/Header';
import { Product } from './features/shop/Product';
import { theme } from './app/theme';
import data from './app/data.json';

const App = () => (
    <ThemeProvider theme={theme}>
        <Container disableGutters={true} maxWidth='md' sx={{ marginBottom: '4rem' }}>
            <Header />
            <Product product={data[0]} />
        </Container>
    </ThemeProvider>
);

export default App;
