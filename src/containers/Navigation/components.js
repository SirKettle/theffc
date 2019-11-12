import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import Button from '../../components/Button/Button';
import Centered from '../../components/Layout/Centered';

const itemStyles = css`
  display: block;
  background: transparent;
  border: none;
  outline: none;
  display: block;
  color: inherit;
  padding: 0 0.75rem;
  position: relative;
  top: 4px;
  line-height: 3rem;
  font-size: 13px;
  margin: 0;

  @media (min-width: 600px) {
    padding: 0 ${({ theme }) => theme.gap}px;
    margin-right: 1px;
    font-size: inherit;
  }
`;

export const NavItem = styled.div`
  ${itemStyles}

  display: none;
  @media (min-width: 600px) {
    display: block;
  }
`;

export const NavButton = styled(Button)`
  ${itemStyles}
  cursor: pointer;
  border-bottom: solid 4px transparent;

  &:hover {
    border-bottom-color: ${({ theme }) => transparentize(0.7, theme.color.background)};
  }

  ${({ isSelected, theme }) =>
    isSelected ? `border-bottom-color: ${transparentize(0.4, theme.color.background)}` : ''}
`;

export const NavigationComponent = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  z-index: 9;
  padding: 0.1rem 0.5rem 0;
  border-bottom: solid 4px rgba(0, 0, 0, 0.2);
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => transparentize(0.025, theme.color.background)};
  @media (min-width: 600px) {
    padding: 0.1rem ${({ theme }) => theme.gap * 2}px 0;
  }
`;

export const CenteredContent = styled(Centered)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Menu = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
