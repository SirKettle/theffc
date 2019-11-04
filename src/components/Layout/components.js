import styled from 'styled-components';
import Logo from '../../assets/images/logo/Logo';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import Centered from './Centered';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

export const CenteredContent = styled(Centered)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: flex-start;
`;

export const Header = styled.div`
  flex: 0 0 auto;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (min-width: 600px) {
    padding: 2rem 3rem;
  }
`;

export const LogoWrapper = styled.div`
  flex: 0 0 100%;
  color: #080505;
  @media (min-width: 500px) {
    flex: 0 0 55%;
  }
`;

export const TheFFCLogo = styled(Logo)`
  width: 100%;
  height: 100%;
`;

export const HeroWrapper = styled.div`
  flex: 0 0 auto;
  width: 100%;
  position: relative;
`;

export const Hero = styled.img`
  display: block;
  width: 100%;
  margin: 0;
`;

export const HeroContent = styled(Content)`
  padding-top: 1rem;

  @media (min-width: 600px) {
    padding-top: 2rem;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding: 1rem 0 2rem;

  @media (min-width: 600px) {
    padding: 2rem 0 4rem;
  }
  a {
    color: #38bada; /* blue */
    text-decoration: none;
  }

  a:hover {
    color: #38bada; /* blue */
    text-decoration: underline;
  }
`;

export const HorizontalLine = styled.div`
  flex: 0 0 1px;
  background: rgba(0, 0, 0, 0.1);
`;

export const LayoutFooter = styled(Footer)`
  flex: 0 0 auto;
`;
