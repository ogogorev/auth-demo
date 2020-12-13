import { h } from 'preact';

const divStyle = {
  display: 'flex',
  justifyContent: 'center'
}

export const LoadingIndicator = ({ width, height, color }) => {
  return (
    <div style={divStyle}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" width={width} height={height}>
        <path
          fill="none"
          stroke={color}
          stroke-width="6"
          stroke-linecap="round"
        >
          <animate
            id="line"
            attributeName="d"
            dur="1350ms"
            repeatCount="indefinite"
            values="M 10,10
              L 10,10;
              
              M 10,10
              L 35,10;
              
              M 65,10
              L 90,10;
              
              M 90,10
              L 90,10;

              M 90,10
              L 90,10;
              
              M 65,10
              L 90,10;
              
              M 10,10
              L 35,10;
              
              M 10,10
              L 10,10;
              
              M 10,10
              L 10,10;"
            keyTimes="0; 0.05; 0.25; 0.3; 0.5; 0.55; 0.75; 0.8; 1"
          />
        </path>
      </svg>
    </div>
  )
}