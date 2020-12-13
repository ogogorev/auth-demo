import { h } from 'preact';

import style from './error.css';

const Error = ({ isDisplayed, msg }) => {
  return (
    <div role="alert">
      {isDisplayed && (
        <p class={style.text}>
          {msg}
        </p>
      )}
    </div>
  );
};

export default Error;
