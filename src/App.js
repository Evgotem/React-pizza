import React from 'react';


import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { Header, NotFound } from './components';
import { Cart, Home } from './pages';


function App() {
  const [pizzas, setPizzas] = React.useState([]);
  React.useEffect(() => {
    axios.get('http://localhost:3001/db.json')
    .then(({data}) => setPizzas(data.pizzas))
    .catch((error) => console.log(error))

  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home pizzas={pizzas} />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
