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

export const Headline = styled.h2`
  ${getFontStyles('lion')}
  @media (min-width: 600px) {
    ${getFontStyles('tiger')}
  }
`;

export const Heading = styled.h3`
  ${getFontStyles('jaguar')}
  @media (min-width: 600px) {
    ${getFontStyles('lion')}
  }
`;

export const SubHeading = styled.h3`
  ${getFontStyles('puma')}
  @media (min-width: 600px) {
    ${getFontStyles('jaguar')
  }}
`;

export const Quote = styled.q`
  ${getFontStyles('lynx')}
  @media (min-width: 600px) {
    ${getFontStyles('puma')}
  }
`;

export const LargeParagraph = styled.p`
  ${getFontStyles('pussy')}
  @media (min-width: 600px) {
    ${getFontStyles('lynx')}
  }
`;

export const Paragraph = styled.p`
  ${getFontStyles('pussy')}
`;

export const SmallPrint = styled.p`
  ${getFontStyles('kitten')}
`;

export const BlockQuote = styled.blockquote`
  padding-left: ${({ theme }) => theme.gap}px;
  border-left: solid 4px rgba(0, 0, 0, 0.1);

  & > * {
    font-style: italic;
    opacity: 0.7;
    line-height: 1.6;
    font-size: ${({ theme }) => theme.typography.lynx.fontSize} !important;

    @media (min-width: 600px) {
      font-size: ${({ theme }) => theme.typography.jaguar.fontSize} !important;
    }
  }

  @media (min-width: 600px) {
    padding-left: ${({ theme }) => theme.gap * 2}px;
  }
`;

export const UnorderedList = styled.ul`
  paddingleft: ${({ theme }) => theme.gap * 2}px;
`;

export const OrderedList = styled.ol`
  paddingleft: ${({ theme }) => theme.gap * 2}px;
`;

export const ListItem = styled.li`
  margin: ${({ theme }) => theme.margin} 0;
  list-style-position: outside;
  text-align: left;
`;

export const Hr = styled.div`
  background: rgba(0, 0, 0, 0.1);
  height: 1px;
  margin: ${({ theme }) => theme.margin} 0;
  border: none;
`;
