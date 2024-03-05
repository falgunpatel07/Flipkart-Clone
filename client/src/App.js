import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Homie from './components/homie/Homie';
import { Box } from '@mui/material';
import DataProvider from './components/context/Dataprovider';
import DetailView from './components/details/DetailView';
import Cart from './components/cart/Cart';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
function App() {
  return (
    <DataProvider className="App">
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
           <Route path='/'  element= {<Homie />} />
           <Route path='/product/:id'  element= {<DetailView />} /> 
           <Route path='/cart' element={<Cart />}/> 
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>

  );
}

export default App;
