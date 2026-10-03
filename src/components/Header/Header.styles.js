import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px;
  background-color: ${({ theme }) => theme.colors.bgApp};
  margin-bottom: 24px;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(8px);
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const LogoCircle = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(255, 51, 102, 0.2);

  svg {
    width: 26px;
    height: 26px;
  }
`;

export const BrandTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BrandText = styled.h1`
  font-size: 1.4rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.textMain};
  margin: 0;
  line-height: 1;
  letter-spacing: -0.5px;
  font-family: ${({ theme }) => theme.fonts.main};
`;

export const SloganText = styled.span`
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-top: 3px;
  font-weight: 500;
`;

export const UserAvatar = styled.div`
  width: 34px;
  height: 34px;
  background-color: #E2D9F3;
  color: #5B488A;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
`;

export const HeaderPlaceholder = styled.div`
  width: 360px;
`;