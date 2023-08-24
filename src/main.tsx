import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeModeProvider } from 'src/contexts/ThemeModeContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  //<React.StrictMode>
  <ThemeModeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeModeProvider>
  //</React.StrictMode>
);
