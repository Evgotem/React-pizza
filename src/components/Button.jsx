import React from 'react';
import classNames from "classnames";

export const Button = ({outline, cart, children}) => {
  return (
    <button className={classNames('button', {
      'button--outline': outline,
      'button--cart': cart
    })}>
      {children}
    </button>
  )
};
