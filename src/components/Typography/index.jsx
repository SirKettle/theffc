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
  margin: margin || `${theme.margin} 0`,
});

export const Copy = styled.span(getFontStyles());

export const Headline = styled.h2(getFontStyles('tiger'));

export const Heading = styled.h3(getFontStyles('lion'));

export const Quote = styled.q(getFontStyles('jaguar'));

export const LargeParagraph = styled.p(getFontStyles('lynx'));

export const Paragraph = styled.p(getFontStyles('pussy'));

export const SmallPrint = styled.p(getFontStyles('kitten'));

export const BlockQuote = styled.blockquote`
  padding-left: ${({ theme }) => theme.gap}px;
  border-left: solid 4px rgba(0, 0, 0, 0.1);

  & > * {
    font-style: italic;
    opacity: 0.7;
    font-size: ${({ theme }) => theme.typography.jaguar.fontSize} !important;
  }

  @media (min-width: 600px) {
    padding-left: ${({ theme }) => theme.gap * 2}px;
  }
`;

export const Hr = styled.div`
  background: rgba(0, 0, 0, 0.1);
  height: 1px;
  margin: ${({ theme }) => theme.margin} 0;
  border: none;
`;
