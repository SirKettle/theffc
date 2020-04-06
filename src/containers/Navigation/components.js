import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import Button from '../../components/Button/Button';
import IconButton from '../../components/IconButton';
import Logo from '../../assets/images/logo/Logo';
import { getFontStyles } from '../../components/Typography';

export const LogoWrapper = styled.div`
  flex: 0 0 200px;
`;

export const TheFFCLogo = styled(Logo)`
  width: 100%;
  height: 100%;
`;

const itemStyles = css`
  background: transparent;
  border: none;
  outline: none;
  display: block;
  color: inherit;
  padding: 0;
  position: relative;
  top: 2px;
  line-height: 1.5;
  margin: 0 25px;
`;

export const PhoneNumber = styled.div`
  ${itemStyles}
  margin-right: 0;
`;

const SELECTED = 0.4;
const HOVER = 0.1;
const ACTIVE = 0.1;

export const NavButton = styled(Button)`
  ${itemStyles}
  cursor: ${({ isSelected }) => (isSelected ? 'default' : 'pointer')};

  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    height: 1px;
    width: 10px;
    background: ${({ isSelected, theme }) => (isSelected ? transparentize(SELECTED, theme.color.background) : '')};
  }

  &:hover {
    &:after {
      background: ${({ isSelected, theme }) => transparentize(isSelected ? SELECTED : HOVER, theme.color.background)};
    }
  }
  
  &:active, &:focus {
    &:after {
      background: ${({ isSelected, theme }) => transparentize(isSelected ? SELECTED : ACTIVE, theme.color.background)};
    }
  }
`;

export const NavigationComponent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  flex: 0 0 auto;
  z-index: 9;
  padding: 40px 0;
  color: ${({ theme }) => theme.color.footerText};
  background-color: ${({ scrollY, theme }) =>
    transparentize(1 - Math.min(1, scrollY * 0.002), theme.color.footerBackground)};
  transition: background-color 0.3s ease-out;

  &:hover {
    background-color: ${({ scrollY, theme }) =>
      transparentize(1 - Math.min(1, scrollY * 0.002 + 0.3), theme.color.footerBackground)};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`;

export const Menu = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: row;
  // justify-content: flex-start;
  justify-content: center;
  align-items: center;
`;

export const NarrowNavigationComponent = styled.div`
  // position: fixed;
  // top: 0;
  // left: 0;
  // right: 0;
  flex: 0 0 auto;
  z-index: 9;
  display: flex;
  align-items: center;

  padding: ${({ theme }) => theme.gap}px;

  @media (min-width: 600px) {
    padding: ${({ theme }) => `${theme.gap * 2}px ${theme.gap * 3}px`};
  }

  color: ${({ theme }) => theme.color.text};
`;

export const NarrowMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  color: ${({ theme }) => theme.color.footerText};
  background-color: ${({ theme }) => transparentize(0.05, theme.color.footerBackground)};
  display: flex;
  align-items: flex-start;

  padding: ${({ theme }) => theme.gap}px;

  @media (min-width: 600px) {
    padding: ${({ theme }) => `${theme.gap * 2}px ${theme.gap * 3}px`};
  }

  transform: translateX(${({ visible }) => (visible ? 0 : 100)}%);
  transition: transform 0.25s ease-out;
`;

export const NarrowMenu = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const NarrowNavItem = styled.button`
  ${itemStyles}
  ${getFontStyles('jaguar')}
  opacity: ${({ isSelected }) => (isSelected ? 0.5 : 1)};
`;

export const CloseButton = styled(IconButton)`
  margin-left: 20%;
`;

export const OpenButton = styled(IconButton)`
  margin-left: 30%;
`;

export const NarrowLogoWrapper = styled.div`
  flex: 1 1 auto;
  max-width: 500px;
`;
