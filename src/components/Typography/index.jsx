import styled from 'styled-components';
import { pick } from 'ramda';

const fontStyleKeys = [
  'fontFamily',
  'fontSize',
  'fontStyle',
  'fontWeight',
  'letterSpacing',
  'lineHeight',
  'textTransform',
];

export const getFontStyles = key => ({ theme, color, margin }) => ({
  ...pick(fontStyleKeys)(theme.typography),
  ...theme.typography[key],
  color: color || 'inherit',
  margin: margin || '20px 0',
});

export const Copy = styled.span(getFontStyles());

export const Headline = styled.h2(getFontStyles('tiger'));

export const Heading = styled.h3(getFontStyles('lion'));

export const Quote = styled.q(getFontStyles('jaguar'));

export const LargeParagraph = styled.p(getFontStyles('lynx'));

export const Paragraph = styled.p(getFontStyles('pussy'));

export const SmallPrint = styled.p(getFontStyles('kitten'));

export const Hr = styled.div`
  background: rgba(0, 0, 0, 0.1);
  height: 1px;
  margin: 2rem 0;
  border: none;
`;
