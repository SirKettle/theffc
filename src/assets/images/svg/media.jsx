import React from 'react';

export const Next = ({ className, color = 'currentColor' }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    <path
      fill={color}
      d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,124a60,60,0,1,1,60-60A60.07,60.07,0,0,1,64,124Z"
    />
    <path
      fill={color}
      d="M55,29a2,2,0,0,0-2.83,2.83L84.42,64,52.21,96.21A2,2,0,1,0,55,99L88.66,65.41a2,2,0,0,0,0-2.82Z"
    />
  </svg>
);

export const Previous = ({ className, color = 'currentColor' }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    <path
      fill={color}
      d="M64,128a64,64,0,1,1,64-64A64.07,64.07,0,0,1,64,128ZM64,4a60,60,0,1,0,60,60A60.07,60.07,0,0,0,64,4Z"
    />
    <path
      fill={color}
      d="M74.38,99.63A2,2,0,0,1,73,99L39.34,65.41a2,2,0,0,1,0-2.82L73,29a2,2,0,1,1,2.83,2.83L43.58,64,75.79,96.21a2,2,0,0,1-1.41,3.42Z"
    />
  </svg>
);

export const Pause = ({ className, color = 'currentColor' }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    <path
      fill={color}
      d="M64,128a64,64,0,1,1,64-64A64.07,64.07,0,0,1,64,128ZM64,4a60,60,0,1,0,60,60A60.07,60.07,0,0,0,64,4Z"
    />
    <path fill={color} d="M46.78,97a2,2,0,0,1-2-2V33a2,2,0,0,1,4,0V95A2,2,0,0,1,46.78,97Z" />
    <path fill={color} d="M81.22,97a2,2,0,0,1-2-2V33a2,2,0,0,1,4,0V95A2,2,0,0,1,81.22,97Z" />
  </svg>
);

export const Play = ({ className, color = 'currentColor' }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    <path
      fill={color}
      d="M64,128a64,64,0,1,1,64-64A64.07,64.07,0,0,1,64,128ZM64,4a60,60,0,1,0,60,60A60.07,60.07,0,0,0,64,4Z"
    />
    <path
      fill={color}
      d="M42,97a2,2,0,0,1-2-2V33a2,2,0,0,1,3-1.74l55.11,31a2,2,0,0,1,0,3.48L43,96.74A2,2,0,0,1,42,97Zm2-60.58V91.58L93,64Z"
    />
  </svg>
);
