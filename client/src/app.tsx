import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { theme } from './theme';

const App = () => (
    <ThemeProvider theme={theme}>
        <Container disableGutters={true}>
            <Header />
            <Main />
        </Container>
    </ThemeProvider>
);

export default App;
