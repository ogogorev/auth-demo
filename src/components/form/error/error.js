import { h } from 'preact';

const Error = ({ isDisplayed, msg }) => {
  return (
    <div role="alert">
      {isDisplayed && (
        <p style={{ color: 'red' }}>
          {msg}
        </p>
      )}
    </div>
  );
};

export default Error;
