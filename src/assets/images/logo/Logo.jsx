import React from 'react';

export default ({
  className,
  ...props
  }) => {
  const color = (props && props.color) || 'currentColor';
  return (
    <svg className={className} viewBox="0 0 400 64" version="1.1" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g id="FittedFurnitureLogo" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        {/* <path
          d="M36.905,24.05 C36.905,24.155 36.87,24.19 36.765,24.19 L26.02,24.19 L25.74,24.26 L25.74,29.755 L33.895,29.755 C34,29.755 34,29.79 34,29.86 L34,32.905 C34,33.01 33.93,33.045 33.825,33.045 L25.985,33.045 C25.985,33.045 25.74,33.15 25.74,33.29 L25.74,43.86 C25.74,43.965 25.705,44 25.6,44 L22.59,44 C22.485,44 22.45,43.965 22.45,43.895 L22.45,21.005 C22.45,20.935 22.485,20.9 22.59,20.9 L36.765,20.9 C36.87,20.9 36.905,20.935 36.905,21.005 L36.905,24.05 Z M43.325,43.86 C43.325,43.965 43.29,44 43.185,44 L40.14,44 C40.07,44 40.035,44 40.035,43.895 L40.035,21.04 C40.035,20.935 40.07,20.9 40.175,20.9 L43.22,20.9 C43.325,20.9 43.325,20.935 43.325,21.005 L43.325,43.86 Z M64.515,24.085 C64.515,24.19 64.48,24.19 64.375,24.19 C61.785,24.19 56.955,24.225 56.955,24.225 L56.955,43.86 C56.955,43.965 56.92,44 56.815,44 L53.77,44 C53.7,44 53.665,43.965 53.665,43.895 L53.665,24.19 L46.595,24.19 C46.49,24.19 46.455,24.19 46.455,24.085 L46.455,21.04 C46.455,20.935 46.49,20.9 46.595,20.9 L64.41,20.9 C64.515,20.9 64.515,20.935 64.515,21.005 L64.515,24.085 Z M83.955,24.085 C83.955,24.19 83.92,24.19 83.815,24.19 C81.225,24.19 76.395,24.225 76.395,24.225 L76.395,43.86 C76.395,43.965 76.36,44 76.255,44 L73.21,44 C73.14,44 73.105,43.965 73.105,43.895 L73.105,24.19 L66.035,24.19 C65.93,24.19 65.895,24.19 65.895,24.085 L65.895,21.04 C65.895,20.935 65.93,20.9 66.035,20.9 L83.85,20.9 C83.955,20.9 83.955,20.935 83.955,21.005 L83.955,24.085 Z M102.1,43.895 C102.1,44 102.065,44.035 101.96,44.035 L87.26,44.035 C87.155,44 87.085,43.895 87.085,43.895 L87.085,21.04 C87.085,21.04 87.12,20.935 87.225,20.935 L101.4,20.935 C101.505,20.935 101.54,20.97 101.54,21.04 L101.54,24.085 C101.54,24.19 101.505,24.225 101.4,24.225 L90.655,24.225 L90.375,24.26 L90.375,29.79 L98.53,29.79 C98.635,29.79 98.635,29.825 98.635,29.895 L98.635,32.94 C98.635,33.045 98.565,33.08 98.46,33.08 L90.48,33.08 C90.48,33.08 90.375,33.115 90.375,33.255 L90.375,40.745 L101.995,40.745 C102.1,40.745 102.1,40.78 102.1,40.85 L102.1,43.895 Z M125.845,32.415 C125.845,38.82 120.63,44 114.225,44 L106.035,44 C105.965,44 105.93,44 105.93,43.895 L105.93,21.04 C105.93,20.935 105.965,20.9 106.07,20.9 L114.12,20.9 C116.815,20.9 118.565,21.53 120.35,22.65 C123.64,24.68 125.845,28.285 125.845,32.415 Z M122.59,32.415 C122.59,27.83 118.67,24.19 114.085,24.19 L109.22,24.19 L109.22,40.71 L114.295,40.71 C118.88,40.71 122.59,37 122.59,32.415 Z M153.84,24.05 C153.84,24.155 153.805,24.19 153.7,24.19 L142.955,24.19 L142.675,24.26 L142.675,29.755 L150.83,29.755 C150.935,29.755 150.935,29.79 150.935,29.86 L150.935,32.905 C150.935,33.01 150.865,33.045 150.76,33.045 L142.92,33.045 C142.92,33.045 142.675,33.15 142.675,33.29 L142.675,43.86 C142.675,43.965 142.64,44 142.535,44 L139.525,44 C139.42,44 139.385,43.965 139.385,43.895 L139.385,21.005 C139.385,20.935 139.42,20.9 139.525,20.9 L153.7,20.9 C153.805,20.9 153.84,20.935 153.84,21.005 L153.84,24.05 Z M177.165,21.005 L177.165,34.06 C177.165,39.73 172.545,44.315 166.875,44.315 C161.205,44.315 156.62,39.73 156.62,34.06 L156.62,21.04 C156.62,20.935 156.655,20.9 156.76,20.9 L159.805,20.9 C159.91,20.9 159.91,20.935 159.91,21.005 L159.91,34.025 C159.91,37.875 163.06,41.025 166.875,41.025 C170.725,41.025 173.875,37.875 173.875,34.025 L173.875,21.04 C173.875,20.935 173.91,20.9 174.015,20.9 L177.06,20.9 C177.165,20.9 177.165,20.935 177.165,21.005 Z M199.405,43.86 C199.405,43.965 199.37,44 199.3,44 L195.415,44 C195.415,44 190.585,37.525 188.135,34.165 L184.985,34.165 L184.985,43.86 L184.88,44 L181.765,44 L181.695,43.79 L181.695,20.935 L181.94,20.9 C182.325,20.9 182.745,20.935 183.2,20.935 C184.145,20.935 185.195,20.9 186.07,20.9 L186.56,20.9 C190.48,20.9 194.365,21.355 195.66,25.73 C195.835,26.36 195.94,26.99 195.94,27.62 C195.94,29.055 195.485,30.455 194.61,31.54 C194.225,32.03 193.77,32.38 193.315,32.66 C192.86,32.94 192.37,33.115 191.88,33.325 L191.88,33.465 C194.505,36.86 196.85,40.43 199.405,43.86 Z M192.09,26.885 C191.425,24.33 188.38,24.155 186.07,24.155 L185.125,24.155 L184.985,24.26 L184.985,30.805 L185.195,30.805 C185.86,30.805 186.63,30.84 187.4,30.84 C188.87,30.84 190.375,30.7 191.285,29.685 C191.81,29.125 192.16,28.355 192.16,27.55 C192.16,27.34 192.125,27.095 192.09,26.885 Z M222.765,21.04 L222.765,43.86 C222.765,43.965 222.73,44 222.625,44 L219.3,44 C219.3,44 219.195,44 219.16,43.93 L205.475,26.29 L205.475,43.86 C205.475,43.965 205.44,44 205.335,44 L202.325,44 C202.22,44 202.185,43.965 202.185,43.895 L202.185,21.04 C202.185,20.935 202.22,20.9 202.325,20.9 L205.37,20.9 C205.37,20.9 205.545,20.9 205.65,21.04 L219.475,38.785 L219.475,21.04 C219.475,20.935 219.51,20.9 219.615,20.9 L222.625,20.9 C222.73,20.9 222.765,20.97 222.765,21.04 Z M230.935,43.86 C230.935,43.965 230.9,44 230.795,44 L227.75,44 C227.68,44 227.645,44 227.645,43.895 L227.645,21.04 C227.645,20.935 227.68,20.9 227.785,20.9 L230.83,20.9 C230.935,20.9 230.935,20.935 230.935,21.005 L230.935,43.86 Z M252.125,24.085 C252.125,24.19 252.09,24.19 251.985,24.19 C249.395,24.19 244.565,24.225 244.565,24.225 L244.565,43.86 C244.565,43.965 244.53,44 244.425,44 L241.38,44 C241.31,44 241.275,43.965 241.275,43.895 L241.275,24.19 L234.205,24.19 C234.1,24.19 234.065,24.19 234.065,24.085 L234.065,21.04 C234.065,20.935 234.1,20.9 234.205,20.9 L252.02,20.9 C252.125,20.9 252.125,20.935 252.125,21.005 L252.125,24.085 Z M275.45,21.005 L275.45,34.06 C275.45,39.73 270.83,44.315 265.16,44.315 C259.49,44.315 254.905,39.73 254.905,34.06 L254.905,21.04 C254.905,20.935 254.94,20.9 255.045,20.9 L258.09,20.9 C258.195,20.9 258.195,20.935 258.195,21.005 L258.195,34.025 C258.195,37.875 261.345,41.025 265.16,41.025 C269.01,41.025 272.16,37.875 272.16,34.025 L272.16,21.04 C272.16,20.935 272.195,20.9 272.3,20.9 L275.345,20.9 C275.45,20.9 275.45,20.935 275.45,21.005 Z M297.69,43.86 C297.69,43.965 297.655,44 297.585,44 L293.7,44 C293.7,44 288.87,37.525 286.42,34.165 L283.27,34.165 L283.27,43.86 L283.165,44 L280.05,44 L279.98,43.79 L279.98,20.935 L280.225,20.9 C280.61,20.9 281.03,20.935 281.485,20.935 C282.43,20.935 283.48,20.9 284.355,20.9 L284.845,20.9 C288.765,20.9 292.65,21.355 293.945,25.73 C294.12,26.36 294.225,26.99 294.225,27.62 C294.225,29.055 293.77,30.455 292.895,31.54 C292.51,32.03 292.055,32.38 291.6,32.66 C291.145,32.94 290.655,33.115 290.165,33.325 L290.165,33.465 C292.79,36.86 295.135,40.43 297.69,43.86 Z M290.375,26.885 C289.71,24.33 286.665,24.155 284.355,24.155 L283.41,24.155 L283.27,24.26 L283.27,30.805 L283.48,30.805 C284.145,30.805 284.915,30.84 285.685,30.84 C287.155,30.84 288.66,30.7 289.57,29.685 C290.095,29.125 290.445,28.355 290.445,27.55 C290.445,27.34 290.41,27.095 290.375,26.885 Z M315.485,43.895 C315.485,44 315.45,44.035 315.345,44.035 L300.645,44.035 C300.54,44 300.47,43.895 300.47,43.895 L300.47,21.04 C300.47,21.04 300.505,20.935 300.61,20.935 L314.785,20.935 C314.89,20.935 314.925,20.97 314.925,21.04 L314.925,24.085 C314.925,24.19 314.89,24.225 314.785,24.225 L304.04,24.225 L303.76,24.26 L303.76,29.79 L311.915,29.79 C312.02,29.79 312.02,29.825 312.02,29.895 L312.02,32.94 C312.02,33.045 311.95,33.08 311.845,33.08 L303.865,33.08 C303.865,33.08 303.76,33.115 303.76,33.255 L303.76,40.745 L315.38,40.745 C315.485,40.745 315.485,40.78 315.485,40.85 L315.485,43.895 Z M348.17,26.185 C348.1,26.29 348.065,26.325 347.995,26.325 C347.89,26.325 347.715,26.22 347.225,25.975 C345.265,24.75 342.675,23.875 340.155,23.875 C338.475,23.875 336.795,24.295 335.395,25.205 C332.77,26.92 331.405,29.615 331.405,32.66 C331.405,32.94 331.405,33.22 331.44,33.5 C331.72,36.615 334.345,39.52 337.25,40.57 C338.23,40.92 339.175,41.06 340.12,41.06 C343.025,41.06 345.65,39.625 348.065,38.015 C348.065,38.015 348.1,38.12 348.1,38.26 L348.1,41.865 C345.93,43.51 342.955,44.385 340.05,44.385 C338.16,44.385 336.27,44 334.66,43.23 C330.95,41.445 328.325,37.63 328.01,33.57 C327.975,33.22 327.975,32.87 327.975,32.52 C327.975,28.425 329.795,24.82 333.26,22.37 C335.185,21.04 337.705,20.41 340.225,20.41 C343.025,20.41 345.86,21.145 347.96,22.545 L348.17,22.825 L348.17,26.185 Z M373.91,38.015 C371.915,41.935 367.82,44.49 363.41,44.49 C358.79,44.49 354.45,41.655 352.63,37.385 C351.965,35.845 351.65,34.13 351.65,32.45 C351.65,29.475 352.63,26.5 354.59,24.295 C356.97,21.6 360.225,20.27 363.655,20.27 C364.32,20.27 364.985,20.305 365.685,20.41 C368.695,20.865 371.425,22.86 373.35,25.59 C374.645,27.41 375.24,29.79 375.24,32.17 C375.24,34.235 374.785,36.335 373.91,38.015 Z M371.04,28.915 C370.305,26.955 368.415,25.065 366.42,24.365 C365.475,24.015 364.46,23.84 363.445,23.84 C361.205,23.84 359.035,24.68 357.495,26.36 C356.025,27.97 355.255,30.175 355.255,32.38 C355.255,33.5 355.465,34.62 355.85,35.67 C356.76,38.155 359.28,40.29 361.8,40.78 C362.29,40.885 362.815,40.92 363.305,40.92 C365.51,40.92 367.435,40.08 369.045,38.645 C370.795,37.07 371.67,34.69 371.67,32.345 C371.67,31.19 371.46,30 371.04,28.915 Z M380.96,43.86 C380.96,43.965 380.925,44 380.82,44 L377.775,44 C377.705,44 377.67,43.965 377.67,43.895 L377.67,40.815 C377.67,40.745 377.705,40.71 377.81,40.71 L380.855,40.71 C380.96,40.71 380.96,40.745 380.96,40.815 L380.96,43.86 Z"
          id="FITTEDFURNITURECO."
          fill={color}
          fillRule="nonzero"
        />
        <path
          d="M35.504,2.034 C35.504,2.076 35.49,2.076 35.448,2.076 C34.412,2.076 32.48,2.09 32.48,2.09 L32.48,9.944 C32.48,9.986 32.466,10 32.424,10 L31.206,10 C31.178,10 31.164,9.986 31.164,9.958 L31.164,2.076 L28.336,2.076 C28.294,2.076 28.28,2.076 28.28,2.034 L28.28,0.816 C28.28,0.774 28.294,0.76 28.336,0.76 L35.462,0.76 C35.504,0.76 35.504,0.774 35.504,0.802 L35.504,2.034 Z M44.506,9.944 C44.506,9.986 44.492,9.986 44.45,9.986 L43.246,9.986 C43.204,9.986 43.19,9.986 43.19,9.944 L43.19,5.59 L38.346,5.59 L38.29,5.646 L38.29,9.944 C38.29,9.986 38.276,10 38.234,10 L37.03,10 C36.988,10 36.974,9.986 36.974,9.944 L36.974,0.802 C36.974,0.76 36.988,0.746 37.03,0.746 L38.248,0.746 C38.29,0.746 38.29,0.774 38.29,0.802 L38.304,0.858 L38.304,4.148 C38.304,4.148 38.318,4.26 38.416,4.274 L43.162,4.274 L43.19,4.232 L43.19,0.788 C43.19,0.788 43.204,0.746 43.246,0.746 L44.478,0.746 C44.506,0.746 44.506,0.76 44.506,0.774 L44.506,9.944 Z M52.682,9.958 C52.682,10 52.668,10.014 52.626,10.014 L46.746,10.014 C46.704,10 46.676,9.958 46.676,9.958 L46.676,0.816 C46.676,0.816 46.69,0.774 46.732,0.774 L52.402,0.774 C52.444,0.774 52.458,0.788 52.458,0.816 L52.458,2.034 C52.458,2.076 52.444,2.09 52.402,2.09 L48.104,2.09 L47.992,2.104 L47.992,4.316 L51.254,4.316 C51.296,4.316 51.296,4.33 51.296,4.358 L51.296,5.576 C51.296,5.618 51.268,5.632 51.226,5.632 L48.034,5.632 C48.034,5.632 47.992,5.646 47.992,5.702 L47.992,8.698 L52.64,8.698 C52.682,8.698 52.682,8.712 52.682,8.74 L52.682,9.958 Z"
          id="THE"
          fill={color}
          fillRule="nonzero"
        /> */}
        <path d="M29.1168 50.4903H23.8041V23.1169C23.8041 22.8451 23.7282 22.6072 23.5764 22.4033C23.4499 22.1994 23.2854 22.0974 23.083 22.0974H21.0338C20.8314 22.0974 20.6543 22.1994 20.5025 22.4033C20.376 22.6072 20.3128 22.8451 20.3128 23.1169V50.4903H15V23.7286C15 19.2429 16.5685 17 19.7056 17H24.4112C27.5483 17 29.1168 19.2429 29.1168 23.7286V50.4903Z" fill={color} />
        <path d="M47.1365 23.7286V44.2714C47.1365 48.7571 45.5679 51 42.4308 51H37.3837C34.2466 51 32.6781 48.7571 32.6781 44.2714V23.7286C32.6781 19.2429 34.2466 17 37.3837 17H42.4308C45.5679 17 47.1365 19.2429 47.1365 23.7286ZM41.8237 45.087V22.8621C41.8237 22.5902 41.7478 22.3523 41.596 22.1484C41.4695 21.9445 41.305 21.8426 41.1026 21.8426H38.7119C38.5095 21.8426 38.3324 21.9445 38.1806 22.1484C38.0541 22.3523 37.9909 22.5902 37.9909 22.8621V45.087C37.9909 45.3588 38.0541 45.5967 38.1806 45.8006C38.3324 46.0045 38.5095 46.1064 38.7119 46.1064H41.1026C41.305 46.1064 41.4695 46.0045 41.596 45.8006C41.7478 45.5967 41.8237 45.3588 41.8237 45.087Z" fill={color} />
        <path d="M56.3722 36.982V50.4903H51.0594V17.5097H60.5086C63.6456 17.5097 65.2142 19.7526 65.2142 24.2384V28.0615C65.2142 30.7801 64.4932 32.5132 63.0511 33.2609C64.3161 33.8726 64.9485 35.2659 64.9485 37.4408V50.4903H59.6357V38.0015C59.6357 37.3218 59.3954 36.982 58.9147 36.982H56.3722ZM56.3722 22.3523V31.9865H59.1804C59.3828 31.9865 59.5472 31.8846 59.6737 31.6807C59.8255 31.4768 59.9014 31.2389 59.9014 30.967V23.3718C59.9014 23.0999 59.8255 22.8621 59.6737 22.6582C59.5472 22.4543 59.3828 22.3523 59.1804 22.3523H56.3722Z" fill={color} />
        <path d="M73.9382 37.5427V50.4903H68.6254V17.5097H79.7063V23.6777H73.9382V31.5787H79.3269V37.5427H73.9382Z" fill={color} />
        <path d="M97.2774 23.7286V44.2714C97.2774 48.7571 95.7089 51 92.5718 51H87.5246C84.3876 51 82.819 48.7571 82.819 44.2714V23.7286C82.819 19.2429 84.3876 17 87.5246 17H92.5718C95.7089 17 97.2774 19.2429 97.2774 23.7286ZM91.9646 45.087V22.8621C91.9646 22.5902 91.8887 22.3523 91.7369 22.1484C91.6104 21.9445 91.446 21.8426 91.2436 21.8426H88.8528C88.6504 21.8426 88.4733 21.9445 88.3215 22.1484C88.195 22.3523 88.1318 22.5902 88.1318 22.8621V45.087C88.1318 45.3588 88.195 45.5967 88.3215 45.8006C88.4733 46.0045 88.6504 46.1064 88.8528 46.1064H91.2436C91.446 46.1064 91.6104 46.0045 91.7369 45.8006C91.8887 45.5967 91.9646 45.3588 91.9646 45.087Z" fill={color} />
        <path d="M106.513 44.4753H112.319V50.4903H101.2V17.5097H106.513V44.4753Z" fill={color} />
        <path d="M130.131 17.5097L125.957 32.6492L130.928 50.4903H125.502L121.859 37.4408H120.151V50.4903H114.838V17.5097H120.151V31.3238H121.441L125.274 17.5097H130.131Z" fill={color} />
        <path d="M155.702 17.5097L151.528 32.6492L156.499 50.4903H151.072L147.429 37.4408H145.722V50.4903H140.409V17.5097H145.722V31.3238H147.012L150.845 17.5097H155.702Z" fill={color} />
        <path d="M163.621 17.5097V50.4903H158.308V17.5097H163.621Z" fill={color} />
        <path d="M166.169 23.5757V17.5097H179.451V23.5757H175.466V50.4903H170.154V23.5757H166.169Z" fill={color} />
        <path d="M191.024 45.087V39.9895H196.071V44.2714C196.071 48.7571 194.502 51 191.365 51H186.584C183.446 51 181.878 48.7571 181.878 44.2714V23.7286C181.878 19.2429 183.446 17 186.584 17H191.365C194.502 17 196.071 19.2429 196.071 23.7286V26.8381H191.024V22.8621C191.024 22.5902 190.948 22.3523 190.796 22.1484C190.669 21.9445 190.505 21.8426 190.303 21.8426H187.912C187.709 21.8426 187.532 21.9445 187.38 22.1484C187.254 22.3523 187.191 22.5902 187.191 22.8621V45.087C187.191 45.3588 187.254 45.5967 187.38 45.8006C187.532 46.0045 187.709 46.1064 187.912 46.1064H190.303C190.505 46.1064 190.669 46.0045 190.796 45.8006C190.948 45.5967 191.024 45.3588 191.024 45.087Z" fill={color} />
        <path d="M204.571 37.5427V50.4903H199.259V17.5097H204.571V31.3238H208.784V17.5097H214.097V50.4903H208.784V37.5427H204.571Z" fill={color} />
        <path d="M223.212 44.5772H229.094V50.4903H217.899V17.5097H229.094V23.3208H223.212V31.069H228.715V36.6762H223.212V44.5772Z" fill={color} />
        <path d="M246.246 50.4903H240.933V23.1169C240.933 22.8451 240.857 22.6072 240.706 22.4033C240.579 22.1994 240.415 22.0974 240.212 22.0974H238.163C237.961 22.0974 237.784 22.1994 237.632 22.4033C237.505 22.6072 237.442 22.8451 237.442 23.1169V50.4903H232.129V23.7286C232.129 19.2429 233.698 17 236.835 17H241.54C244.677 17 246.246 19.2429 246.246 23.7286V50.4903Z" fill={color} />
        <path d="M266.624 45.087V39.9895H271.671V44.2714C271.671 48.7571 270.103 51 266.966 51H262.184C259.047 51 257.478 48.7571 257.478 44.2714V23.7286C257.478 19.2429 259.047 17 262.184 17H266.966C270.103 17 271.671 19.2429 271.671 23.7286V26.8381H266.624V22.8621C266.624 22.5902 266.548 22.3523 266.396 22.1484C266.27 21.9445 266.105 21.8426 265.903 21.8426H263.512C263.31 21.8426 263.133 21.9445 262.981 22.1484C262.855 22.3523 262.791 22.5902 262.791 22.8621V45.087C262.791 45.3588 262.855 45.5967 262.981 45.8006C263.133 46.0045 263.31 46.1064 263.512 46.1064H265.903C266.105 46.1064 266.27 46.0045 266.396 45.8006C266.548 45.5967 266.624 45.3588 266.624 45.087Z" fill={color} />
        <path d="M289.318 23.7286V44.2714C289.318 48.7571 287.749 51 284.612 51H279.565C276.428 51 274.859 48.7571 274.859 44.2714V23.7286C274.859 19.2429 276.428 17 279.565 17H284.612C287.749 17 289.318 19.2429 289.318 23.7286ZM284.005 45.087V22.8621C284.005 22.5902 283.929 22.3523 283.777 22.1484C283.651 21.9445 283.486 21.8426 283.284 21.8426H280.893C280.691 21.8426 280.514 21.9445 280.362 22.1484C280.235 22.3523 280.172 22.5902 280.172 22.8621V45.087C280.172 45.3588 280.235 45.5967 280.362 45.8006C280.514 46.0045 280.691 46.1064 280.893 46.1064H283.284C283.486 46.1064 283.651 46.0045 283.777 45.8006C283.929 45.5967 284.005 45.3588 284.005 45.087Z" fill={color} />
        <path d="M298.515 50.4903H293.203V23.7286C293.203 19.2429 294.771 17 297.908 17H300.716C302.563 17 303.879 17.8156 304.663 19.4468C305.397 17.8156 306.712 17 308.61 17H311.418C314.555 17 316.123 19.2429 316.123 23.7286V50.4903H310.811V23.1169C310.811 22.8451 310.735 22.6072 310.583 22.4033C310.456 22.1994 310.292 22.0974 310.09 22.0974H308.04C307.838 22.0974 307.661 22.1994 307.509 22.4033C307.383 22.6072 307.319 22.8451 307.319 23.1169V50.4903H302.007V23.1169C302.007 22.8451 301.931 22.6072 301.779 22.4033C301.652 22.1994 301.488 22.0974 301.286 22.0974H299.236C299.034 22.0974 298.857 22.1994 298.705 22.4033C298.579 22.6072 298.515 22.8451 298.515 23.1169V50.4903Z" fill={color} />
        <path d="M329.338 17.5097C332.475 17.5097 334.043 19.7526 334.043 24.2384V30.8141C334.043 35.2998 332.475 37.5427 329.338 37.5427H325.05V50.4903H319.737V17.5097H329.338ZM328.731 31.6297V23.4228C328.731 23.1509 328.655 22.913 328.503 22.7091C328.376 22.5052 328.212 22.4033 328.01 22.4033H325.05V32.6492H328.01C328.212 32.6492 328.376 32.5472 328.503 32.3433C328.655 32.1394 328.731 31.9015 328.731 31.6297Z" fill={color} />
        <path d="M346.464 17C349.601 17 351.169 19.2429 351.169 23.7286V50.4903H345.856V39.4288H342.024V50.4903H336.711V23.7286C336.711 19.2429 338.279 17 341.416 17H346.464ZM342.024 33.9235H345.856V22.8621C345.856 22.5902 345.78 22.3523 345.629 22.1484C345.502 21.9445 345.338 21.8426 345.135 21.8426H342.745C342.542 21.8426 342.365 21.9445 342.213 22.1484C342.087 22.3523 342.024 22.5902 342.024 22.8621V33.9235Z" fill={color} />
        <path d="M369.208 50.4903H363.895V23.1169C363.895 22.8451 363.819 22.6072 363.668 22.4033C363.541 22.1994 363.377 22.0974 363.174 22.0974H361.125C360.923 22.0974 360.746 22.1994 360.594 22.4033C360.467 22.6072 360.404 22.8451 360.404 23.1169V50.4903H355.091V23.7286C355.091 19.2429 356.66 17 359.797 17H364.502C367.64 17 369.208 19.2429 369.208 23.7286V50.4903Z" fill={color} />
        <path d="M387 17.5097L381.725 38.4603V50.4903H376.412V38.4603L371.138 17.5097H376.147L379.069 31.2729L381.991 17.5097H387Z" fill={color} />
        <path d="M29.247 2.968V0.707H35.897V2.968H33.902V13H31.242V2.968H29.247ZM39.7721 8.174V13H37.1121V0.707H39.7721V5.856H41.8811V0.707H44.5411V13H41.8811V8.174H39.7721ZM49.1051 10.796H52.0501V13H46.4451V0.707H52.0501V2.873H49.1051V5.761H51.8601V7.851H49.1051V10.796Z" fill={color} />
        <path
          d="M24.4987149,5 L10,5 C5.581722,5 2,8.581722 2,13 L2,54 C2,58.418278 5.581722,62 10,62 L390,62 C394.418278,62 398,58.418278 398,54 L398,13 C398,8.581722 394.418278,5 390,5 L57.8027928,5"
          id="Path"
          strokeOpacity="0.85"
          stroke={color}
          strokeWidth="4"
        />
      </g>
    </svg>

    // <svg
    //   className={className}
    //   viewBox="0 0 508 68"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   {...props}
    // >
    //   <path
    //     d="M37.5361 49H30.8161V23.224C30.8161 22.968 30.7201 22.744 30.5281 22.552C30.3681 22.36 30.1601 22.264 29.9041 22.264H27.3121C27.0561 22.264 26.8321 22.36 26.6401 22.552C26.4801 22.744 26.4001 22.968 26.4001 23.224V49H19.6801V23.8C19.6801 19.576 21.6641 17.464 25.6321 17.464H31.5841C35.5521 17.464 37.5361 19.576 37.5361 23.8V49ZM60.3286 23.8V43.144C60.3286 47.368 58.3446 49.48 54.3766 49.48H47.9926C44.0246 49.48 42.0406 47.368 42.0406 43.144V23.8C42.0406 19.576 44.0246 17.464 47.9926 17.464H54.3766C58.3446 17.464 60.3286 19.576 60.3286 23.8ZM53.6086 43.912V22.984C53.6086 22.728 53.5126 22.504 53.3206 22.312C53.1606 22.12 52.9526 22.024 52.6966 22.024H49.6726C49.4166 22.024 49.1926 22.12 49.0006 22.312C48.8406 22.504 48.7606 22.728 48.7606 22.984V43.912C48.7606 44.168 48.8406 44.392 49.0006 44.584C49.1926 44.776 49.4166 44.872 49.6726 44.872H52.6966C52.9526 44.872 53.1606 44.776 53.3206 44.584C53.5126 44.392 53.6086 44.168 53.6086 43.912ZM72.0106 36.28V49H65.2906V17.944H77.2426C81.2106 17.944 83.1946 20.056 83.1946 24.28V27.88C83.1946 30.44 82.2826 32.072 80.4586 32.776C82.0586 33.352 82.8586 34.664 82.8586 36.712V49H76.1386V37.24C76.1386 36.6 75.8346 36.28 75.2266 36.28H72.0106ZM72.0106 22.504V31.576H75.5626C75.8186 31.576 76.0266 31.48 76.1866 31.288C76.3786 31.096 76.4746 30.872 76.4746 30.616V23.464C76.4746 23.208 76.3786 22.984 76.1866 22.792C76.0266 22.6 75.8186 22.504 75.5626 22.504H72.0106ZM94.2294 36.808V49H87.5094V17.944H101.525V23.752H94.2294V31.192H101.045V36.808H94.2294ZM123.751 23.8V43.144C123.751 47.368 121.767 49.48 117.799 49.48H111.415C107.447 49.48 105.463 47.368 105.463 43.144V23.8C105.463 19.576 107.447 17.464 111.415 17.464H117.799C121.767 17.464 123.751 19.576 123.751 23.8ZM117.031 43.912V22.984C117.031 22.728 116.935 22.504 116.743 22.312C116.583 22.12 116.375 22.024 116.119 22.024H113.095C112.839 22.024 112.615 22.12 112.423 22.312C112.263 22.504 112.183 22.728 112.183 22.984V43.912C112.183 44.168 112.263 44.392 112.423 44.584C112.615 44.776 112.839 44.872 113.095 44.872H116.119C116.375 44.872 116.583 44.776 116.743 44.584C116.935 44.392 117.031 44.168 117.031 43.912ZM135.433 43.336H142.777V49H128.713V17.944H135.433V43.336ZM165.307 17.944L160.027 32.2L166.315 49H159.451L154.843 36.712H152.683V49H145.963V17.944H152.683V30.952H154.315L159.163 17.944H165.307ZM197.65 17.944L192.37 32.2L198.658 49H191.794L187.186 36.712H185.026V49H178.306V17.944H185.026V30.952H186.658L191.506 17.944H197.65ZM207.667 17.944V49H200.947V17.944H207.667ZM210.89 23.656V17.944H227.69V23.656H222.65V49H215.93V23.656H210.89ZM242.327 43.912V39.112H248.711V43.144C248.711 47.368 246.727 49.48 242.759 49.48H236.711C232.743 49.48 230.759 47.368 230.759 43.144V23.8C230.759 19.576 232.743 17.464 236.711 17.464H242.759C246.727 17.464 248.711 19.576 248.711 23.8V26.728H242.327V22.984C242.327 22.728 242.231 22.504 242.039 22.312C241.879 22.12 241.671 22.024 241.415 22.024H238.391C238.135 22.024 237.911 22.12 237.719 22.312C237.559 22.504 237.479 22.728 237.479 22.984V43.912C237.479 44.168 237.559 44.392 237.719 44.584C237.911 44.776 238.135 44.872 238.391 44.872H241.415C241.671 44.872 241.879 44.776 242.039 44.584C242.231 44.392 242.327 44.168 242.327 43.912ZM259.464 36.808V49H252.744V17.944H259.464V30.952H264.792V17.944H271.512V49H264.792V36.808H259.464ZM283.042 43.432H290.482V49H276.322V17.944H290.482V23.416H283.042V30.712H290.002V35.992H283.042V43.432ZM312.177 49H305.457V23.224C305.457 22.968 305.361 22.744 305.169 22.552C305.009 22.36 304.801 22.264 304.545 22.264H301.953C301.697 22.264 301.473 22.36 301.281 22.552C301.121 22.744 301.041 22.968 301.041 23.224V49H294.321V23.8C294.321 19.576 296.305 17.464 300.273 17.464H306.225C310.193 17.464 312.177 19.576 312.177 23.8V49ZM337.952 43.912V39.112H344.336V43.144C344.336 47.368 342.352 49.48 338.384 49.48H332.336C328.368 49.48 326.384 47.368 326.384 43.144V23.8C326.384 19.576 328.368 17.464 332.336 17.464H338.384C342.352 17.464 344.336 19.576 344.336 23.8V26.728H337.952V22.984C337.952 22.728 337.856 22.504 337.664 22.312C337.504 22.12 337.296 22.024 337.04 22.024H334.016C333.76 22.024 333.536 22.12 333.344 22.312C333.184 22.504 333.104 22.728 333.104 22.984V43.912C333.104 44.168 333.184 44.392 333.344 44.584C333.536 44.776 333.76 44.872 334.016 44.872H337.04C337.296 44.872 337.504 44.776 337.664 44.584C337.856 44.392 337.952 44.168 337.952 43.912ZM366.657 23.8V43.144C366.657 47.368 364.673 49.48 360.705 49.48H354.321C350.353 49.48 348.369 47.368 348.369 43.144V23.8C348.369 19.576 350.353 17.464 354.321 17.464H360.705C364.673 17.464 366.657 19.576 366.657 23.8ZM359.937 43.912V22.984C359.937 22.728 359.841 22.504 359.649 22.312C359.489 22.12 359.281 22.024 359.025 22.024H356.001C355.745 22.024 355.521 22.12 355.329 22.312C355.169 22.504 355.089 22.728 355.089 22.984V43.912C355.089 44.168 355.169 44.392 355.329 44.584C355.521 44.776 355.745 44.872 356.001 44.872H359.025C359.281 44.872 359.489 44.776 359.649 44.584C359.841 44.392 359.937 44.168 359.937 43.912ZM378.291 49H371.571V23.8C371.571 19.576 373.555 17.464 377.523 17.464H381.075C383.411 17.464 385.075 18.232 386.067 19.768C386.995 18.232 388.659 17.464 391.059 17.464H394.611C398.579 17.464 400.563 19.576 400.563 23.8V49H393.843V23.224C393.843 22.968 393.747 22.744 393.555 22.552C393.395 22.36 393.187 22.264 392.931 22.264H390.339C390.083 22.264 389.859 22.36 389.667 22.552C389.507 22.744 389.427 22.968 389.427 23.224V49H382.707V23.224C382.707 22.968 382.611 22.744 382.419 22.552C382.259 22.36 382.051 22.264 381.795 22.264H379.203C378.947 22.264 378.723 22.36 378.531 22.552C378.371 22.744 378.291 22.968 378.291 23.224V49ZM417.277 17.944C421.245 17.944 423.229 20.056 423.229 24.28V30.472C423.229 34.696 421.245 36.808 417.277 36.808H411.853V49H405.133V17.944H417.277ZM416.509 31.24V23.512C416.509 23.256 416.413 23.032 416.221 22.84C416.061 22.648 415.853 22.552 415.597 22.552H411.853V32.2H415.597C415.853 32.2 416.061 32.104 416.221 31.912C416.413 31.72 416.509 31.496 416.509 31.24ZM438.939 17.464C442.907 17.464 444.891 19.576 444.891 23.8V49H438.171V38.584H433.323V49H426.603V23.8C426.603 19.576 428.587 17.464 432.555 17.464H438.939ZM433.323 33.4H438.171V22.984C438.171 22.728 438.075 22.504 437.883 22.312C437.723 22.12 437.515 22.024 437.259 22.024H434.235C433.979 22.024 433.755 22.12 433.563 22.312C433.403 22.504 433.323 22.728 433.323 22.984V33.4ZM467.708 49H460.988V23.224C460.988 22.968 460.892 22.744 460.7 22.552C460.54 22.36 460.332 22.264 460.076 22.264H457.484C457.228 22.264 457.004 22.36 456.812 22.552C456.652 22.744 456.572 22.968 456.572 23.224V49H449.852V23.8C449.852 19.576 451.836 17.464 455.804 17.464H461.756C465.724 17.464 467.708 19.576 467.708 23.8V49ZM490.213 17.944L483.541 37.672V49H476.821V37.672L470.149 17.944H476.485L480.181 30.904L483.877 17.944H490.213Z"
    //     fill={color}
    //   />
    //   <rect
    //     x="2" y="2" width="504" height="64" rx="6"
    //     stroke={(props && props.color) || 'currentColor'} strokeWidth="4"
    //   />
    // </svg>

);
};

