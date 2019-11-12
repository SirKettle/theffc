import { darken, desaturate, lighten } from 'polished';

const typographyStyles = {
  tiger: {
    fontSize: '70px',
  },
  lion: {
    fontSize: '40px',
  },
  jaguar: {
    fontSize: '25px',
  },
  lynx: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.8,
  },
  pussy: {
    fontSize: '14px',
  },
  kitten: {
    fontSize: '11px',
  },
};

export const cream = {
  name: 'The Fitted Furniture Company - default theme',
  color: {
    text: desaturate(0.5, lighten(0.05, '#080505')), // dark brown - text / logo
    background: desaturate(0.85, '#fefcf3'), // hsla(49, 85%, 97%, 0.5); light cream */
    canvas: desaturate(0.75, darken(0.025, '#fefcf3')),
    footerText: '#F8F4DD',
    footerBackground: desaturate(0.5, lighten(0.1, '#080505')),
  },
  typography: {
    fontFamily: "'Lato', sans-serif",
    ...typographyStyles.lynx,
    ...typographyStyles,
  },
  margin: '20px',
  gap: 15,
};

// https://www.sharps.co.uk/?utm_source=Google-Generics&utm_medium=cpc&utm_campaign=Product%20-%20Wardrobe%20-%20Type%20-%20Fitted%20-%20TP1%20-%20[E]&kcid=go_75115281_3430953441_373511936150_aud-473882299808:kwd-494678489032_c&gclid=Cj0KCQiA-4nuBRCnARIsAHwyuPonWVzQItxyozBttcZ_pRgX0hvv99yxZ34zHdiGwWSIIj62t-OLsT4aAvgYEALw_wcB

export const blue = {
  name: 'The Fitted Furniture Company - default theme',
  color: {
    text: '#092b38', // text / logo
    // text: '#83f873', // text / logo
    background: lighten(0.019, '#f5f8fa'), // hsla(49, 85%, 97%, 0.5); light cream */
    canvas: darken(0.015, '#f5f8fa'),
    footerText: '#f5f8fa',
    footerBackground: '#092b38',
    link: '#00bbee',
    linkHover: '#22eeff',
  },
  typography: {
    fontFamily: 'helvetica, arial',
    ...typographyStyles.lynx,
    ...typographyStyles,
  },
  margin: '20px',
  gap: 20,
};

export default blue;
// export default cream;


//
// export default {
//   name: 'The Fitted Furniture Company - default theme',
//   color: {
//     text: '#912a79', // text / logo
//     // text: '#83f873', // text / logo
//     background: '#fafa92', // hsla(49, 85%, 97%, 0.5); light cream */
//     footerText: '#f5f8fa',
//     footerBackground: '#092b38',
//     link: '#00bbee',
//     linkHover: '#22eeff',
//   },
//   typography: {
//     fontFamily: 'helvetica, arial',
//     ...typographyStyles.lynx,
//     ...typographyStyles,
//   },
//   margin: '20px',
//   gap: 15,
// };
