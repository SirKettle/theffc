import { darken, desaturate, lighten } from 'polished';

const typographyStyles = {
  tiger: {
    fontSize: '70px',
    fontFamily: "'Playfair Display', serif",
    lineHeight: 1.3,
  },
  lion: {
    fontSize: '40px',
    fontFamily: "'Playfair Display', serif",
    lineHeight: 1.3,
  },
  jaguar: {
    fontSize: '30px',
    fontFamily: "'Playfair Display', serif",
    lineHeight: 1.3,
  },
  puma: {
    fontSize: '23px',
    fontFamily: "'Playfair Display', serif",
    lineHeight: 1.3,
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
  name: 'The Handmade Kitchen Company - default theme',
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
  name: 'The Handmade Kitchen Company - default theme',
  color: {
    text: '#092b38', // text / logo
    // text: '#83f873', // text / logo
    background: lighten(0.019, '#f5f8fa'), // hsla(49, 85%, 97%, 0.5); light cream */
    canvas: darken(0.015, '#f5f8fa'),
    footerText: '#f5f8fa',
    footerBackground: '#092b38',
    link: '#00bbee',
    linkHover: '#009DC8',
  },
  typography: {
    fontFamily: 'helvetica, arial',
    ...typographyStyles.lynx,
    ...typographyStyles,
  },
  margin: '20px',
  gap: 20,
};

export const green = {
  name: 'The Handmade Kitchen Company - default theme',
  color: {
    text: '#09382a', // text / logo
    // text: '#83f873', // text / logo
    background: lighten(0.019, '#f5f8fa'), // hsla(49, 85%, 97%, 0.5); light cream */
    canvas: darken(0.015, '#f5f8fa'),
    footerText: '#f5f8fa',
    footerBackground: '#09382a',
    link: '#eece00',
    linkHover: '#eed900',
  },
  typography: {
    fontFamily: 'helvetica, arial',
    ...typographyStyles.lynx,
    ...typographyStyles,
  },
  margin: '20px',
  gap: 20,
};

export const maroon = {
  name: 'The Handmade Kitchen Company - default theme',
  color: {
    text: '#380918', // text / logo
    // text: '#83f873', // text / logo
    background: lighten(0.019, '#f5f8fa'), // hsla(49, 85%, 97%, 0.5); light cream */
    canvas: darken(0.015, '#f5f8fa'),
    footerText: '#f5f8fa',
    footerBackground: '#380918',
    link: '#eece00',
    linkHover: '#eed900',
  },
  typography: {
    fontFamily: 'helvetica, arial',
    ...typographyStyles.lynx,
    ...typographyStyles,
  },
  margin: '20px',
  gap: 20,
};

export const gold = {
  name: 'The Handmade Kitchen Company - default theme',
  color: {
    text: '#2e2804', // text / logo
    // text: '#83f873', // text / logo
    background: lighten(0.019, '#f5f8fa'), // hsla(49, 85%, 97%, 0.5); light cream */
    canvas: darken(0.015, '#f5f8fa'),
    footerText: '#f5f8fa',
    footerBackground: '#2e2804',
    link: '#eece00',
    linkHover: '#eed900',
  },
  typography: {
    fontFamily: 'helvetica, arial',
    ...typographyStyles.lynx,
    ...typographyStyles,
  },
  margin: '20px',
  gap: 20,
};

// export default blue;
export default gold;

