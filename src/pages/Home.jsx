import React from 'react';
import { Categories, PizzaBlock, SortPopup } from '../components';

export const Home = ({ pizzas }) => {
  return (
    <div className='container'>
      <div className='content__top'>
        <Categories items={['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']} />
        <SortPopup />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {pizzas &&
          pizzas.map(pizza => (
            <PizzaBlock
              key={pizza.id}
              {...pizza}
            />
          ))}
      </div>
    </div>
  );
};
