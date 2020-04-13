import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import Button from '../../components/Button/Button';
import IconButton from '../../components/IconButton';
import Logo from '../../assets/images/logo/Logo';
import { getFontStyles } from '../../components/Typography';

export const LogoWrapper = styled.div`
  flex: 0 0 200px;

  @media (min-width: 1100px) {
    flex-basis: 300px;
  }
`;

export const TheFFCLogo = styled(Logo)`
  position: absolute;
  top: -0.5px;
  left: -1px;
  width: 100%;
  height: 100%;
`;

const SHADOW_OPACITY = 0.35;

export const TheFFCLogoShadow = styled(Logo)`
  width: 100%;
  height: 100%;
  filter: blur(1px);
  opacity: ${SHADOW_OPACITY};
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

const SELECTED = 0.4;
const HOVER = 0.1;
const ACTIVE = 0.1;

const linkStyles = css`
  ${itemStyles}
  cursor: ${({ isSelected }) => (isSelected ? 'default' : 'pointer')};
  text-decoration: none;
  text-shadow: 1px 0 1px rgba(0,0,0,${SHADOW_OPACITY});
  
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

export const ContactDetails = styled.div`
  margin-right: 0;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const AnchorLink = styled.a`
  ${linkStyles}
  font-size: ${({ theme }) => theme.typography.pussy.fontSize};
`;

export const NavButton = styled(Button)`
  ${linkStyles}
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
      transparentize(1 - Math.min(1, scrollY * 0.002 + 0.45), theme.color.footerBackground)};
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

export const NarrowTheFFCLogo = styled(Logo)`
  width: 100%;
  height: 100%;
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

  padding: ${({ theme }) => theme.gap * 2}px;

  transform: translateX(${({ visible }) => (visible ? 0 : 150)}%);
  transition: transform 0.15s ease-out;
`;

export const NarrowMenu = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NarrowNavItem = styled.button`
  ${itemStyles}
  ${getFontStyles('lynx')}
  opacity: ${({ isSelected }) => (isSelected ? 0.5 : 1)};
`;

export const Hr = styled.div`
  margin: ${({ theme }) => theme.gap * 1.5}px;
  width: 30%;
  height: 1px;
  background-color: ${({ theme }) => transparentize(0.85, theme.color.footerText)};
`;

export const NarrowNavLinkItem = styled.a`
  ${itemStyles}
  ${getFontStyles('lynx')}
  text-decoration: none;
`;

export const CloseButton = styled(IconButton)`
  position: absolute;
  top: ${({ theme }) => theme.gap * 1.5}px;
  right: ${({ theme }) => theme.gap * 1.5}px;
`;

export const OpenButton = styled(IconButton)`
  margin-left: 30%;
`;

export const NarrowLogoWrapper = styled.div`
  flex: 1 1 auto;
  max-width: 500px;
`;
