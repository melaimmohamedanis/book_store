import { render } from 'preact'
import App from './app.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {SnackbarProvider} from 'notistack';
render(
    <BrowserRouter>
    <SnackbarProvider dense>
    <App />
    </SnackbarProvider>
    
    </BrowserRouter>,
 document.getElementById('app'))
