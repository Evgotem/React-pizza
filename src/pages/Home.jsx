import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Categories, PizzaBlock, SortPopup } from '../components';
import { setCategory } from '../redux/actions/filters';

const categoryNames = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

const sorts = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];


export const Home = () => {
  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.pizzas.items);

  const onSelectCategories = React.useCallback(index => {
    dispatch(setCategory(index))
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories 
          onClickItem={onSelectCategories}
          items={categoryNames} 
        />
        <SortPopup sorts={sorts} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas && pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
    </div>
  );
};
