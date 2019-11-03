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
    lineHeight: 1.5,
  },
  pussy: {
    fontSize: '14px',
  },
  kitten: {
    fontSize: '11px',
  },
};

export default {
  name: 'The Fitted Furniture Company - default theme',
  color: {
    text: '#080505', // dark brown - text / logo
    background: '#fefcf3', // hsla(49, 85%, 97%, 0.5); light cream */
  },
  typography: {
    fontFamily: "'Lato', sans-serif",
    ...typographyStyles.lynx,
    ...typographyStyles,
  },
  layout: {
    margin: '20px',
  },
};
