import React from 'react';

export const Next = ({ className, color = 'currentColor' }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path
      d="M30.24,510.43c-17,0-30.24-13.78-30.24-31.36V32.93C0,15.35,13.28,1.57,30.25,1.57a32.73,32.73,0,0,1,16.3,4.49L383.39,229.12c10.07,5.81,16.08,15.86,16.08,26.88s-6,21.07-16.08,26.87L46.55,505.94a32.72,32.72,0,0,1-16.3,4.49Z"
      fill={color}
    />
    <path
      d="M450.06,499.51a61.94,61.94,0,0,1-61.94-61.93V74.42a61.94,61.94,0,0,1,123.88,0V437.58A61.94,61.94,0,0,1,450.06,499.51Z"
      fill={color}
    />
  </svg>
);

export const Previous = ({ className, color = 'currentColor' }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path
      d="M481.76,510.43c17,0,30.24-13.78,30.24-31.36V32.93c0-17.58-13.28-31.36-30.25-31.36a32.73,32.73,0,0,0-16.3,4.49L128.61,229.12C118.54,234.93,112.53,245,112.53,256s6,21.07,16.08,26.87L465.45,505.94a32.72,32.72,0,0,0,16.3,4.49Z"
      fill={color}
    />
    <path
      d="M61.94,499.51a61.94,61.94,0,0,0,61.94-61.93V74.42A61.94,61.94,0,0,0,0,74.42V437.58A61.94,61.94,0,0,0,61.94,499.51Z"
      fill={color}
    />
  </svg>
);

export const Pause = ({ className, color = 'currentColor' }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path
      d="M395,512a73.14,73.14,0,0,1-73.14-73.14V73.14a73.14,73.14,0,1,1,146.29,0V438.86A73.14,73.14,0,0,1,395,512Z"
      fill={color}
    />
    <path
      d="M117,512a73.14,73.14,0,0,1-73.14-73.14V73.14a73.14,73.14,0,1,1,146.29,0V438.86A73.14,73.14,0,0,1,117,512Z"
      fill={color}
    />
  </svg>
);

export const Play = ({ className, color = 'currentColor' }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path
      d="M60.54,512c-17.06,0-30.43-13.86-30.43-31.56V31.55C30.12,13.86,43.48,0,60.55,0A32.94,32.94,0,0,1,77,4.52L465.7,229c10.13,5.85,16.18,16,16.18,27s-6,21.2-16.18,27L77,507.48A32.92,32.92,0,0,1,60.55,512Z"
      fill={color}
    />
  </svg>
);
