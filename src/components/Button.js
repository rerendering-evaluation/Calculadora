import { memo } from "react";
import React from 'react';
import '../stylesheet/Button.css';
const Button = memo(function Button(props) {
  const isOperator = valor => {
    return isNaN(valor) && valor !== '.' && valor !== '=';
  };
  return <div className={`button-container ${isOperator(props.children) ? 'operador' : ''}`.trimEnd()} onClick={() => props.handleClick(props.children)}>
      {props.children}

    </div>;
});
export default Button;