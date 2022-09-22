import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
    <StrictMode>
        <Provider store={store}>
            <CssBaseline>
            {/* <ErrorBoundary> */}
                <App />
            </CssBaseline>
            {/* </ErrorBoundary> */}
        </Provider>
    </StrictMode>
);
