import { h, Component } from 'preact';
import style from './style';


const Button = (props) => {
  return (
    <button class={`${style.button} ${props.class}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
