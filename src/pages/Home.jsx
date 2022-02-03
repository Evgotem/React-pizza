import axios from 'axios';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories, PizzaBlock, SortPopup } from '../components';
import { setPizzas } from '../redux/actions/pizzas';

export const Home = () => {
  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.pizzas.items);

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']} />
        <SortPopup />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas && pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
    </div>
  );
};
