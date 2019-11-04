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

export default {
  name: 'The Fitted Furniture Company - default theme',
  color: {
    text: '#080505', // dark brown - text / logo
    background: '#fefcf3', // hsla(49, 85%, 97%, 0.5); light cream */
    footerText: '#F8F4DD',
    footerBackground: '#080505',
  },
  typography: {
    fontFamily: "'Lato', sans-serif",
    ...typographyStyles.lynx,
    ...typographyStyles,
  },
  margin: '20px',
  gap: 15,
};
