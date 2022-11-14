import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './Theme';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Main/>
      </ThemeProvider>
    </div>
  );
}

export default App;
